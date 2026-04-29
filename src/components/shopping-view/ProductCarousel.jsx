import { useState, useRef, useEffect, useCallback } from "react";
import ShoppingProductTile from "./product-tile";
import ProductTileSkeleton from "./product-tile-skeleton.jsx";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllFilteredProducts } from "@/store/shop/products-slice";
import isEqual from "lodash/isEqual";

function ProductCarousel({ title, handleAddtoCart, viewAllPath, fetchConfig }) {
  const skeletonCount = 6;
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [internalProducts, setInternalProducts] = useState([]);
  const [internalLoading, setInternalLoading] = useState(true);
  const [internalError, setInternalError] = useState(null);
  const prevFetchConfigRef = useRef();

  const checkScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const tolerance = 5;
      setCanScrollLeft(scrollLeft > tolerance);
      setCanScrollRight(
        scrollWidth > clientWidth &&
          scrollLeft < scrollWidth - clientWidth - tolerance,
      );
    } else {
      setCanScrollLeft(false);
      setCanScrollRight(false);
    }
  }, []);

  const scroll = useCallback(
    (direction) => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollAmount = container.clientWidth * 0.8;
        container.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
        setTimeout(checkScroll, 350);
      }
    },
    [checkScroll],
  );

  useEffect(() => {
    if (fetchConfig && !isEqual(fetchConfig, prevFetchConfigRef.current)) {
      setInternalLoading(true);
      setInternalError(null);
      dispatch(
        fetchAllFilteredProducts({
          filterParams: fetchConfig.filterParams,
          sortParams: fetchConfig.sortParams,
        }),
      )
        .unwrap()
        .then((payload) => {
          if (payload.success) {
            setInternalProducts(
              payload.data?.slice(0, fetchConfig.limit || 10) || [],
            );
          } else {
            setInternalError(payload.message || "Could not fetch data.");
            setInternalProducts([]);
          }
        })
        .catch((error) => {
          setInternalError(error.message || "An error occurred.");
          setInternalProducts([]);
        })
        .finally(() => {
          setInternalLoading(false);
          setTimeout(checkScroll, 150);
        });
      prevFetchConfigRef.current = fetchConfig;
    } else if (!fetchConfig) {
      setInternalLoading(false);
      setInternalProducts([]);
      setInternalError("Missing fetch config.");
      prevFetchConfigRef.current = fetchConfig;
    }
  }, [dispatch, fetchConfig, checkScroll, title]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      window.addEventListener("resize", checkScroll);
      const timer = setTimeout(checkScroll, 300);
      return () => {
        window.removeEventListener("resize", checkScroll);
        clearTimeout(timer);
      };
    }
  }, [checkScroll]);

  const handleViewAllClick = () => {
    if (viewAllPath) navigate(viewAllPath);
    else console.warn("ProductCarousel: viewAllPath prop'u tanımlanmamış.");
  };

  return (
    <section className="shop-section my-1 py-2">
      <div className="shop-container max-[1024px]:px-2">
        {/* Section header */}
        <div className="flex items-center justify-between mb-2 px-1">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-purple-700 flex items-center">
            {title}
          </h2>

          {viewAllPath && (
            <Button
              variant="link"
              onClick={handleViewAllClick}
              className="text-primary p-0 h-auto font-medium text-sm flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>

        {/* Carousel */}
        <div className="relative z-0">
          {/* Left scroll button */}
          <Button
            size="icon"
            className={cn(
              "absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md bg-white h-8 w-8 transition-all",
              "max-md:h-7 max-md:w-7 max-md:-left-2",
              !internalLoading && canScrollLeft
                ? "opacity-100"
                : "opacity-0 pointer-events-none",
            )}
            onClick={() => {
              if (!canScrollLeft || internalLoading) return;
              scroll("left");
            }}
            aria-disabled={!canScrollLeft || internalLoading}
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="h-4 w-4 text-gray-700" />
          </Button>

          {/* Products container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-3 overflow-x-auto py-1 pb-3 px-1 no-scrollbar"
          >
            {internalLoading ? (
              Array.from({ length: skeletonCount }).map((_, index) => (
                <div
                  key={`skel-${fetchConfig?.key || title}-${index}`}
                  className="product-carousel-item flex-shrink-0"
                >
                  <ProductTileSkeleton />
                </div>
              ))
            ) : internalError ? (
              <div className="w-full text-center py-10 text-red-500">
                Error: {internalError}
              </div>
            ) : internalProducts && internalProducts.length > 0 ? (
              internalProducts.map((productItem) => (
                <div
                  key={productItem._id}
                  className="product-carousel-item flex-shrink-0"
                >
                  <ShoppingProductTile
                    product={productItem}
                    handleAddtoCart={() =>
                      handleAddtoCart(productItem._id, productItem.totalStock)
                    }
                  />
                </div>
              ))
            ) : (
              <div className="w-full text-center py-10 text-gray-500">
                No products to display in this section.
              </div>
            )}
          </div>

          {/* Right scroll button */}
          <Button
            size="icon"
            className={cn(
              "absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md bg-white h-8 w-8 transition-all",
              "max-md:h-7 max-md:w-7 max-md:-right-2",
              !internalLoading && canScrollRight
                ? "opacity-100"
                : "opacity-0 pointer-events-none",
            )}
            onClick={() => {
              if (!canScrollRight || internalLoading) return;
              scroll("right");
            }}
            aria-disabled={!canScrollRight || internalLoading}
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="h-4 w-4 text-gray-700" />
          </Button>
        </div>
      </div>
    </section>
  );
}

ProductCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  handleAddtoCart: PropTypes.func,
  viewAllPath: PropTypes.string,
  products: PropTypes.array,
  isLoading: PropTypes.bool,
  fetchConfig: PropTypes.shape({
    key: PropTypes.string,
    filterParams: PropTypes.object,
    sortParams: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    limit: PropTypes.number,
  }),
};

export default ProductCarousel;
