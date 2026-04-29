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
import { products } from "@/mockSite/catalog";
import { useToast } from "@/components/ui/use-toast";

function ShoppingHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSideBannerIndex, setCurrentSideBannerIndex] = useState(0);
  const brandScrollRef = useRef(null);

  const scrollBrands = (direction) => {
    if (brandScrollRef.current) {
      const scrollAmount = 300;
      brandScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
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

  const handleAddtoCart = useCallback(
    (productId) => {
      const product = products.find((p) => p._id === productId) || {
        _id: productId,
      };

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
      {/* Quick Explore Section */}
      <div className="container mx-auto px-4 max-[1024px]:px-0 mt-4 md:mt-2 relative z-0">
        <div className="shop-container max-[1024px]:px-2">
          <section className="px-0 py-1">
            <div className="mb-2 flex items-center justify-between gap-2">
              {/*<h3 className="text-base sm:text-lg font-bold text-purple-700">
                Browse Categories
              </h3>*/}
            </div>
            <div className="category-grid grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-6">
              {quickExploreItems.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => navigate(item.link)}
                  className={`category-grid-item group flex flex-col items-center justify-start gap-2 ${
                    index > 6 ? "max-[790px]:hidden" : ""
                  }`}
                >
                  <div className="category-card w-full aspect-square rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm transition-transform duration-200 group-hover:scale-105 group-hover:shadow-md">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="container mx-auto px-4 max-[1024px]:px-0 my-3 md:my-4 pt-1 max-[1024px]:pt-1 relative z-0">
        <div className="shop-container max-[1024px]:px-2">
          <div className="w-full">
            {featuresLoading ? (
              <div className="flex gap-4 h-[400px] max-sm:h-[250px] max-md:h-[300px]">
                <Skeleton className="w-full h-full rounded-3xl bg-gray-200 animate-pulse" />
              </div>
            ) : (
              <div className="flex w-full">
                <div className="hero-banner-container relative w-full rounded-3xl overflow-hidden shadow-sm group">
                  {featureImageList && featureImageList.length > 0 ? (
                    <img
                      key={
                        featureImageList[currentSlide]?._id ??
                        `banner-${currentSlide}`
                      }
                      src={featureImageList[currentSlide]?.image}
                      alt={
                        featureImageList[currentSlide]?.title ||
                        `Banner ${currentSlide + 1}`
                      }
                      onClick={() =>
                        handlePromoCardClick(
                          featureImageList[currentSlide]?.link,
                        )
                      }
                      className={`hero-banner-slide-left absolute inset-0 z-0 h-full w-full object-cover object-center ${
                        featureImageList[currentSlide]?.link
                          ? "cursor-pointer"
                          : ""
                      }`}
                      loading="eager"
                    />
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
                        className="absolute top-1/2 left-3 z-20 -translate-y-1/2 bg-white/60 hover:bg-white rounded-full h-8 w-8 max-sm:h-6 max-md:h-6 max-sm:w-6 max-md:w-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity"
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
                        className="absolute top-1/2 right-3 z-20 -translate-y-1/2 bg-white/60 hover:bg-white rounded-full h-8 w-8 shadow-md max-sm:h-6 max-md:h-6 max-sm:w-6 max-md:w-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity"
                        aria-label="Scroll right"
                      >
                        <ChevronRightIcon className="w-5 h-5 text-gray-700" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Top Brands Section */}
      <div className="hidden lg:block shop-container mx-auto">
        <div className="pt-2 pb-0 sm:pt-2 sm:pb-5 sm:px-4">
          <div className="flex items-center justify-between mb-4 px-1">
            {/* <h3 className="text-base sm:text-lg font-bold text-purple-700">Top Brands</h3> */}
          </div>
          <div className="relative group">
            <Button
              variant="outline"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                scrollBrands("left");
              }}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md bg-white h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity max-md:hidden"
            >
              <ChevronLeftIcon className="h-4 w-4 text-gray-700" />
            </Button>

            <div
              ref={brandScrollRef}
              className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2 px-1 snap-x scroll-smooth"
            >
              {[
                {
                  name: "Apple",
                  img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                },

                {
                  name: "Lenovo",
                  img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg",
                },
                {
                  name: "HP",
                  img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
                },
                {
                  name: "Asus",
                  img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg",
                },
                {
                  name: "Huawei",
                  logo: (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <title>Huawei</title>
                      <path d="M3.67 6.14S1.82 7.91 1.72 9.78v0.35c0.08 1.51 1.22 2.4 1.22 2.4 1.83 1.79 6.26 4.04 7.3 4.55 0 0 0.06 0.03 0.1 -0.01l0.02 -0.04v-0.04C7.52 10.8 3.67 6.14 3.67 6.14zM9.65 18.6c-0.02 -0.08 -0.1 -0.08 -0.1 -0.08l-7.38 0.26c0.8 1.43 2.15 2.53 3.56 2.2 0.96 -0.25 3.16 -1.78 3.88 -2.3 0.06 -0.05 0.04 -0.09 0.04 -0.09zm0.08 -0.78C6.49 15.63 0.21 12.28 0.21 12.28c-0.15 0.46 -0.2 0.9 -0.21 1.3v0.07c0 1.07 0.4 1.82 0.4 1.82 0.8 1.69 2.34 2.2 2.34 2.2 0.7 0.3 1.4 0.31 1.4 0.31 0.12 0.02 4.4 0 5.54 0 0.05 0 0.08 -0.05 0.08 -0.05v-0.06c0 -0.03 -0.03 -0.05 -0.03 -0.05zM9.06 3.19a3.42 3.42 0 0 0 -2.57 3.15v0.41c0.03 0.6 0.16 1.05 0.16 1.05 0.66 2.9 3.86 7.65 4.55 8.65 0.05 0.05 0.1 0.03 0.1 0.03a0.1 0.1 0 0 0 0.06 -0.1c1.06 -10.6 -1.11 -13.42 -1.11 -13.42 -0.32 0.02 -1.19 0.23 -1.19 0.23zm8.299 2.27s-0.49 -1.8 -2.44 -2.28c0 0 -0.57 -0.14 -1.17 -0.22 0 0 -2.18 2.81 -1.12 13.43 0.01 0.07 0.06 0.08 0.06 0.08 0.07 0.03 0.1 -0.03 0.1 -0.03 0.72 -1.03 3.9 -5.76 4.55 -8.64 0 0 0.36 -1.4 0.02 -2.34zm-2.92 13.07s-0.07 0 -0.09 0.05c0 0 -0.01 0.07 0.03 0.1 0.7 0.51 2.85 2 3.88 2.3 0 0 0.16 0.05 0.43 0.06h0.14c0.69 -0.02 1.9 -0.37 3 -2.26l-7.4 -0.25zm7.83 -8.41c0.14 -2.06 -1.94 -3.97 -1.94 -3.98 0 0 -3.85 4.66 -6.67 10.8 0 0 -0.03 0.08 0.02 0.13l0.04 0.01h0.06c1.06 -0.53 5.46 -2.77 7.28 -4.54 0 0 1.15 -0.93 1.21 -2.42zm1.52 2.14s-6.28 3.37 -9.52 5.55c0 0 -0.05 0.04 -0.03 0.11 0 0 0.03 0.06 0.07 0.06 1.16 0 5.56 0 5.67 -0.02 0 0 0.57 -0.02 1.27 -0.29 0 0 1.56 -0.5 2.37 -2.27 0 0 0.73 -1.45 0.17 -3.14z" />
                    </svg>
                  ),
                },
                {
                  name: "Sony",
                  logo: (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <title>Sony</title>
                      <path d="M8.5505 9.8881c0.921 0 1.6574 0.2303 2.2209 0.7423 0.3848 0.3485 0.5999 0.8454 0.5939 1.3665a1.9081 1.9081 0 0 1 -0.5939 1.3726c-0.5272 0.4848 -1.3483 0.7423 -2.221 0.7423 -0.8725 0 -1.6785 -0.2575 -2.2148 -0.7423 -0.3908 -0.3485 -0.609 -0.8484 -0.603 -1.3726 0 -0.518 0.2182 -1.015 0.603 -1.3665 0.5 -0.4545 1.3847 -0.7423 2.2149 -0.7423zm0.003 3.6692c0.4606 0 0.8878 -0.1606 1.1878 -0.4575 0.2999 -0.2999 0.4332 -0.6605 0.4332 -1.1029 0 -0.4242 -0.1484 -0.821 -0.4333 -1.1029 -0.2938 -0.2908 -0.7332 -0.4545 -1.1877 -0.4545s-0.8938 0.1637 -1.1907 0.4545c-0.2848 0.2818 -0.4333 0.6787 -0.4333 1.103 -0.006 0.409 0.1485 0.806 0.4333 1.1029 0.2969 0.2939 0.7332 0.4575 1.1907 0.4575zm-4.8418 -1.9665c0.1605 0.0424 0.315 0.094 0.4666 0.1636a1.352 1.352 0 0 1 0.3787 0.2576c0.197 0.206 0.309 0.4817 0.306 0.7665a0.9643 0.9643 0 0 1 -0.3787 0.7788 2.0662 2.0662 0 0 1 -0.709 0.3485 3.7231 3.7231 0 0 1 -1.1938 0.1697c-0.352 0 -0.5467 -0.0406 -0.8138 -0.0962l-0.077 -0.016c-0.294 -0.0666 -0.5817 -0.1575 -0.8575 -0.2787a0.0695 0.0695 0 0 0 -0.0424 -0.0121c-0.0454 0 -0.0818 0.0394 -0.0818 0.0848v0.203H0.1212v-1.4786h0.5242a0.7559 0.7559 0 0 0 0.1363 0.418c0.2121 0.2607 0.4394 0.3607 0.6575 0.4395 0.3666 0.1212 0.7514 0.1848 1.1362 0.1969 0.5526 0 0.8756 -0.134 0.9455 -0.163l0.009 -0.0037 0.0062 -0.0023c0.0616 -0.0226 0.3119 -0.1143 0.3119 -0.3916 0 -0.2743 -0.2338 -0.334 -0.387 -0.373l-0.022 -0.0058c-0.1708 -0.046 -0.562 -0.0872 -0.9897 -0.1323l-0.1526 -0.016c-0.4848 -0.0515 -0.9696 -0.1273 -1.1968 -0.1758 -0.4977 -0.1097 -0.6942 -0.2917 -0.816 -0.4045l-0.0082 -0.0076A1.0192 1.0192 0 0 1 0 11.1608c0 -0.497 0.3394 -0.797 0.7575 -0.9817 0.4454 -0.2 0.9756 -0.288 1.4392 -0.288 0.8211 0.0031 1.4877 0.2697 1.727 0.394 0.097 0.0515 0.1455 -0.0121 0.1455 -0.0606v-0.1484h0.5272v1.2876h-0.4727a0.9056 0.9056 0 0 0 -0.2939 -0.4909 1.289 1.289 0 0 0 -0.297 -0.1787c-0.3968 -0.1667 -0.821 -0.2515 -1.2513 -0.2455 -0.4423 0 -0.8665 0.085 -1.0786 0.2153 -0.1333 0.0818 -0.2 0.1848 -0.2 0.306 0 0.1727 0.1454 0.2424 0.2182 0.2636 0.1967 0.0597 0.6328 0.103 0.972 0.1369 0.0736 0.0073 0.1426 0.0142 0.2036 0.0206 0.3272 0.0334 1.012 0.1243 1.315 0.2zm18.1673 -0.9966v-0.4787H24v0.4696h-0.4757c-0.1727 0 -0.2424 0.0334 -0.3727 0.1788l-1.4271 1.63a0.098 0.098 0 0 0 -0.0182 0.0698v0.7423a1.106 1.106 0 0 0 0.0121 0.103 0.1496 0.1496 0 0 0 0.1 0.0909 0.9368 0.9368 0 0 0 0.1303 0.009h0.4848v0.4698h-2.5724v-0.4697h0.4606a0.9343 0.9343 0 0 0 0.1302 -0.0091 0.1627 0.1627 0 0 0 0.1031 -0.091 0.5626 0.5626 0 0 0 0.009 -0.1v-0.7422c0 -0.0242 0 -0.0242 -0.0333 -0.0636a606.7592 606.7592 0 0 0 -1.4119 -1.6028c-0.0758 -0.0788 -0.2061 -0.2061 -0.406 -0.2061h-0.4576v-0.4696h2.5876v0.4696h-0.3121c-0.0697 0 -0.1182 0.0697 -0.0576 0.1455 0 0 0.8696 1.0392 0.8787 1.0513 0.0091 0.0122 0.0152 0.0122 0.0273 0.003 0.0121 -0.009 0.8938 -1.0453 0.8999 -1.0543a0.0912 0.0912 0 0 0 -0.0182 -0.1273 0.1095 0.1095 0 0 0 -0.0606 -0.0182zm-6.284 -0.0031h0.4848c0.2212 0 0.2606 0.0848 0.2636 0.2909l0.0273 1.5664 -2.5815 -2.324H11.944v0.4697h0.412c0.297 0 0.3182 0.1636 0.3182 0.309v2.2138c0.0004 0.1285 0.0009 0.295 -0.1818 0.295h-0.506v0.4667h2.1634v-0.4697h-0.5273c-0.212 0 -0.2211 -0.097 -0.2242 -0.303v-1.8816l2.9724 2.6511h0.7575l-0.0394 -2.9966c0.003 -0.218 0.0182 -0.2908 0.2424 -0.2908h0.4726v-0.4697H15.595Z" />
                    </svg>
                  ),
                },

                {
                  name: "Dell",
                  img: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
                },
                {
                  name: "Samsung",
                  logo: (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <title>Samsung</title>
                      <path d="m19.8166 10.2808 0.0459 2.6934h-0.023l-0.7793 -2.6934h-1.2837v3.3925h0.8481l-0.0458 -2.785h0.023l0.8366 2.785h1.2264v-3.3925zm-16.149 0 -0.6418 3.427h0.9284l0.4699 -3.1175h0.0229l0.4585 3.1174h0.9169l-0.6304 -3.4269zm5.1805 0 -0.424 2.6132h-0.023l-0.424 -2.6132H6.5788l-0.0688 3.427h0.8596l0.023 -3.0832h0.0114l0.573 3.0831h0.8711l0.5731 -3.083h0.023l0.0228 3.083h0.8596l-0.0802 -3.4269zm-7.2664 2.4527c0.0343 0.0802 0.0229 0.1949 0.0114 0.2522 -0.0229 0.1146 -0.1031 0.2292 -0.3324 0.2292 -0.2177 0 -0.3438 -0.126 -0.3438 -0.3095v-0.3323H0v0.2636c0 0.7679 0.6074 0.9971 1.2493 0.9971 0.6189 0 1.1346 -0.2178 1.2149 -0.7794 0.0458 -0.298 0.0114 -0.4928 0 -0.5616 -0.1605 -0.722 -1.467 -0.9283 -1.5588 -1.3295 -0.0114 -0.0688 -0.0114 -0.1375 0 -0.1834 0.023 -0.1146 0.1032 -0.2292 0.3095 -0.2292 0.2063 0 0.321 0.126 0.321 0.3095v0.2063h0.8595v-0.2407c0 -0.745 -0.6762 -0.8596 -1.1576 -0.8596 -0.6074 0 -1.1117 0.2063 -1.2034 0.7564 -0.023 0.149 -0.0344 0.2866 0.0114 0.4585 0.1376 0.7106 1.364 0.9169 1.5358 1.3524m11.152 0c0.0343 0.0803 0.0228 0.1834 0.0114 0.2522 -0.023 0.1146 -0.1032 0.2292 -0.3324 0.2292 -0.2178 0 -0.3438 -0.126 -0.3438 -0.3095v-0.3323h-0.917v0.2636c0 0.7564 0.596 0.9857 1.2379 0.9857 0.6189 0 1.1232 -0.2063 1.2034 -0.7794 0.0459 -0.298 0.0115 -0.4814 0 -0.5616 -0.1375 -0.7106 -1.4327 -0.9284 -1.5243 -1.318 -0.0115 -0.0688 -0.0115 -0.1376 0 -0.1835 0.0229 -0.1146 0.1031 -0.2292 0.3094 -0.2292 0.1948 0 0.321 0.126 0.321 0.3095v0.2063h0.848v-0.2407c0 -0.745 -0.6647 -0.8596 -1.146 -0.8596 -0.6075 0 -1.1004 0.1948 -1.192 0.7564 -0.023 0.149 -0.023 0.2866 0.0114 0.4585 0.1376 0.7106 1.341 0.9054 1.513 1.3524m2.8882 0.4585c0.2407 0 0.3094 -0.1605 0.3323 -0.2522 0.0115 -0.0343 0.0115 -0.0917 0.0115 -0.126v-2.533h0.871v2.4642c0 0.0688 0 0.1948 -0.0114 0.2292 -0.0573 0.6419 -0.5616 0.8482 -1.192 0.8482 -0.6303 0 -1.1346 -0.2063 -1.192 -0.8482 0 -0.0344 -0.0114 -0.1604 -0.0114 -0.2292v-2.4642h0.871v2.533c0 0.0458 0 0.0916 0.0115 0.126 0 0.0917 0.0688 0.2522 0.3095 0.2522m7.1518 -0.0344c0.2522 0 0.3324 -0.1605 0.3553 -0.2522 0.0115 -0.0343 0.0115 -0.0917 0.0115 -0.126v-0.4929h-0.3553v-0.5043H24v0.917c0 0.0687 0 0.1145 -0.0115 0.2292 -0.0573 0.6303 -0.596 0.8481 -1.2034 0.8481 -0.6075 0 -1.1461 -0.2178 -1.2034 -0.8481 -0.0115 -0.1147 -0.0115 -0.1605 -0.0115 -0.2293v-1.444c0 -0.0574 0.0115 -0.172 0.0115 -0.2293 0.0802 -0.6419 0.596 -0.8482 1.2034 -0.8482s1.1347 0.2063 1.2034 0.8482c0.0115 0.1031 0.0115 0.2292 0.0115 0.2292v0.1146h-0.8596v-0.1948s0 -0.0803 -0.0115 -0.1261c-0.0114 -0.0802 -0.0802 -0.2521 -0.3438 -0.2521 -0.2521 0 -0.321 0.1604 -0.3438 0.2521 -0.0115 0.0458 -0.0115 0.1032 -0.0115 0.1605v1.5702c0 0.0458 0 0.0916 0.0115 0.126 0 0.0917 0.0917 0.2522 0.3323 0.2522" />
                    </svg>
                  ),
                },
              ].map((brand, idx) => (
                <div
                  key={idx}
                  className="snap-start flex-shrink-0 w-[90px] h-[45px] sm:w-[130px] sm:h-[70px] md:w-[150px] md:h-[80px] bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center p-3 sm:p-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  {brand.logo ? (
                    <div className="w-full h-full opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      {brand.logo}
                    </div>
                  ) : (
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                    />
                  )}
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                scrollBrands("right");
              }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md bg-white h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity max-md:hidden"
            >
              <ChevronRightIcon className="h-4 w-4 text-gray-700" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-6 pb-8 max-[1024px]:px-0 mt-0">
        {/* Custom Banner Row */}
        <div className="shop-container mx-auto max-[1024px]:px-2">
          <div className="promo-banner-grid grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="promo-banner-item rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <img
                src="/bannar2.avif"
                alt="Promo 1"
                className="w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="promo-banner-item rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <img
                src="/banner3.avif"
                alt="Promo 2"
                className="w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
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

                {/* Banners after New Fashion Arrivals */}
                {section.title === "New Fashion Arrivals" && (
                  <div className="shop-container mx-auto max-[1024px]:px-2 space-y-4">
                    {/* First Row - 2 Banners */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                        <img
                          src="/bannar2.avif"
                          alt="Promo 2"
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                        <img
                          src="/banner3.avif"
                          alt="Promo 3"
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    {/* Second Row - 2 Banners */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                        <img
                          src="/banner5.avif"
                          alt="Promo 4"
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                        <img
                          src="/banner5.avif"
                          alt="Promo 5"
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
