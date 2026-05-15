import ShoppingProductTile from "@/components/shopping-view/product-tile";
import {
  getSearchResults,
  resetSearchResults,
} from "@/store/shop/search-slice";
import { fetchAllCategories } from "@/store/common-slice/categories-slice";
import { fetchAllBrands } from "@/store/common-slice/brands-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import NoSearchResults from "./NoSearchResults";
import ProductTileSkeleton from "@/components/shopping-view/product-tile-skeleton.jsx";
import { Compass, Sparkles } from "lucide-react";
import { translateCategoryName } from "@/lib/taxonomy-translations";

function SearchProducts() {
  const [, setKeyword] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { searchResults, isLoading: searchLoading } = useSelector(
    (state) => state.shopSearch,
  );
  const { categoryList = [] } = useSelector(
    (state) => state.categories || { categoryList: [] },
  );
  const { brandList = [] } = useSelector(
    (state) => state.brands || { brandList: [] },
  );
  const dispatch = useDispatch();
  const keyword = (searchParams.get("keyword") || "").trim();
  const topCategories = categoryList.slice(0, 10);
  const topBrands = brandList.filter((brand) => brand.isActive).slice(0, 8);
  const isMobileInitialState =
    !keyword && !searchLoading && searchResults.length === 0;

  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchAllBrands());
  }, [dispatch]);

  useEffect(() => {
    const keywordFromUrl = searchParams.get("keyword");
    if (keywordFromUrl && keywordFromUrl.trim() !== "") {
      setKeyword(keywordFromUrl);
      dispatch(getSearchResults(keywordFromUrl.trim()));
    } else {
      dispatch(resetSearchResults());
      setKeyword("");
    }
  }, [searchParams, dispatch]);

  const handleAddtoCart = () => {};

  return (
    <div className="container mx-auto md:px-6 px-4 py-8">
      {isMobileInitialState && (
        <div className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-primary" />
              <h2 className="text-base font-bold text-slate-800">
                Search & Discover
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Start searching from the header, or pick a category/brand below.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-semibold text-slate-800">Popular Categories</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {topCategories.map((category) => (
                <button
                  key={category._id}
                  type="button"
                  onClick={() => navigate(`/shop/listing?category=${category.slug}`)}
                  className="px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {translateCategoryName(category.name, category.slug)}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 mb-3">Top Brands</h3>
            <div className="flex flex-wrap gap-2">
              {topBrands.map((brand) => (
                <button
                  key={brand._id}
                  type="button"
                  onClick={() => navigate(`/shop/listing?brand=${brand.slug}`)}
                  className="px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {brand.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {searchLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductTileSkeleton key={`search-skel-${index}`} />
          ))}
        </div>
      ) : searchResults.length === 0 && keyword ? (
        <NoSearchResults />
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-[800px]:gap-2">
          {searchResults.map((item) => (
            <ShoppingProductTile
              key={item._id}
              handleAddtoCart={() => handleAddtoCart(item._id, item.totalStock)}
              product={item}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SearchProducts;
