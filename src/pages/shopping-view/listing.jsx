import ProductFilter from "@/components/shopping-view/filter";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { fetchAllFilteredProducts } from "@/store/shop/products-slice";
import { ChevronRight } from "lucide-react";
import {
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo,
  Fragment,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import isEqual from "lodash/isEqual";
import { Skeleton } from "@/components/ui/skeleton";
import ProductTileSkeleton from "@/components/shopping-view/product-tile-skeleton.jsx";
import { fetchAllCategories } from "@/store/common-slice/categories-slice";
import { fetchAllBrands } from "@/store/common-slice/brands-slice";
import { addToCart } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import PropTypes from "prop-types";
import { translateCategoryName } from "@/lib/taxonomy-translations";

function createSearchParamsHelper(filterParams) {
  const queryParams = [];
  const sortedKeys = Object.keys(filterParams).sort();

  for (const key of sortedKeys) {
    const value = filterParams[key];
    if (Array.isArray(value)) {
      if (value.length > 0) {
        const sortedValue = [...value].sort();
        queryParams.push(`${key}=${encodeURIComponent(sortedValue.join(","))}`);
      }
    } else if (value !== undefined && value !== "" && value !== null) {
      queryParams.push(`${key}=${encodeURIComponent(value)}`);
    }
  }
  return queryParams.join("&");
}

function parseUrlParamsToFilters(searchParams) {
  const filters = {};
  for (const [key, value] of searchParams.entries()) {
    if (value === "") continue;
    if (key === "category" || key === "brand") {
      filters[key] = value.split(",").sort();
    } else {
      filters[key] = value;
    }
  }
  return filters;
}

const Breadcrumbs = ({ categorySlug }) => {
  const { categoryList } = useSelector((state) => state.categories);

  const findCategoryPath = (categories, slug) => {
    for (const category of categories) {
      if (category.slug === slug) {
        return [category];
      }
      if (category.children && category.children.length > 0) {
        const path = findCategoryPath(category.children, slug);
        if (path) {
          return [category, ...path];
        }
      }
    }
    return null;
  };

  const path = categorySlug
    ? findCategoryPath(categoryList, categorySlug)
    : null;

  if (!path) {
    return (
      <div className="flex items-center text-sm text-muted-foreground mb-4">
        <Link to="/shop/home" className="hover:text-primary">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span>All Products</span>
      </div>
    );
  }

  return (
    <nav className="flex items-center text-sm text-muted-foreground mb-4">
      <Link to="/shop/home" className="hover:text-primary">
        Home
      </Link>
      {path.map((p, index) => (
        <Fragment key={p._id}>
          <ChevronRight className="h-4 w-4 mx-1" />
          {index === path.length - 1 ? (
            <span className="font-medium text-foreground">
              {translateCategoryName(p.name, p.slug)}
            </span>
          ) : (
            <Link
              to={`/shop/listing?category=${p.slug}`}
              className="hover:text-primary"
            >
              {translateCategoryName(p.name, p.slug)}
            </Link>
          )}
        </Fragment>
      ))}
    </nav>
  );
};

Breadcrumbs.propTypes = {
  categorySlug: PropTypes.string,
};

function ShoppingListing() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { productList, isLoading: productsLoading } = useSelector(
    (state) => state.shopProducts,
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryList = [], isLoading: categoriesLoading } = useSelector(
    (state) => state.categories || { categoryList: [], isLoading: false },
  );
  const { brandList = [], isLoading: brandsLoading } = useSelector(
    (state) => state.brands || { brandList: [], isLoading: false },
  );
  const [filters, setFilters] = useState(() =>
    parseUrlParamsToFilters(searchParams),
  );
  const defaultSort = "price-lowtohigh";
  const isInitialMount = useRef(true);
  const lastFiltersPushedToUrl = useRef(createSearchParamsHelper(filters));
  const categorySlugFromUrl = searchParams.get("category");

  const handleFilter = useCallback((getSectionId, getCurrentOptionSlug) => {
    setFilters((prevFilters) => {
      const cpyFilters = JSON.parse(JSON.stringify(prevFilters));
      const currentSectionFilters = cpyFilters[getSectionId]
        ? [...cpyFilters[getSectionId]]
        : [];
      const indexOfCurrentOption =
        currentSectionFilters.indexOf(getCurrentOptionSlug);

      if (indexOfCurrentOption === -1) {
        currentSectionFilters.push(getCurrentOptionSlug);
      } else {
        currentSectionFilters.splice(indexOfCurrentOption, 1);
      }

      if (currentSectionFilters.length > 0) {
        cpyFilters[getSectionId] = currentSectionFilters.sort();
      } else {
        delete cpyFilters[getSectionId];
      }

      if (!isEqual(prevFilters, cpyFilters)) {
        sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
        return cpyFilters;
      }
      return prevFilters;
    });
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilters({});
    sessionStorage.removeItem("filters");
  }, []);

  const handleAddtoCart = useCallback(
    (product) => {
      if ((product?.totalStock ?? 0) <= 0) {
        toast({
          variant: "warning",
          title: "Out of stock",
          description: "This product is currently unavailable.",
        });
        return;
      }

      dispatch(addToCart({ product, quantity: 1 }));
      toast({
        variant: "success",
        title: "Added to cart",
        description: `${product?.title || "Product"} has been added.`,
      });
    },
    [dispatch, toast],
  );

  useEffect(() => {
    if (isInitialMount.current) return;

    const newFiltersString = createSearchParamsHelper(filters);
    if (newFiltersString !== lastFiltersPushedToUrl.current) {
      const currentParams = new URLSearchParams(searchParams);
      Object.keys(filters).forEach((key) => {
        const value = filters[key];
        if (Array.isArray(value)) {
          if (value.length > 0) currentParams.set(key, value.join(","));
          else currentParams.delete(key);
        } else if (value !== undefined && value !== "") {
          currentParams.set(key, value);
        } else {
          currentParams.delete(key);
        }
      });
      ["category", "brand"].forEach((key) => {
        if (!filters[key] || filters[key].length === 0) {
          currentParams.delete(key);
        }
      });

      setSearchParams(currentParams, { replace: true });
      lastFiltersPushedToUrl.current = newFiltersString;
    }
  }, [filters, searchParams, setSearchParams]);

  useEffect(() => {
    const urlFilters = parseUrlParamsToFilters(searchParams);
    const urlFiltersString = createSearchParamsHelper(urlFilters);

    if (
      !isEqual(filters, urlFilters) &&
      urlFiltersString !== lastFiltersPushedToUrl.current
    ) {
      setFilters(urlFilters);
      lastFiltersPushedToUrl.current = urlFiltersString;

      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
  }, [searchParams]);

  useEffect(() => {
    if (!isInitialMount.current) {
      dispatch(
        fetchAllFilteredProducts({
          filterParams: filters,
          sortParams: defaultSort,
        }),
      );
    }
  }, [dispatch, filters]);

  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchAllBrands());
    const initialUrlFilters = parseUrlParamsToFilters(searchParams);
    dispatch(
      fetchAllFilteredProducts({
        filterParams: initialUrlFilters,
        sortParams: defaultSort,
      }),
    );

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);

  const flattenCategories = (categories, result = []) => {
    categories.forEach((category) => {
      result.push(category);
      if (category.children && category.children.length > 0) {
        flattenCategories(category.children, result);
      }
    });
    return result;
  };

  const dynamicFilterOptions = useMemo(() => {
    return {
      categories: categoryList,
      brands: brandList.filter((brand) => brand.isActive),
    };
  }, [categoryList, brandList]);

  const skeletonCount = 8;

  return (
    <div className="container mx-auto px-2 md:px-6 py-4">
      <Breadcrumbs categorySlug={categorySlugFromUrl} />
      <div className="space-y-4 p-2 md:p-4 max-[720px]:p-0 container mx-auto px-6 max-[1024px]:px-1">
        <ProductFilter
          filters={filters}
          handleFilter={handleFilter}
          dynamicFilterOptions={dynamicFilterOptions}
          isLoading={categoriesLoading || brandsLoading}
          onClearFilters={handleClearFilters}
        />
        <div className="bg-background w-full rounded-lg ">
          <div className="p-4 border-b flex items-center justify-between max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-2">
            <h2 className="text-lg font-semibold max-[720px]:hidden">
              {filters?.category?.length > 0
                ? `${filters.category
                  .map((slug) => {
                    const allCategories = flattenCategories(categoryList);
                    const category = allCategories.find(
                      (c) => c.slug === slug,
                    );
                    return category
                      ? category.parent
                        ? `    └─ ${translateCategoryName(category.name, category.slug)}`
                        : translateCategoryName(category.name, category.slug)
                      : slug;
                  })
                  .join(", ")} Products`
                : filters?.brand?.length > 0
                  ? `${filters.brand
                    .map(
                      (slug) =>
                        brandList.find((b) => b.slug === slug)?.name || slug,
                    )
                    .join(", ")} Brand Products`
                  : "All Products"}
            </h2>
            <div className="flex items-center gap-3">
              {productsLoading ? (
                <Skeleton className="h-5 w-20" />
              ) : (
                <span className="text-sm text-muted-foreground">
                  {productList?.length || 0} Products
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 max-[720px]:px-0 max-[720px]:gap-1.5">
            {productsLoading ? (
              Array.from({ length: skeletonCount }).map((_, index) => (
                <ProductTileSkeleton key={`skeleton-${index}`} />
              ))
            ) : productList && productList.length > 0 ? (
              productList.map((productItem) => (
                <ShoppingProductTile
                  key={productItem._id}
                  product={productItem}
                  handleAddtoCart={() => handleAddtoCart(productItem)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-500">
                No products match the selected filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingListing;
