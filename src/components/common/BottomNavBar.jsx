import { useLocation, useNavigate } from "react-router-dom";
import { Home, MessageCircle, LayoutGrid, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { to: "/shop/home", label: "Explore", icon: <Home strokeWidth={1.8} /> },
    {
      to: "/shop/search",
      label: "Search",
      icon: <Search strokeWidth={1.8} />,
    },
    {
      to: "/shop/whatsapp",
      label: "WP",
      icon: <MessageCircle strokeWidth={1.8} />,
    },
    {
      to: "/shop/listing",
      label: "Categories",
      icon: <LayoutGrid strokeWidth={1.8} />,
    }
  ];

  return (
    <>
      <div className="h-16 mb-0 md:mb-0 pb-safe-bottom"></div>
      <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-[9999998] bottom-nav border-t border-gray-100">
        <ul className="flex w-full justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.to);
            return (
              <li
                key={item.to}
                className="flex flex-1 items-center justify-center relative h-full"
              >
                <div
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
                    "flex flex-col items-center justify-center w-full h-full transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-gray-500 dark:text-gray-400",
                  )}
                >
                  <div className="relative">
                    {item.icon}
                  </div>
                  <span
                    className={cn(
                      "text-xs mt-1",
                      isActive ? "font-medium" : "font-normal",
                    )}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <div className="absolute top-0 w-1/2 h-0.5 bg-primary rounded-full"></div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default BottomNavBar;
