import { MessageCircle, Search, ChevronDown, ShoppingCart } from "lucide-react";
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
          className="absolute top-full left-0 z-[99999999] min-w-[220px] max-w-[280px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl py-2"
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
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="category-menu-item px-4 py-3 cursor-pointer text-sm flex items-center justify-between">
          <span className="break-words flex-1">{category.name}</span>
          <ChevronDown className="h-4 w-4 rotate-[-90deg] flex-shrink-0 ml-2" />
        </div>
        {isSubMenuOpen && (
          <div
            className="absolute left-full top-0 z-[99999999] min-w-[220px] max-w-[280px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl py-2"
            onMouseEnter={handleSubMenuMouseEnter}
            onMouseLeave={handleSubMenuMouseLeave}
          >
            {/* "Tümünü Gör" linki, ana dala gitmek için */}
            <div
              className="submenu-item px-4 py-3 cursor-pointer text-sm"
              onClick={() => handleNavigate(category.slug)}
            >
              <span className="break-words">Tüm {category.name}</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
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
    <div
      className="submenu-item px-4 py-3 cursor-pointer text-sm"
      onClick={() => handleNavigate(category.slug)}
    >
      <span className="break-words">{category.name}</span>
    </div>
  );
};

RecursiveMenuItem.propTypes = {
  category: PropTypes.object.isRequired,
  handleNavigate: PropTypes.func.isRequired,
};

function CategorySubMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryList = [], isLoading: categoriesLoading } = useSelector(
    (state) => state.categories || {},
  );

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const handleNavigate = (slug) => {
    navigate(`/shop/listing?category=${slug}`);
  };

  // Turkish → English category name mapping
  const translateName = (name = "") => {
    const map = {
      "telefon": "Phones",
      "telefonlar": "Phones",
      "laptop": "Laptops",
      "laptoplar": "Laptops",
      "bilgisayar": "Computers",
      "tablet": "Tablets",
      "tabletler": "Tablets",
      "kulaklık": "Headphones",
      "kulaklıklar": "Headphones",
      "kamera": "Cameras",
      "kameralar": "Cameras",
      "oyun": "Gaming",
      "aksesuar": "Accessories",
      "aksesuarlar": "Accessories",
      "yazıcı": "Printers",
      "yazıcılar": "Printers",
      "ekran": "Monitors",
      "ekranlar": "Monitors",
      "ses sistemi": "Audio",
      "ses sistemleri": "Audio",
      "tv": "TV",
      "televizyon": "TV",
      "akıllı saat": "Smart Watches",
      "akıllı saatler": "Smart Watches",
      "müzik": "Music",
      "kitap": "Books",
      "kırtasiye": "Stationery",
      "ofis": "Office",
      "baskı": "Print",
    };
    return map[name.toLowerCase()] || name;
  };

  if (categoriesLoading) {
    return (
      <div className="flex items-center justify-center gap-x-3 md:gap-x-4 h-11 px-4 border-b border-slate-100 bg-white">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-5 w-24 rounded-full" />
        ))}
      </div>
    );
  }

  return (
    <nav className="flex items-center justify-center gap-x-1 min-h-11 bg-white border-b border-slate-100 overflow-x-auto no-scrollbar px-4 lg:px-20 category-menu-container relative z-[99999999] shadow-sm">
      {categoryList.slice(0, 10).map((category) =>
        category.children && category.children.length > 0 ? (
          <HoverMenu
            key={category._id}
            trigger={
              <button
                className="text-xs font-semibold text-slate-600 hover:text-purple-700 px-3 py-1.5 whitespace-nowrap flex items-center gap-1 rounded-full hover:bg-purple-50 transition-all duration-200"
              >
                <span>{translateName(category.name)}</span>
                <ChevronDown className="h-3 w-3 transition-transform duration-200 flex-shrink-0" />
              </button>
            }
          >
            {/* Link to the main category itself */}
            <div
              className="category-menu-item px-4 py-3 cursor-pointer text-sm"
              onClick={() => handleNavigate(category.slug)}
            >
              <span className="break-words font-semibold text-purple-700">All {translateName(category.name)}</span>
            </div>
            <div className="border-t border-gray-200 my-1"></div>
            {/* Render sub-categories recursively */}
            {category.children.map((subCategory) => (
              <RecursiveMenuItem
                key={subCategory._id}
                category={subCategory}
                handleNavigate={handleNavigate}
              />
            ))}
          </HoverMenu>
        ) : (
          // Category with no sub-categories
          <button
            key={category._id}
            onClick={() => handleNavigate(category.slug)}
            className="text-xs font-semibold text-slate-600 hover:text-purple-700 px-3 py-1.5 whitespace-nowrap rounded-full hover:bg-purple-50 transition-all duration-200"
          >
            <span>{translateName(category.name)}</span>
          </button>
        ),
      )}
    </nav>
  );
}

function MainHeaderActions() {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart || { cartItems: [] });
  const totalCartItems = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

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
        className="flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 md:px-4 py-2 h-10 text-green-700 hover:bg-green-100"
        aria-label="WhatsApp"
        onClick={handleWhatsApp}
      >
        <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
        <span className="hidden sm:inline text-xs md:text-sm font-semibold">
          WhatsApp
        </span>
      </Button>

      <button
        onClick={() => navigate("/shop/cart")}
        className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 rounded-full transition-colors shadow-sm "
      >
        <ShoppingCart className="w-5 h-5 text-white" />
        {totalCartItems > 0 && (
          <span className="text-sm font-bold text-white min-w-[16px] text-center">
            {totalCartItems}
          </span>
        )}

      </button>
    </div>
  );
}

