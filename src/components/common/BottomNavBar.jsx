import { useLocation, useNavigate } from "react-router-dom";
import { Home, MessageCircle, LayoutGrid, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

const BottomNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { to: "/shop/home", label: "Home", icon: Home },
    { to: "/shop/listing", label: "Shop", icon: LayoutGrid },
    { to: "/shop/whatsapp", label: "Help", icon: MessageCircle },
    { to: "/shop/search", label: "Search", icon: Search },
  ];

  // We use a portal to ensure the nav bar is at the very top of the DOM stacking order
  const content = (
    <div className="lg:hidden">
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[92%] max-w-[420px] z-[2147483647]">
        <nav className="bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_25px_60px_rgba(0,0,0,0.15)] rounded-[35px] px-6 py-3.5">
          <ul className="flex items-center justify-between gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname.startsWith(item.to);
              const Icon = item.icon;

              return (
                <li key={item.to} className="relative">
                  <button
                    onClick={() => {
                      if (item.to === "/shop/whatsapp") {
                        window.open(
                          "https://wa.me/905347168754?text=Merhaba%2C%20site%20uzerinden%20iletisime%20gecmek%20istiyorum.",
                          "_blank",
                          "noopener,noreferrer",
                        );
                      } else {
                        navigate(item.to);
                      }
                    }}
                    className={cn(
                      "flex flex-col items-center justify-center gap-1.5 p-2 rounded-2xl transition-all duration-500",
                      isActive
                        ? "text-purple-600 scale-110"
                        : "text-slate-400 hover:text-slate-600"
                    )}
                  >
                    <div className="relative flex items-center justify-center">
                      <Icon
                        strokeWidth={isActive ? 2.5 : 1.8}
                        className={cn("w-6 h-6 transition-all", isActive && "drop-shadow-[0_0_12px_rgba(147,51,234,0.5)]")}
                      />
                      {isActive && (
                        <div className="absolute -bottom-2 w-1.5 h-1.5 bg-purple-600 rounded-full shadow-[0_0_15px_rgba(147,51,234,1)] animate-pulse" />
                      )}
                    </div>
                    <span className={cn(
                      "text-[9px] font-black uppercase tracking-[0.15em] transition-all duration-300",
                      isActive ? "opacity-100 mt-1" : "opacity-0 scale-50 h-0 overflow-hidden"
                    )}>
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
