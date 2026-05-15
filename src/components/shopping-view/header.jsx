import {
  MessageCircle,
  Search,
  ChevronDown,
  ShoppingCart,
  Globe,
  LayoutGrid,
  Heart,
  MapPin,
  Menu,
} from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { fetchAllCategories } from "@/store/common-slice/categories-slice";
import { Skeleton } from "@/components/ui/skeleton";
import api from "@/api/axiosInstance";
import { useRef } from "react";
import PropTypes from "prop-types";
import { formatPrice } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { translateCategoryName } from "@/lib/taxonomy-translations";

// Hover-based dropdown menu
const HoverMenu = ({ children, trigger, className = "", align = "left" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const menuRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 50);
  };

  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 50);
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {trigger}
      {isOpen && (
        <div
          ref={menuRef}
          className={`absolute top-full ${align === "right" ? "right-0" : "left-0"
            } z-50 min-w-[280px] max-w-[360px] overflow-hidden rounded-desktop border border-slate-200 bg-slate-50/95 shadow-2xl backdrop-blur-sm mt-1`}
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          {children}
        </div>
      )}
    </div>
  );
};

// Recursive menu item component
const RecursiveMenuItem = ({ category, handleNavigate, side = "right" }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSubMenuOpen(false);
    }, 10);
  };

  const handleSubMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleSubMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSubMenuOpen(false);
    }, 10);
  };

  // Build a nested submenu when children exist
  if (category.children && category.children.length > 0) {
    return (
      <div
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          className="inline-flex w-auto max-w-full items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left transition-colors hover:border-slate-300 hover:bg-slate-50 shadow-sm"
        >
          <span className="block truncate text-[13px] font-medium text-slate-800">
            {translateCategoryName(category.name, category.slug)}
          </span>
          <ChevronDown className="h-3 w-3 rotate-[-90deg] flex-shrink-0 ml-1.5 text-slate-400" />
        </button>
        {isSubMenuOpen && (
          <div
            className={`absolute ${side === "right" ? "left-full ml-1" : "right-full mr-1"
              } top-0 z-50 min-w-[260px] max-w-[340px] overflow-hidden rounded-desktop border border-slate-200 bg-slate-50/95 shadow-2xl backdrop-blur-sm p-3 flex flex-wrap gap-2`}
            onMouseEnter={handleSubMenuMouseEnter}
            onMouseLeave={handleSubMenuMouseLeave}
          >
            {/* Link to parent category */}
            <button
              type="button"
              onClick={() => handleNavigate(category.slug)}
              className="inline-flex w-auto max-w-full items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-left transition-colors hover:border-primary/30 hover:bg-primary/10 shadow-sm"
            >
              <span className="block truncate text-[13px] font-semibold text-primary">
                All {translateCategoryName(category.name, category.slug)}
              </span>
            </button>
            {/* Render child items recursively */}
            {category.children.map((child) => (
              <RecursiveMenuItem
                key={child._id}
                category={child}
                handleNavigate={handleNavigate}
                side={side}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Render as a direct clickable item when no children exist
  return (
    <button
      type="button"
      onClick={() => handleNavigate(category.slug)}
      className="inline-flex w-auto max-w-full items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left transition-colors hover:border-slate-300 hover:bg-slate-50 shadow-sm"
    >
      <span className="block truncate text-[13px] font-medium text-slate-800">
        {translateCategoryName(category.name, category.slug)}
      </span>
    </button>
  );
};

RecursiveMenuItem.propTypes = {
  category: PropTypes.object.isRequired,
  handleNavigate: PropTypes.func.isRequired,
};

// Turkish → English category name mapping - Moved outside for performance
const CATEGORY_TRANSLATIONS = {
  telefon: "Phones",
  telefonlar: "Phones",
  laptop: "Laptops",
  laptoplar: "Laptops",
  bilgisayar: "Computers",
  tablet: "Tablets",
  tabletler: "Tablets",
  kulaklik: "Headphones",
  kulakliklar: "Headphones",
  kamera: "Cameras",
  kameralar: "Cameras",
  oyun: "Gaming",
  aksesuar: "Accessories",
  aksesuarlar: "Accessories",
  yazici: "Printers",
  yazicilar: "Printers",
  ekran: "Monitors",
  ekranlar: "Monitors",
  "ses sistemi": "Audio",
  "ses sistemleri": "Audio",
  tv: "TV",
  televizyon: "TV",
  "akilli saat": "Smart Watches",
  "akilli saatler": "Smart Watches",
  muzik: "Music",
  kitap: "Books",
  kirtasiye: "Stationery",
  ofis: "Office",
  baski: "Print",
};

const translateName = (name = "") => {
  return (
    CATEGORY_TRANSLATIONS[name.toLowerCase()] || translateCategoryName(name)
  );
};

function CategorySubMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryList = [], isLoading: categoriesLoading } = useSelector(
    (state) => state.categories || {},
  );

  useEffect(() => {
    // Only fetch if we don't have categories to avoid redundant loading states
    if (categoryList.length === 0) {
      dispatch(fetchAllCategories());
    }
  }, [dispatch, categoryList.length]);

  const handleNavigate = (slug) => {
    navigate(`/shop/listing?category=${slug}`);
  };

  if (categoriesLoading && categoryList.length === 0) {
    return (
      <div className="flex items-center justify-center gap-x-3 md:gap-x-4 h-11 px-4 border-b border-slate-100 bg-white">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-5 w-24 rounded-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="mx-10">
        <nav className="mx-auto w-full max-w-[96rem] px-4 lg:px-1 max-[1024px]:px-1 flex items-center justify-center gap-x-2 min-h-[44px] overflow-x-auto no-scrollbar category-menu-container relative z-40">
          {categoryList.slice(0, 10).map((category, index) =>
            category.children && category.children.length > 0 ? (
              <HoverMenu
                key={category._id}
                align={index >= 7 ? "right" : "left"}
                trigger={
                  <button className="text-[12px] leading-tight font-semibold text-slate-700 hover:text-primary px-2 py-1.5 flex items-center justify-center gap-1 rounded-desktop hover:bg-slate-100 transition-all duration-200 text-center">
                    <span className="max-w-[150px] whitespace-normal break-words">
                      {translateName(category.name)}
                    </span>
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 flex-shrink-0" />
                  </button>
                }
              >
                <div className="flex flex-wrap gap-2 p-3">
                  {/* Link to the main category itself */}
                  <button
                    type="button"
                    onClick={() => handleNavigate(category.slug)}
                    className="inline-flex w-auto max-w-full items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-left transition-colors hover:border-primary/30 hover:bg-primary/10 shadow-sm"
                  >
                    <span className="block truncate text-[13px] font-semibold text-primary">
                      All {translateName(category.name)}
                    </span>
                  </button>
                  {/* Render sub-categories recursively */}
                  {category.children.map((subCategory) => (
                    <RecursiveMenuItem
                      key={subCategory._id}
                      category={subCategory}
                      handleNavigate={handleNavigate}
                      side={index >= 7 ? "left" : "right"}
                    />
                  ))}
                </div>
              </HoverMenu>
            ) : (
              // Category with no sub-categories
              <button
                key={category._id}
                onClick={() => handleNavigate(category.slug)}
                className="text-[12px] leading-tight font-semibold text-slate-700 hover:text-primary px-2 py-1.5 flex items-center justify-center rounded-desktop hover:bg-slate-100 transition-all duration-200 text-center"
              >
                <span className="max-w-[100px] whitespace-normal break-words">
                  {translateName(category.name)}
                </span>
              </button>
            ),
          )}
        </nav>
      </div>
    </div>
  );
}

function MainHeaderActions() {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart || { cartItems: [] });
  const [selectedCurrency, setSelectedCurrency] = useState("TRY");
  const totalCartItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0,
  );
  const currencyLabels = {
    TRY: "TRY",
    USD: "USD",
    EUR: "EUR",
  };
  const currencyIcons = {
    TRY: "₺",
    USD: "$",
    EUR: "€",
  };

  const handleCurrencyChange = () => {
    setSelectedCurrency((prev) => {
      if (prev === "TRY") return "USD";
      if (prev === "USD") return "EUR";
      return "TRY";
    });
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/905347168754?text=Hello%2C%20I%20would%20like%20to%20contact%20you%20through%20the%20website.",
      "_blank",
      "noopener,noreferrer",
    );
  };
  const handleStoreLocation = () => {
    navigate("/shop/store-locator");
  };
  const handleOpenMobileCategoriesMenu = () => {
    window.dispatchEvent(new Event("open-mobile-categories-menu"));
  };

  return (
    <div className="flex items-center gap-2 max-[519px]:gap-1">
      <div className="flex max-[519px]:gap-0.5 items-center gap-1 lg:hidden">
        <Button
          variant="outline"
          className="h-9 shrink-0 rounded-full border border-slate-200 bg-white px-2 text-slate-700 max-[519px]:h-9 max-[519px]:w-9 max-[519px]:p-0"
          aria-label="Language: TR / EN"
          onClick={() => navigate("/shop/home")}
        >
          <Globe className="h-4 w-4 min-[520px]:h-3.5 min-[520px]:w-3.5" />
          <span className="ml-1 text-[10px] font-semibold max-[519px]:hidden">
            TR/EN
          </span>
        </Button>

        <Button
          variant="outline"
          className="h-9 w-9 shrink-0 rounded-full border border-slate-200 bg-white p-0 text-slate-700 max-[519px]:hidden"
          aria-label="Currency Selection"
          onClick={handleCurrencyChange}
        >
          <span className="text-sm font-bold leading-none">
            {currencyIcons[selectedCurrency]}
          </span>
        </Button>

        <Button
          variant="outline"
          className="h-9 w-9 p-0 rounded-full border border-slate-200 bg-white text-slate-700"
          aria-label="Store Location"
          onClick={handleStoreLocation}
        >
          <MapPin className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          className="h-9 w-9 p-0 rounded-full border border-slate-200 bg-white text-slate-700"
          aria-label="Category Menu"
          onClick={handleOpenMobileCategoriesMenu}
        >
          <Menu className="w-4 h-4" />
        </Button>
      </div>

      <Button
        variant="outline"
        className="hidden lg:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 h-10 text-slate-700 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
        aria-label="All Products"
        onClick={() => navigate("/shop/listing")}
      >
        <LayoutGrid className="w-4 h-4" />
        <span className="text-sm font-semibold">All Products</span>
      </Button>

      <Button
        variant="outline"
        className="hidden lg:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 h-10 text-slate-700 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
        aria-label="Language Selection"
        onClick={() => navigate("/shop/home")}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-semibold">TR | EN</span>
      </Button>

      <Button
        variant="outline"
        className="hidden lg:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 h-10 text-slate-700 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
        aria-label="Currency Selection"
        onClick={handleCurrencyChange}
      >
        <span className="text-base font-bold leading-none">
          {currencyIcons[selectedCurrency]}
        </span>
        <span className="text-sm font-semibold">
          {currencyLabels[selectedCurrency]}
        </span>
      </Button>

      <Button
        variant="outline"
        className="hidden lg:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 h-10 text-slate-700 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
        aria-label="Favorites"
        onClick={() => navigate("/shop/listing")}
      >
        <Heart className="w-4 h-4" />
        <span className="text-sm font-semibold">Favorites</span>
      </Button>

      <Button
        variant="outline"
        className="hidden lg:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 h-10 text-slate-700 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
        aria-label="Store Location"
        onClick={handleStoreLocation}
      >
        <MapPin className="w-4 h-4" />
        <span className="text-sm font-semibold">Location</span>
      </Button>

      <Button
        variant="outline"
        className="hidden lg:flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 h-10 text-primary hover:bg-primary/10 hover:border-primary/30 relative"
        aria-label="Cart"
        onClick={() => navigate("/shop/cart")}
      >
        <ShoppingCart className="w-4 h-4" />
        <span className="text-sm font-semibold">My Cart</span>
        {totalCartItems > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
            {totalCartItems}
          </span>
        )}
      </Button>
    </div>
  );
}

function ShoppingHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState({
    products: [],
    categories: [],
    brands: [],
  });
  const [showSuggest, setShowSuggest] = useState(false);
  const [activeInput, setActiveInput] = useState("");
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
  const debounceRef = useRef();
  const [searchParams] = useSearchParams();
  const normalizeSuggestions = (payload) => ({
    products: Array.isArray(payload?.products) ? payload.products : [],
    categories: Array.isArray(payload?.categories) ? payload.categories : [],
    brands: Array.isArray(payload?.brands) ? payload.brands : [],
  });

  const shouldShowCategoryMenu = true;

  // Prevent body scroll while suggestions are open
  useEffect(() => {
    if (showSuggest) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSuggest]);

  // Close suggestions on outside click and ESC
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close when click target is outside the suggestions container
      if (showSuggest && !event.target.closest(".search-suggestions-portal")) {
        setShowSuggest(false);
        setSuggestions({ products: [], categories: [], brands: [] });
      }
    };

    const handleKeyDown = (event) => {
      // Close on ESC
      if (event.key === "Escape" && showSuggest) {
        setShowSuggest(false);
        setSuggestions({ products: [], categories: [], brands: [] });
      }
    };

    // Register listeners
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSuggest]);

  useEffect(() => {
    const keywordFromUrl = searchParams.get("keyword");
    if (keywordFromUrl) {
      setSearchTerm(keywordFromUrl);
    } else {
      setSearchTerm("");
    }
  }, [searchParams]);

  const fetchSuggestions = (keyword) => {
    if (!keyword) {
      setSuggestions({ products: [], categories: [], brands: [] });
      return;
    }
    api
      .get(`/shop/search/suggest?keyword=${encodeURIComponent(keyword)}`)
      .then((resp) => {
        if (resp.data?.success) {
          setSuggestions(normalizeSuggestions(resp.data.data));
        }
      })
      .catch(() => {
        setSuggestions({ products: [], categories: [], brands: [] });
      });
  };

  const handleSearchChange = (e, inputType) => {
    const value = e.target.value;
    setSearchTerm(value);
    setActiveInput(inputType);
    clearTimeout(debounceRef.current);
    if (value.trim() === "") {
      setShowSuggest(false);
      setSuggestions({ products: [], categories: [], brands: [] });
      return;
    }
    debounceRef.current = setTimeout(() => {
      fetchSuggestions(value.trim());
      setShowSuggest(true);
    }, 300);
  };

  const handleSuggestionClick = (path) => {
    setShowSuggest(false);
    setSearchTerm("");
    navigate(path);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop/search?keyword=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleDesktopSearchFocus = () => {
    if (location.pathname.startsWith("/shop/search")) return;
    const keyword = searchTerm.trim();
    navigate(
      keyword
        ? `/shop/search?keyword=${encodeURIComponent(keyword)}`
        : "/shop/search",
    );
  };

  const hasSuggestions =
    suggestions.products.length > 0 ||
    suggestions.categories.length > 0 ||
    suggestions.brands.length > 0;

  const renderProductSuggestions = (items) => {
    if (!items.length) return null;
    return (
      <div className="py-2 border-b border-slate-100/50">
        <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
          Products
        </div>
        <div className="flex flex-col gap-1 px-2">
          {items.slice(0, 5).map((item) => (
            <button
              key={item._id}
              type="button"
              className="flex items-center gap-4 w-full p-2.5 rounded-desktop transition-all hover:bg-primary/5 hover:shadow-lg group text-left"
              onClick={() =>
                handleSuggestionClick(`/shop/product/${item._id}/specs`)
              }
            >
              <div className="w-14 h-14 rounded-mobile bg-white border border-slate-100 flex-shrink-0 overflow-hidden shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-sm font-bold text-slate-800 truncate group-hover:text-primary transition-colors">
                  {item.title}
                </span>
                <span className="text-xs font-black text-primary mt-0.5">
                  {formatPrice(item.price)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderChipSuggestions = (title, items, onItemClick) => {
    if (!items.length) return null;
    return (
      <div className="py-3 border-b border-slate-100/50 last:border-0">
        <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          {title}
        </div>
        <div className="flex flex-wrap gap-2 px-4 pb-2">
          {items.map((item) => (
            <button
              key={item.slug || item._id}
              type="button"
              className="inline-flex items-center rounded-full border border-slate-100 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-600 transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary shadow-sm hover:shadow-md"
              onClick={() => onItemClick(item)}
            >
              {title === "Categories"
                ? translateCategoryName(item.name, item.slug)
                : item.name}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderSuggestionsContent = () => (
    <div className="search-suggestions-portal w-full overflow-hidden rounded-desktop border border-white/40 bg-slate-50/95 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl animate-in fade-in zoom-in duration-200">
      <div className="max-h-[min(70vh,500px)] overflow-y-auto no-scrollbar">
        {renderProductSuggestions(suggestions.products)}
        {renderChipSuggestions("Categories", suggestions.categories, (c) =>
          handleSuggestionClick(`/shop/listing?category=${c.slug}`),
        )}
        {renderChipSuggestions("Brands", suggestions.brands, (b) =>
          handleSuggestionClick(`/shop/listing?brand=${b.slug}`),
        )}
      </div>
      {hasSuggestions && (
        <div className="bg-slate-100/50 p-3 text-center border-t border-slate-100/50">
          <button
            onClick={handleSearchSubmit}
            className="text-[11px] font-bold text-primary hover:underline uppercase tracking-widest"
          >
            Show All Results for "{searchTerm}"
          </button>
        </div>
      )}
    </div>
  );

  const sloganItems = Array.from({ length: 10 });

  return (
    <header className="sticky top-0 z-[60] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 shadow-sm">
      <div className="header-top-stripe" aria-hidden="true">
        <div className="header-top-stripe-track">
          {sloganItems.map((_, idx) => (
            <span key={`slogan-a-${idx}`} className="header-top-stripe-text">
              Fast Delivery • Secure Payment • Premium Quality • Special Deals
            </span>
          ))}
          {sloganItems.map((_, idx) => (
            <span key={`slogan-b-${idx}`} className="header-top-stripe-text">
              Fast Delivery • Secure Payment • Premium Quality • Special Deals
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-[96rem] px-2 md:px-4 lg:px-5">
        <div className="relative flex h-14 items-center justify-between gap-3 md:h-20 lg:gap-6">
          <Link to="/shop/home" className="flex-shrink-0 rounded-desktop px-1 py-1">
            <img
              className="h-20 w-auto max-[767px]:h-[50px] transition-all"
              src="/logo.png"
              alt="logo"
              aria-label="Home"
              loading="eager"
            />
          </Link>

          {/* Search Container (Desktop & Mobile) */}
          <div className="flex min-w-0 flex-1 items-center justify-stretch md:flex-grow md:px-0">
            {/* Desktop Search */}
            <form
              onSubmit={handleSearchSubmit}
              className="w-full max-w-5xl max-md:hidden mr-auto"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products, categories, or brands..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e, "desktop")}
                  onFocus={handleDesktopSearchFocus}
                  className="h-10 w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-xs sm:text-[13px] lg:text-sm xl:text-[0.9375rem] placeholder:text-muted-foreground/55 focus:bg-background focus:outline-none focus:border-slate-200 focus-visible:outline-none focus-visible:border-slate-200 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                {showSuggest &&
                  activeInput === "desktop" &&
                  hasSuggestions &&
                  createPortal(
                    <div
                      className="fixed z-[70]"
                      style={{
                        top: "108px",
                        left: "calc(50% - 320px)",
                        width: "600px",
                        maxWidth: "90vw",
                      }}
                    >
                      {renderSuggestionsContent()}
                    </div>,
                    document.body,
                  )}
              </div>
            </form>

            {/* Mobile Search (Always Visible & Embedded) */}
            <div className="m-0 flex w-full min-w-0 flex-1 items-center p-0 max-[519px]:max-w-none md:hidden">
              <div className="m-0 flex h-9 w-full items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 transition-colors duration-200 focus-within:bg-white">
                <Search className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e, "mobile")}
                  onFocus={handleDesktopSearchFocus}
                  className="h-full min-w-50 flex-grow border-none bg-transparent px-1 text-[11px] min-[430px]:text-xs min-[520px]:text-[13px] sm:text-sm placeholder:text-muted-foreground/55 focus:outline-none focus:border-transparent focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                {showSuggest &&
                  activeInput === "mobile" &&
                  hasSuggestions &&
                  createPortal(
                    <div
                      className="fixed z-[80]"
                      style={{
                        top: "78px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "calc(100vw - 32px)",
                      }}
                    >
                      {renderSuggestionsContent()}
                    </div>,
                    document.body,
                  )}
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <MainHeaderActions />
          </div>
        </div>
      </div>

      {/* Category menu row (desktop only) */}
      {shouldShowCategoryMenu && (
        <div className="hidden lg:block border-t border-border relative z-40">
          <CategorySubMenu />
        </div>
      )}
    </header>
  );
}

export default ShoppingHeader;
