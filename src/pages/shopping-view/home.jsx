import { useEffect, useState, useCallback } from "react";
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

  const handleAddtoCart = useCallback(() => {}, []);
  const quickExploreItems = [
    {
      title: "Phones",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
      link: "/shop/listing?category=telefon",
    },
    {
      title: "Sound Systems",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80",
      link: "/shop/listing?category=ses-sistemleri",
    },
    {
      title: "Orbit",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80",
      link: "/shop/listing?brand=orbit",
    },
    {
      title: "AudioX",
      image:
        "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=600&q=80",
      link: "/shop/listing?brand=audiox",
    },
    {
      title: "Lumina",
      image:
        "https://images.unsplash.com/photo-1533228100845-08145b01de14?w=600&q=80",
      link: "/shop/listing?brand=lumina",
    },
    {
      title: "Novatek",
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&q=80",
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
      <section className="my-1 md:my-4 container mx-auto px-20 max-[1024px]:px-1 relative z-[9999997]">
        {featuresLoading || sideBannersLoading ? (
          <div className="flex flex-col md:flex-row gap-4 h-60  max-sm:h-[200px] max-md:h-[200px]">
            <Skeleton className="w-full md:w-[65%] h-full rounded-3xl bg-gray-200 animate-pulse max-sm:h-40" />
            <Skeleton className="w-full md:w-[35%] h-full rounded-3xl bg-gray-200 animate-pulse max-md:hidden" />
          </div>
        ) : (
          <div className="flex  md:flex-row gap-4 ">
            <div
              className={`relative w-full md:w-[65%] rounded-3xl overflow-hidden shadow-sm group max-sm:h-40 max-md:h-48 h-60`}
            >
              {featureImageList && featureImageList.length > 0 ? (
                featureImageList.map((slide, index) => (
                  <img
                    key={slide._id || index}
                    src={slide.image}
                    alt={slide.title || `Banner ${index + 1}`}
                    onClick={() => handlePromoCardClick(slide.link)}
                    className={`${
                      index === currentSlide
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    } absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                      slide.link ? "cursor-pointer" : ""
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
                    className="absolute top-1/2 left-3 z-20 transform -translate-y-1/2 bg-white/60 hover:bg-white rounded-full h-8 w-8 max-sm:h-6 max-md:h-6 max-sm:w-6 max-md:w-6"
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
                    className="absolute top-1/2 right-3 z-20 transform -translate-y-1/2 bg-white/60 hover:bg-white rounded-full h-8 w-8 shadow-md max-sm:h-6 max-md:h-6 max-sm:w-6 max-md:w-6"
                    aria-label="Scroll right"
                  >
                    <ChevronRightIcon className="w-5 h-5 text-gray-700" />
                  </Button>
                </>
              )}
            </div>
            <div
              className={`relative w-full md:w-[35%] rounded-3xl overflow-hidden shadow-sm group bg-gray-200 max-sm:h-32 max-md:h-48 h-60 max-md:hidden`}
            >
              {sideBannerList && sideBannerList.length > 0 ? (
                sideBannerList.map((slide, index) => (
                  <img
                    key={slide._id || index}
                    src={slide.image}
                    alt={slide.title || `Banner ${index + 1}`}
                    onClick={() => handlePromoCardClick(slide.link)}
                    className={`${
                      index === currentSideBannerIndex
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    } absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ease-in-out ${
                      slide.link ? "cursor-pointer" : ""
                    }`}
                    loading="eager"
                  />
                ))
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-50 ">
                  <span className="text-gray-400 text-sm">Banner Area</span>
                </div>
              )}
              {sideBannerList && sideBannerList.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSideBannerNav(-1);
                    }}
                    className="absolute top-1/2 left-3 z-20 transform -translate-y-1/2 bg-white/60 hover:bg-white rounded-full h-8 w-8 shadow-md max-sm:h-6 max-md:h-6 max-sm:w-6 max-md:w-6"
                    aria-label="Scroll left"
                  >
                    <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSideBannerNav(1);
                    }}
                    className="absolute top-1/2 right-3 z-20 transform -translate-y-1/2 bg-white/60 hover:bg-white rounded-full h-8 w-8 shadow-md max-sm:h-6 max-md:h-6 max-sm:w-6 max-md:w-6"
                  >
                    <ChevronRightIcon className="w-5 h-5 text-gray-700" />
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </section>

      <div className="container mx-auto px-4 space-y-0 pb-8 max-[1024px]:px-0">
        {sectionsLoading ? (
          Array.from({ length: 0 }).map((_, sectionIndex) => (
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
                {section.contentType === "CATEGORY" &&
                  section.contentValue === "telefon" && (
                  <div className="shop-container max-[1024px]:px-2">
                    <section className="rounded-2xl border border-slate-100 bg-white px-3 py-4 shadow-sm sm:px-5">
                      <div className="mb-4 flex items-center justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                          Explore Brands & Categories
                        </h3>
                      </div>
                      <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-6">
                        {quickExploreItems.map((item, index) => (
                          <button
                            key={item.title}
                            type="button"
                            onClick={() => navigate(item.link)}
                            className={`group flex flex-col items-center justify-start gap-2 ${
                              index > 2 ? "max-[790px]:hidden" : ""
                            }`}
                          >
                            <div className="w-full max-w-[132px] sm:max-w-[148px] md:max-w-[160px] aspect-square rounded-full border border-slate-200 bg-slate-50 p-1 shadow-sm transition-transform duration-200 group-hover:scale-105 group-hover:shadow-md">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full rounded-full object-cover object-center"
                              />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-slate-700 text-center">
                              {item.title}
                            </span>
                          </button>
                        ))}
                      </div>
                    </section>
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
