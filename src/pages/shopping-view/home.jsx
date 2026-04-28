import { useEffect, useState, useCallback, useRef } from "react";
import { addToCart } from "@/store/shop/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFeatureImages } from "@/store/common-slice";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchSideBanners } from "@/store/common-slice/side-banner-slice";
import ProductTileSkeleton from "@/components/shopping-view/product-tile-skeleton.jsx";
import ProductCarousel from "@/components/shopping-view/ProductCarousel";
import { fetchActiveHomeSections } from "@/store/common-slice/home-sections-slice";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

function ShoppingHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSideBannerIndex, setCurrentSideBannerIndex] = useState(0);
  const brandScrollRef = useRef(null);

  const scrollBrands = (direction) => {
    if (brandScrollRef.current) {
      const scrollAmount = 300;
      brandScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const { featureImageList, isLoading: featuresLoading } = useSelector(
    (state) => state.commonFeature,
  );
  const { sideBannerList, isLoading: sideBannersLoading } = useSelector(
    (state) => state.sideBanners || { sideBannerList: [], isLoading: false },
  );
  const { activeHomeSections = [], isLoading: sectionsLoading } = useSelector(
    (state) =>
      state.homeSections || { activeHomeSections: [], isLoading: true },
  );
  const handlePromoCardClick = (link) => {
    if (link) {
      if (link.startsWith("http") || link.startsWith("https")) {
        window.open(link, "noopener,noreferrer");
      } else {
        navigate(link);
      }
    }
  };
  const handleSideBannerNav = (direction) => {
    if (!sideBannerList || sideBannerList.length === 0) return;
    const newIndex = currentSideBannerIndex + direction;
    if (newIndex < 0) {
      setCurrentSideBannerIndex(sideBannerList.length - 1);
    } else if (newIndex >= sideBannerList.length) {
      setCurrentSideBannerIndex(0);
    } else {
      setCurrentSideBannerIndex(newIndex);
    }
  };

  const handleAddtoCart = useCallback((product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  }, [dispatch]);

  const quickExploreItems = [
    {
      title: "Phones",
      image: "/bannerx/1.webp",
      link: "/shop/listing?category=telefon",
    },
    {
      title: "Sound Systems",
      image: "/bannerx/2.webp",
      link: "/shop/listing?category=ses-sistemleri",
    },
    {
      title: "Orbit",
      image: "/bannerx/3.webp",
      link: "/shop/listing?brand=orbit",
    },
    {
      title: "AudioX",
      image: "/bannerx/4.webp",
      link: "/shop/listing?brand=audiox",
    },
    {
      title: "Lumina",
      image: "/bannerx/5.webp",
      link: "/shop/listing?brand=lumina",
    },
    {
      title: "Novatek",
      image: "/bannerx/6.webp",
      link: "/shop/listing?brand=novatek",
    },
  ];

  useEffect(() => {
    if (featureImageList?.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide(
          (prevSlide) => (prevSlide + 1) % featureImageList.length,
        );
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [featureImageList]);

  useEffect(() => {
    if (sideBannerList?.length > 1) {
      const timer = setInterval(() => {
        setCurrentSideBannerIndex(
          (prevIndex) => (prevIndex + 1) % sideBannerList.length,
        );
      }, 4500);
      return () => clearInterval(timer);
    }
  }, [sideBannerList]);

  useEffect(() => {
    dispatch(fetchActiveHomeSections());
    dispatch(getFeatureImages());
    dispatch(fetchSideBanners());
  }, [dispatch]);

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <section className="my-1 md:my-4 pt-5 container mx-auto px-20 max-[1024px]:px-1 max-[1024px]:pt-1 relative z-[9999997]">
        {featuresLoading ? (
          <div className="flex gap-4 h-[400px] max-sm:h-[250px] max-md:h-[300px]">
            <Skeleton className="w-full h-full rounded-3xl bg-gray-200 animate-pulse" />
          </div>
        ) : (
          <div className="flex w-full">
            <div className="hero-banner-container relative w-full rounded-3xl overflow-hidden shadow-sm group">
            >
              {featureImageList && featureImageList.length > 0 ? (
                featureImageList.map((slide, index) => (
                  <img
                    key={slide._id || index}
                    src={slide.image}
                    alt={slide.title || `Banner ${index + 1}`}
                    onClick={() => handlePromoCardClick(slide.link)}
                    className={`${index === currentSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                      } absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${slide.link ? "cursor-pointer" : ""
                      }`}
                    loading="eager"
                  />
                ))
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Banner Area</span>
                </div>
              )}
              {featureImageList && featureImageList.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide(
                        (prev) =>
                          (prev - 1 + featureImageList.length) %
                          featureImageList.length,
                      );
                    }}
                    className="absolute top-1/2 left-3 z-20 transform -translate-y-1/2 bg-white/60 hover:bg-white rounded-full h-8 w-8 max-sm:h-6 max-md:h-6 max-sm:w-6 max-md:w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Scroll left"
                  >
                    <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide(
                        (prev) => (prev + 1) % featureImageList.length,
                      );
                    }}
                    className="absolute top-1/2 right-3 z-20 transform -translate-y-1/2 bg-white/60 hover:bg-white rounded-full h-8 w-8 shadow-md max-sm:h-6 max-md:h-6 max-sm:w-6 max-md:w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Scroll right"
                  >
                    <ChevronRightIcon className="w-5 h-5 text-gray-700" />
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Top Brands Section */}
      <div className="shop-container mx-auto max-[1024px]:px-2 max-[640px]:px-0">
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between mb-4 px-1">
            {/* <h3 className="text-base sm:text-lg font-bold text-purple-700">Top Brands</h3> */}
          </div>
          <div className="relative group">
            <Button
              variant="outline"
              size="icon"
              onClick={(e) => { e.stopPropagation(); scrollBrands("left"); }}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md bg-white h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity max-md:hidden"
            >
              <ChevronLeftIcon className="h-4 w-4 text-gray-700" />
            </Button>

            <div ref={brandScrollRef} className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2 px-1 snap-x scroll-smooth">
              {[
                { name: "Apple", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
                { name: "Samsung", img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
                { name: "Lenovo", img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
                { name: "HP", img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
                { name: "Asus", img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" },
                { name: "Huawei", img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Huawei_Logo.svg" },
                { name: "Sony", img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Sony_logo.svg" },
                { name: "Dell", img: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
              ].map((brand, idx) => (
                <div key={idx} className="snap-start flex-shrink-0 w-[90px] h-[45px] sm:w-[130px] sm:h-[70px] md:w-[150px] md:h-[80px] bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center p-3 sm:p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <img src={brand.img} alt={brand.name} className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={(e) => { e.stopPropagation(); scrollBrands("right"); }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md bg-white h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity max-md:hidden"
            >
              <ChevronRightIcon className="h-4 w-4 text-gray-700" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-6 pb-8 max-[1024px]:px-0 mt-4">
        {/* Quick Explore Section */}
        <div className="shop-container max-[1024px]:px-2">
          <section className="px-0 py-4 ">
            <div className="mb-4 flex items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-bold text-purple-700">
                Browse Categories
              </h3>
            </div>
            <div className="category-grid grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-6">
              {quickExploreItems.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => navigate(item.link)}
                  className={`category-grid-item group flex flex-col items-center justify-start gap-2 ${index > 2 ? "max-[790px]:hidden" : ""
                    }`}
                >
                  <div className="category-card w-full aspect-square rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm transition-transform duration-200 group-hover:scale-105 group-hover:shadow-md">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <span className="category-label text-xs font-medium text-slate-700 text-center">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Custom Banner Row */}
        <div className="shop-container mx-auto max-[1024px]:px-2">
          <div className="promo-banner-grid grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="promo-banner-item rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <img src="/bannar2.avif" alt="Promo 1" className="w-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="promo-banner-item rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <img src="/banner3.avif" alt="Promo 2" className="w-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

        {sectionsLoading ? (
          Array.from({ length: 3 }).map((_, sectionIndex) => (
            <div key={`home-section-skel-${sectionIndex}`}>
              <Skeleton className="h-8 w-1/3 mb-4" />
              <div className="flex space-x-4 overflow-hidden pb-4">
                {Array.from({ length: 6 }).map((_, productIndex) => (
                  <div
                    key={`home-prod-skel-${sectionIndex}-${productIndex}`}
                    className="flex-shrink-0 w-60"
                  >
                    <ProductTileSkeleton />
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : activeHomeSections && activeHomeSections.length > 0 ? (
          activeHomeSections.map((section) => {
            let filterParams = {};
            let sortParams = "salesCount-desc";
            let fetchKey = section._id;
            let viewAllPath = "/shop/listing";

            if (section.contentType === "BEST_SELLING") {
              sortParams = "salesCount-desc";
              fetchKey = "best-selling";
              viewAllPath = "/shop/listing?sortBy=salesCount-desc";
            } else if (
              section.contentType === "CATEGORY" &&
              section.contentValue
            ) {
              filterParams = { category: [section.contentValue] };
              sortParams = "createdAt-desc";
              fetchKey = `category-${section.contentValue}`;
              viewAllPath = `/shop/listing?category=${section.contentValue}`;
            } else if (
              section.contentType === "BRAND" &&
              section.contentValue
            ) {
              filterParams = { brand: [section.contentValue] };
              sortParams = "createdAt-desc";
              fetchKey = `brand-${section.contentValue}`;
              viewAllPath = `/shop/listing?brand=${section.contentValue}`;
            }

            const fetchConfig = {
              key: fetchKey,
              filterParams: filterParams,
              sortParams: sortParams,
              limit: section.itemLimit || 10,
            };

            return (
              <div key={section._id} className="space-y-5">
                <ProductCarousel
                  title={section.title}
                  fetchConfig={fetchConfig}
                  handleAddtoCart={handleAddtoCart}
                  viewAllPath={viewAllPath}
                />

                {/* Banners after Best Selling */}
                {section.contentType === "BEST_SELLING" && (
                  <div className="shop-container mx-auto max-[1024px]:px-2 space-y-4">
                    {/* Banner 7 - Full width */}
                    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group w-full">
                      <img
                        src="/banner7.avif"
                        alt="Promotion Banner"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Banner 5 & 6 - Side by side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                        <img
                          src="/banner5.avif"
                          alt="Promo Banner 5"
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                        <img
                          src="/banner6.avif"
                          alt="Promo Banner 6"
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 text-gray-500">
            No sections available to display on the home page.
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingHome;