function TopStrip() {
  return (
    <div className="bg-slate-100 text-xs text-slate-600 border-b hidden md:block">
      <div className="container mx-auto px-4 md:px-20 h-9 flex justify-end items-center">
        <div className="flex items-center gap-4 divide-x divide-slate-300">
          <Link to="#" className="hover:text-primary transition-colors">Store Locator</Link>
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
  const debounceRef = useRef();
  const [searchParams] = useSearchParams();
  const normalizeSuggestions = (payload) => ({
    products: Array.isArray(payload?.products) ? payload.products : [],
    categories: Array.isArray(payload?.categories) ? payload.categories : [],
    brands: Array.isArray(payload?.brands) ? payload.brands : [],
  });

  const shouldShowCategoryMenu = true;

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

  const renderSuggestionSection = (title, items, onItemClick, itemKey) => {
    if (!items.length) return null;
    return (
      <div className="py-1">
        <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
          {title}
        </div>
        <div className="space-y-1 px-2">
          {items.map((item) => (
            <button
              key={itemKey(item)}
              type="button"
              className="w-full rounded-lg border border-transparent bg-white px-3 py-2 text-left transition-colors hover:border-slate-200 hover:bg-slate-50"
              onClick={() => onItemClick(item)}
            >
              <span className="block truncate text-sm font-medium text-slate-800">
                {item.title || item.name}
              </span>
              <span className="block text-xs text-slate-500">
                {title.slice(0, -1)}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderSuggestionsContent = () => (
    <div className="search-suggestions-portal overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/95 shadow-2xl backdrop-blur-sm">
      <div className="max-h-80 overflow-y-auto py-2">
        {renderSuggestionSection(
          "Products",
          suggestions.products,
          (p) => handleSuggestionClick(`/shop/product/${p._id}/specs`),
          (p) => `prod-${p._id}`,
        )}
        {renderSuggestionSection(
          "Categories",
          suggestions.categories,
          (c) => handleSuggestionClick(`/shop/listing?category=${c.slug}`),
          (c) => `cat-${c.slug}`,
        )}
        {renderSuggestionSection(
          "Brands",
          suggestions.brands,
          (b) => handleSuggestionClick(`/shop/listing?brand=${b.slug}`),
          (b) => `brand-${b.slug}`,
        )}
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-[99999999] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 shadow-sm">
      <TopStrip />
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex h-20 items-center justify-between gap-3 md:gap-6 max-[767px]:h-16">
          <Link
            to="/shop/home"
            className="flex-shrink-0 rounded-xl px-1 py-1"
          >
            <img
              className="h-24 w-auto max-[690px]:h-10"
              src="/logoo.png"
              alt="logo"
              aria-label="Ana Sayfa"
            />
          </Link>
          <form
            onSubmit={handleSearchSubmit}
            className="flex-grow min-w-0 max-w-3xl"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground max-lg:hidden" />
              <Input
                type="search"
                placeholder="Search products, categories, or brands..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e, "desktop")}
                className="w-full rounded-full bg-slate-50 pl-10 pr-4 py-2.5 h-11 text-sm border border-slate-200 focus:border-primary focus:bg-background focus:ring-1 focus:ring-primary max-md:hidden"
              />
              {/* Suggestions Dropdown - Sadece desktop için */}
              {showSuggest &&
                activeInput === "desktop" &&
                hasSuggestions &&
                createPortal(
                  <div
                    className="fixed z-[9999999999]"
                    style={{
                      top: "102px",
                      left: "calc(50% - 320px)",
                      width: "600px",
                      maxWidth: "90vw",
                    }}
                  >
                    {renderSuggestionsContent()}
                  </div>,
                  document.body,
                )}
              <button type="submit" className="hidden"></button>
            </div>
          </form>
          <div className="flex-shrink-0">
            <MainHeaderActions />
          </div>
        </div>
      </div>
      {/* Arama Çubuğu (Sadece Küçük Ekranlarda Ayrı Satırda) */}
      <div className="lg:hidden md:hidden px-4 pb-2 pt-2 border-t bg-white/90">
        <form onSubmit={handleSearchSubmit} className="w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e, "mobile")}
              className="w-full rounded-full bg-slate-50 pl-10 pr-4 py-2 h-10 text-sm border border-slate-200 focus:border-primary focus:bg-background focus:ring-1 focus:ring-primary"
            />
            {/* Suggestions Dropdown - Sadece mobile için */}
            {showSuggest &&
              activeInput === "mobile" &&
              hasSuggestions &&
              createPortal(
                <div
                  className="fixed z-[9999999999]"
                  style={{
                    top: "164px",
                    left: "20px",
                    right: "20px",
                    width: "calc(100vw - 40px)",
                  }}
                >
                  {renderSuggestionsContent()}
                </div>,
                document.body,
              )}
          </div>
        </form>
      </div>

      {/* Kategori Menü Satırı (Sadece masaüstünde header'ın altında) */}
      {shouldShowCategoryMenu && (
        <div className="hidden lg:block border-t border-border relative z-[99999999]">
          <CategorySubMenu />
        </div>
      )}
    </header>
  );
}

export default ShoppingHeader;
