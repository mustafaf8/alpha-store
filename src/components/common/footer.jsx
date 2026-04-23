import {
  Instagram,
  Facebook,
  MessageSquare,
  Youtube,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      label: "Instagram",
      href: "#",
      icon: Instagram,
      className:
        "text-fuchsia-200 from-fuchsia-500/20 to-pink-500/20 shadow-fuchsia-500/25 hover:text-white hover:from-fuchsia-500 hover:to-pink-500 hover:shadow-fuchsia-500/45",
    },
    {
      label: "Facebook",
      href: "#",
      icon: Facebook,
      className:
        "text-blue-200 from-blue-500/20 to-cyan-500/20 shadow-blue-500/25 hover:text-white hover:from-blue-500 hover:to-cyan-500 hover:shadow-blue-500/45",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/905347168754",
      icon: MessageSquare,
      className:
        "text-emerald-200 from-emerald-500/20 to-green-500/20 shadow-emerald-500/25 hover:text-white hover:from-emerald-500 hover:to-green-500 hover:shadow-emerald-500/45",
    },
    {
      label: "YouTube",
      href: "#",
      icon: Youtube,
      className:
        "text-rose-200 from-rose-500/20 to-red-500/20 shadow-rose-500/25 hover:text-white hover:from-rose-500 hover:to-red-500 hover:shadow-rose-500/45",
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: Linkedin,
      className:
        "text-sky-200 from-sky-500/20 to-indigo-500/20 shadow-sky-500/25 hover:text-white hover:from-sky-500 hover:to-indigo-500 hover:shadow-sky-500/45",
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 pt-2 pb-20 md:pb-4 lg:pb-4 border-t border-gray-100 mt-6">
      <div className="mt-4 container mx-auto px-4 lg:px-20">
        <div className="pt-6">
          <div className="flex justify-center items-center gap-4 sm:gap-5">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br backdrop-blur-xl transition-all duration-300 ${item.className}`}
                >
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10 group-hover:ring-white/40" />
                  <Icon size={22} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
                </a>
              );
            })}
          </div>
          <div className="text-center text-xs text-gray-500 dark:text-gray-500 mt-5">
            <p>
              © {new Date().getFullYear()} alpha store. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
