import { MessageCircle, Search, ChevronDown, X } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
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

// Hover ile açılır menü bileşeni
const HoverMenu = ({ children, trigger, className = "" }) => {
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
          className="absolute top-full left-0 z-50 min-w-[280px] max-w-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/95 shadow-2xl backdrop-blur-sm mt-1"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          {children}
        </div>
      )}
    </div>
  );
};

// Recursive (Özyineli) Menü Bileşeni
const RecursiveMenuItem = ({ category, handleNavigate }) => {
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

  // Eğer kategorinin alt dalları varsa, bir alt menü oluştur
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
            {category.name}
          </span>
          <ChevronDown className="h-3 w-3 rotate-[-90deg] flex-shrink-0 ml-1.5 text-slate-400" />
        </button>
        {isSubMenuOpen && (
          <div
            className="absolute left-full top-0 z-50 min-w-[260px] max-w-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/95 shadow-2xl backdrop-blur-sm p-3 ml-1 flex flex-wrap gap-2"
            onMouseEnter={handleSubMenuMouseEnter}
            onMouseLeave={handleSubMenuMouseLeave}
          >
            {/* "Tümünü Gör" linki, ana dala gitmek için */}
            <button
              type="button"
              onClick={() => handleNavigate(category.slug)}
              className="inline-flex w-auto max-w-full items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-left transition-colors hover:border-purple-300 hover:bg-purple-100 shadow-sm"
            >
              <span className="block truncate text-[13px] font-semibold text-purple-700">
                Tüm {category.name}
              </span>
            </button>
            {/* Alt dalları için kendini tekrar çağır */}
            {category.children.map((child) => (
              <RecursiveMenuItem
                key={child._id}
                category={child}
                handleNavigate={handleNavigate}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Eğer alt dalı yoksa, direkt tıklanabilir bir menü öğesi oluştur
  return (
    <button
      type="button"
      onClick={() => handleNavigate(category.slug)}
      className="inline-flex w-auto max-w-full items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left transition-colors hover:border-slate-300 hover:bg-slate-50 shadow-sm"
    >
      <span className="block truncate text-[13px] font-medium text-slate-800">
        {category.name}
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
  kulaklık: "Headphones",
  kulaklıklar: "Headphones",
  kamera: "Cameras",
  kameralar: "Cameras",
  oyun: "Gaming",
  aksesuar: "Accessories",
  aksesuarlar: "Accessories",
  yazıcı: "Printers",
  yazıcılar: "Printers",
  ekran: "Monitors",
  ekranlar: "Monitors",
  "ses sistemi": "Audio",
  "ses sistemleri": "Audio",
  tv: "TV",
  televizyon: "TV",
  "akıllı saat": "Smart Watches",
  "akıllı saatler": "Smart Watches",
  müzik: "Music",
  kitap: "Books",
  kırtasiye: "Stationery",
  ofis: "Office",
  baskı: "Print",
};

const translateName = (name = "") => {
  return CATEGORY_TRANSLATIONS[name.toLowerCase()] || name;
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
      <nav className="mx-auto w-full max-w-[1400px] px-4 max-[1024px]:px-1 flex items-center justify-center gap-x-2 min-h-[44px] overflow-x-auto no-scrollbar category-menu-container relative z-40">
        {categoryList.slice(0, 10).map((category) =>
          category.children && category.children.length > 0 ? (
            <HoverMenu
              key={category._id}
              trigger={
                <button className="text-[12px] leading-tight font-semibold text-slate-700 hover:text-purple-700 px-2 py-1.5 flex items-center justify-center gap-1 rounded-xl hover:bg-slate-100 transition-all duration-200 text-center">
                  <span className="max-w-[100px] whitespace-normal break-words">
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
                  className="inline-flex w-auto max-w-full items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-left transition-colors hover:border-purple-300 hover:bg-purple-100 shadow-sm"
                >
                  <span className="block truncate text-[13px] font-semibold text-purple-700">
                    All {translateName(category.name)}
                  </span>
                </button>
                {/* Render sub-categories recursively */}
                {category.children.map((subCategory) => (
                  <RecursiveMenuItem
                    key={subCategory._id}
                    category={subCategory}
                    handleNavigate={handleNavigate}
                  />
                ))}
              </div>
            </HoverMenu>
          ) : (
            // Category with no sub-categories
            <button
              key={category._id}
              onClick={() => handleNavigate(category.slug)}
              className="text-[12px] leading-tight font-semibold text-slate-700 hover:text-purple-700 px-2 py-1.5 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-all duration-200 text-center"
            >
              <span className="max-w-[100px] whitespace-normal break-words">
                {translateName(category.name)}
              </span>
            </button>
          ),
        )}
      </nav>
    </div>
  );
}

function MainHeaderActions() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/905347168754?text=Merhaba%2C%20site%20uzerinden%20iletisime%20gecmek%20istiyorum.",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Button
        variant="secondary"
        className="hidden md:flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 md:px-4 py-2 h-10 text-green-700 hover:bg-green-100"
        aria-label="WhatsApp"
        onClick={handleWhatsApp}
      >
        <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
        <span className="inline text-[11px] md:text-sm font-semibold">
          WhatsApp
        </span>
      </Button>
    </div>
  );
}

function TopStrip() {
  return (
    <div className="bg-slate-100 text-xs max-[720px]:text-[10px] text-slate-600 border-b block">
      <div className="mx-auto w-full max-w-[1400px] px-2 md:px-4 h-8 md:h-9 flex justify-end items-center">
        <div className="flex items-center gap-4 divide-x divide-slate-300">
          <Link to="#" className="hover:text-primary transition-colors">
            Store Locator
          </Link>
          <div className="pl-4 flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
            {/* <img src="https://flagcdn.com/w20/sa.png" alt="SA" className="w-4 h-3" /> */}
            <span>Saudi Arabia | SAR</span>
          </div>
          <div className="pl-4 flex items-center gap-1 cursor-pointer hover:text-primary transition-colors font-medium text-jarir-blue">
            <span>English</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShoppingHeader() {
  const navigate = useNavigate();
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

  // Search portal açıkken sayfanın kaydırılmasını engelle
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

  // Portal dışına tıklandığında ve ESC tuşu ile suggestions'ı kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Eğer suggestions açıksa ve tıklanan element suggestions içinde değilse
      if (showSuggest && !event.target.closest(".search-suggestions-portal")) {
        setShowSuggest(false);
        setSuggestions({ products: [], categories: [], brands: [] });
      }
    };

    const handleKeyDown = (event) => {
      // ESC tuşu ile kapat
      if (event.key === "Escape" && showSuggest) {
        setShowSuggest(false);
        setSuggestions({ products: [], categories: [], brands: [] });
      }
    };

    // Event listener'ları ekle
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

  const hasSuggestions =
    suggestions.products.length > 0 ||
    suggestions.categories.length > 0 ||
    suggestions.brands.length > 0;

  const renderProductSuggestions = (items) => {
    if (!items.length) return null;
    return (
      <div className="py-2 border-b border-slate-100/50">
        <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-500">
          Products
        </div>
        <div className="flex flex-col gap-1 px-2">
          {items.slice(0, 5).map((item) => (
            <button
              key={item._id}
              type="button"
              className="flex items-center gap-4 w-full p-2.5 rounded-2xl transition-all hover:bg-white hover:shadow-lg group text-left"
              onClick={() =>
                handleSuggestionClick(`/shop/product/${item._id}/specs`)
              }
            >
              <div className="w-14 h-14 rounded-xl bg-white border border-slate-100 flex-shrink-0 overflow-hidden shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-sm font-bold text-slate-800 truncate group-hover:text-purple-600 transition-colors">
                  {item.title}
                </span>
                <span className="text-xs font-black text-purple-600 mt-0.5">
                  {formatPrice(item.price)} TL
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
              className="inline-flex items-center rounded-full border border-slate-100 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-600 transition-all hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600 shadow-sm hover:shadow-md"
              onClick={() => onItemClick(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderSuggestionsContent = () => (
    <div className="search-suggestions-portal w-full overflow-hidden rounded-3xl border border-white/40 bg-slate-50/95 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl animate-in fade-in zoom-in duration-200">
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
            className="text-[11px] font-bold text-purple-600 hover:underline uppercase tracking-widest"
          >
            Show All Results for "{searchTerm}"
          </button>
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-[60] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 shadow-sm">
      <TopStrip />
      <div className="mx-auto w-full max-w-[1400px] px-2 md:px-4">
        <div className="flex h-20 items-center justify-between gap-3 md:gap-6 max-[767px]:h-16 relative">
          <Link to="/shop/home" className="flex-shrink-0 rounded-xl px-1 py-1">
            <img
              className="h-24 w-auto max-[690px]:h-[70px] max-[490px]:h-[55px] transition-all"
              src="/logoo.png"
              alt="logo"
              aria-label="Ana Sayfa"
              loading="eager"
            />
          </Link>

          {/* Search Container (Desktop & Mobile) */}
          <div className="flex-grow flex items-center justify-end min-w-0 px-2 md:px-0">
            {/* Desktop Search */}
            <form
              onSubmit={handleSearchSubmit}
              className="w-full max-w-5xl max-md:hidden mr-auto"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products, categories, or brands..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e, "desktop")}
                  className="w-full rounded-full bg-slate-50 pl-10 pr-4 py-2.5 h-11 text-sm border border-slate-200 focus:border-primary focus:bg-background focus:ring-1 focus:ring-primary"
                />
                {showSuggest &&
                  activeInput === "desktop" &&
                  hasSuggestions &&
                  createPortal(
                    <div
                      className="fixed z-[70]"
                      style={{
                        top: "114px",
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
            <div className="md:hidden flex items-center justify-end w-full max-w-[320px]">
              <div className="bg-slate-50 rounded-full flex items-center gap-2 px-3 py-1.5 border border-slate-200 h-10 w-full shadow-sm focus-within:border-purple-200 focus-within:bg-white focus-within:shadow-md transition-all">
                <Search className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <Input
                  type="search"
                  placeholder="Ara..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e, "mobile")}
                  className="flex-grow border-none bg-transparent focus-visible:ring-0 h-full text-sm px-1 min-w-0"
                />
                {showSuggest &&
                  activeInput === "mobile" &&
                  hasSuggestions &&
                  createPortal(
                    <div
                      className="fixed z-[80]"
                      style={{
                        top: "75px",
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

      {/* Kategori Menü Satırı (Sadece masaüstünde header'ın altında) */}
      {shouldShowCategoryMenu && (
        <div className="hidden lg:block border-t border-border relative z-40">
          <CategorySubMenu />
        </div>
      )}
    </header>
  );
}

export default ShoppingHeader;
