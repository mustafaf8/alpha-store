import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  LayoutGrid,
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronRight,
  Heart,
  Globe,
  MapPin,
  ShieldCheck,
  Phone,
  Wallet,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllCategories } from "@/store/common-slice/categories-slice";
import { translateCategoryName } from "@/lib/taxonomy-translations";

const BottomNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuMode, setMenuMode] = useState("quick");
  const [expandedCategoryIds, setExpandedCategoryIds] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("TR");
  const [selectedCurrency, setSelectedCurrency] = useState("TRY");
  const [favoriteItemsCount, setFavoriteItemsCount] = useState(0);
  const { cartItems } = useSelector((state) => state.cart || { cartItems: [] });
  const { categoryList = [] } = useSelector((state) => state.categories || {});
  const totalCartItems = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  useEffect(() => {
    const readFavoriteCount = () => {
      const possibleKeys = ["favoriteItems", "favorites", "wishlistItems"];
      let count = 0;

      for (const key of possibleKeys) {
        try {
          const raw = localStorage.getItem(key);
          if (!raw) continue;
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            count = parsed.length;
            break;
          }
        } catch {
          // ignore malformed localStorage values
        }
      }

      setFavoriteItemsCount(count);
    };

    readFavoriteCount();
    window.addEventListener("storage", readFavoriteCount);
    return () => {
      window.removeEventListener("storage", readFavoriteCount);
    };
  }, []);

  const navItems = [
    { to: "/shop/home", label: "Home", icon: Home },
    { to: "/shop/listing", label: "Shop", icon: LayoutGrid },
    { to: "/shop/cart", label: "Cart", icon: ShoppingCart },
    { to: "/shop/search", label: "Search", icon: Search },
    { to: "/shop/menu", label: "Menu", icon: Menu },
  ];

  useEffect(() => {
    if (categoryList.length === 0) {
      dispatch(fetchAllCategories());
    }
  }, [dispatch, categoryList.length]);

  useEffect(() => {
    if (!isMenuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleOpenMobileCategoriesMenu = () => {
      setMenuMode("categories");
      setIsMenuOpen(true);
    };

    window.addEventListener(
      "open-mobile-categories-menu",
      handleOpenMobileCategoriesMenu,
    );

    return () => {
      window.removeEventListener(
        "open-mobile-categories-menu",
        handleOpenMobileCategoriesMenu,
      );
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const scrollToTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleCategoryNavigate = (slug) => {
    closeMenu();
    navigate(`/shop/listing?category=${slug}`);
    requestAnimationFrame(() => {
      scrollToTopSmooth();
    });
  };

  const renderCategoryTree = (items, level = 0) => {
    if (!items || items.length === 0) return null;

    return (
      <div
        className={cn(
          "space-y-2.5",
          level > 0 && "pl-3.5 ml-1.5 border-l-2 border-slate-200",
        )}
      >
        {items.map((category) => (
          <div
            key={category._id}
            className={cn(
              "rounded-xl border overflow-hidden",
              level === 0
                ? "border-slate-200 bg-slate-50/70"
                : "border-slate-200 bg-white",
            )}
          >
            <button
              type="button"
              onClick={() => handleCategoryNavigate(category.slug)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2.5 text-left transition-colors",
                level === 0 ? "hover:bg-slate-100" : "hover:bg-slate-50",
              )}
            >
              <span
                className={cn(
                  "text-sm text-slate-800",
                  level === 0 ? "font-bold" : "font-semibold",
                )}
              >
                {translateCategoryName(category.name, category.slug)}
              </span>
              <div className="flex items-center gap-1.5">
                {category.children?.length > 0 && (
                  <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-bold text-purple-700">
                    {category.children.length}
                  </span>
                )}
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </button>

            {category.children && category.children.length > 0 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setExpandedCategoryIds((prev) => ({
                      ...prev,
                      [category._id]: !prev[category._id],
                    }))
                  }
                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors border-t border-slate-200"
                >
                  <span>Subcategories</span>
                  {expandedCategoryIds[category._id] ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                {expandedCategoryIds[category._id] && (
                  <div className="px-3 pb-3 pt-2">
                    {renderCategoryTree(category.children, level + 1)}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  const mobileMenuItems = [
    {
      id: "cart",
      label: "Cart",
      icon: ShoppingCart,
      badge: totalCartItems > 0 ? totalCartItems : null,
      onClick: () => {
        closeMenu();
        navigate("/shop/cart");
      },
    },
    {
      id: "favorites",
      label: "Favorites",
      icon: Heart,
      badge: favoriteItemsCount > 0 ? favoriteItemsCount : null,
      onClick: () => {
        closeMenu();
        navigate("/shop/listing");
      },
    },
    {
      id: "language",
      label: `Language (${selectedLanguage})`,
      icon: Globe,
      onClick: () => {
        setSelectedLanguage((prev) => (prev === "TR" ? "EN" : "TR"));
      },
    },
    {
      id: "currency",
      label: `Currency (${selectedCurrency})`,
      icon: Wallet,
      onClick: () => {
        setSelectedCurrency((prev) => {
          if (prev === "TRY") return "USD";
          if (prev === "USD") return "EUR";
          return "TRY";
        });
      },
    },
    {
      id: "privacy",
      label: "Privacy Policy",
      icon: ShieldCheck,
      onClick: () => {
        closeMenu();
        navigate("/shop/home");
      },
    },
    {
      id: "contact",
      label: "Contact Information",
      icon: Phone,
      onClick: () => {
        window.open(
          "https://wa.me/905347168754?text=Hello%2C%20I%20need%20help%20with%20contact%20information.",
          "_blank",
          "noopener,noreferrer",
        );
      },
    },
    {
      id: "store",
      label: "Store Location and Address Details",
      icon: MapPin,
      onClick: () => {
        window.open(
          "https://maps.google.com/?q=Istanbul+store",
          "_blank",
          "noopener,noreferrer",
        );
      },
    },
  ];

  const handleNavigate = (to) => {
    if (to === "/shop/menu") {
      setMenuMode("quick");
      setIsMenuOpen(true);
      return;
    }

    if (location.pathname === to) {
      scrollToTopSmooth();
      return;
    }

    navigate(to);
    requestAnimationFrame(() => {
      scrollToTopSmooth();
    });
  };

  // We use a portal to ensure the nav bar is at the very top of the DOM stacking order
  const content = (
    <div className="lg:hidden">
      {isMenuOpen && (
        <div className="fixed inset-0 z-[2147483646] bg-black/40 backdrop-blur-[2px]">
          <div className="absolute inset-x-0 bottom-0 h-[84vh] max-h-[84vh] rounded-t-2xl bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-slate-800">
                  {menuMode === "categories" ? "Categories" : "Quick Menu"}
                </h3>
                <span className="text-xs text-slate-500">
                  {menuMode === "categories"
                    ? "Explore all sections and filter quickly"
                    : "Quick access to account and store actions"}
                </span>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 pb-7 touch-pan-y">
              {menuMode === "categories" ? (
                renderCategoryTree(categoryList)
              ) : (
                <div className="space-y-2.5">
                  {mobileMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={item.onClick}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                            <Icon className="w-4 h-4" />
                          </span>
                          <span className="text-sm font-semibold text-slate-800">
                            {item.label}
                          </span>
                        </span>
                        <span className="flex items-center gap-2">
                          {item.badge ? (
                            <span className="min-w-[20px] h-5 px-1.5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center">
                              {item.badge > 99 ? "99+" : item.badge}
                            </span>
                          ) : null}
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 w-full z-[2147483647]",
          isMenuOpen && "hidden",
        )}
      >
        <nav className="bg-white/85 backdrop-blur-2xl border-t border-white/40 shadow-[0_-8px_24px_rgba(0,0,0,0.10)] rounded-none px-4 py-4 sm:px-7 sm:py-5">
          <ul className="flex items-center justify-between gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname.startsWith(item.to);
              const Icon = item.icon;

              return (
                <li key={item.to} className="relative">
                  <button
                    aria-label={item.label}
                    onClick={() => handleNavigate(item.to)}
                    className={cn(
                      "flex flex-col items-center justify-start -translate-y-1.5 gap-1 px-1.5 py-1 rounded-xl transition-colors duration-300 sm:gap-1.5 sm:px-2 sm:py-1.5 sm:rounded-2xl",
                      isActive
                        ? "text-purple-600"
                        : "text-slate-400 hover:text-slate-600",
                    )}
                  >
                    <div className="relative flex items-center justify-center">
                      <Icon
                        strokeWidth={isActive ? 2.5 : 1.8}
                        className={cn(
                          "h-5 w-5 sm:h-6 sm:w-6",
                          isActive &&
                          "drop-shadow-[0_0_12px_rgba(147,51,234,0.5)]",
                        )}
                      />
                      {item.to === "/shop/cart" && totalCartItems > 0 && (
                        <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-purple-600 text-white text-[10px] font-bold leading-4 text-center">
                          {totalCartItems > 99 ? "99+" : totalCartItems}
                        </span>
                      )}
                    </div>
                    <span
                      className={cn(
                        "h-3 text-[10px] sm:h-3.5 sm:text-xs font-semibold leading-none",
                        isActive ? "text-purple-700" : "text-slate-500",
                      )}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

export default BottomNavBar;
