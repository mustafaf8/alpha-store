import { useLocation, useNavigate } from "react-router-dom";
import { Home, MessageCircle, LayoutGrid, Search, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

const BottomNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart || { cartItems: [] });
  const totalCartItems = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const navItems = [
    { to: "/shop/home", label: "Home", icon: Home },
    { to: "/shop/listing", label: "Shop", icon: LayoutGrid },
    { to: "/shop/cart", label: "Cart", icon: ShoppingCart },
    { to: "/shop/whatsapp", label: "Help", icon: MessageCircle },
    { to: "/shop/search", label: "Search", icon: Search },
  ];

  const scrollToTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (to) => {
    if (to === "/shop/whatsapp") {
      window.open(
        "https://wa.me/905347168754?text=Merhaba%2C%20site%20uzerinden%20iletisime%20gecmek%20istiyorum.",
        "_blank",
        "noopener,noreferrer",
      );
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
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[95%] max-w-[540px] z-[2147483647] sm:bottom-2 sm:w-[92%]">
        <nav className="bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_14px_30px_rgba(0,0,0,0.12)] rounded-[22px] px-3 py-2.5 sm:rounded-[35px] sm:px-6 sm:py-4">
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
                      "flex flex-col items-center justify-center gap-0.5 p-1 rounded-xl transition-all duration-500 sm:gap-1.5 sm:p-2 sm:rounded-2xl",
                      isActive
                        ? "text-purple-600 scale-110"
                        : "text-slate-400 hover:text-slate-600",
                    )}
                  >
                    <div className="relative flex items-center justify-center">
                      <Icon
                        strokeWidth={isActive ? 2.5 : 1.8}
                        className={cn(
                          "h-[18px] w-[18px] transition-all sm:h-6 sm:w-6",
                          isActive &&
                          "drop-shadow-[0_0_12px_rgba(147,51,234,0.5)]",
                        )}
                      />
                      {item.to === "/shop/cart" && totalCartItems > 0 && (
                        <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-purple-600 text-white text-[10px] font-bold leading-4 text-center">
                          {totalCartItems > 99 ? "99+" : totalCartItems}
                        </span>
                      )}
                      {isActive && (
                        <div className="absolute -bottom-2 w-1.5 h-1.5 bg-purple-600 rounded-full shadow-[0_0_15px_rgba(147,51,234,1)] animate-pulse" />
                      )}
                    </div>
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
