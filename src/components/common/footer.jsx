import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ShieldCheck,
  BadgeCheck,
  RotateCcw,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [hiddenPaymentMethods, setHiddenPaymentMethods] = useState({});
  const services = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Secure Payments",
      desc: "Pay with major cards or installment options. Your payment is protected with industry-standard security.",
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-primary" />,
      title: "Original Brands",
      desc: "We only sell genuine products with direct warranties. Warranty coverage varies by product category.",
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-primary" />,
      title: "Easy Returns",
      desc: "Changed your mind? Return your product within 14 days for a smooth refund or exchange process.",
    },
    {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: "Fast Shipping",
      desc: "Your orders are carefully packed and delivered to your door with our reliable logistics partners.",
    },
  ];

  const footerColumns = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/shop/home" },
        { label: "Products", href: "/shop/listing" },
        { label: "Offers", href: "/shop/listing" },
        { label: "New Arrivals", href: "/shop/listing" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/shop/home" },
        { label: "Shipping Info", href: "/shop/warranty-info" },
        { label: "Returns", href: "/shop/warranty-info" },
        { label: "Contact Us", href: "/shop/about-us" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/shop/about-us" },
        { label: "Careers", href: "#" },
        { label: "Store Locator", href: "/shop/store-locator" },
        { label: "Partnerships", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/shop/privacy-policy" },
        { label: "Terms & Conditions", href: "/shop/terms-and-conditions" },
        { label: "Cookie Policy", href: "/shop/cookie-policy" },
        { label: "Warranty Info", href: "/shop/warranty-info" },
      ],
    },
  ];

  const socialLinks = [
    { label: "Instagram", icon: Instagram, href: "#", colorClass: "bg-[#E4405F] border-[#E4405F]" },
    { label: "Facebook", icon: Facebook, href: "#", colorClass: "bg-[#1877F2] border-[#1877F2]" },
    { label: "Youtube", icon: Youtube, href: "#", colorClass: "bg-[#FF0000] border-[#FF0000]" },
    { label: "Linkedin", icon: Linkedin, href: "#", colorClass: "bg-[#0A66C2] border-[#0A66C2]" },
  ];

  const paymentMethods = [
    { name: "visa", icon: "/visa.svg" },
    { name: "mastercard", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
    { name: "paypal", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
    { name: "applepay", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" },
  ];

  return (
    <footer className="bg-[#1a1a2e] dark:bg-gray-950 text-slate-300 text-sm mt-6 pb-20 lg:pb-0">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="shop-container py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-white font-bold text-base mb-1">
              Exclusive deals and new arrivals, delivered to you
            </h3>
            <p className="text-slate-400 text-xs">
              Subscribe for offers, drops, and member-only discounts—no spam.
            </p>
          </div>
          <div className="flex w-full md:w-auto max-w-md gap-2 max-[720px]:gap-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2.5 max-[720px]:px-3 max-[720px]:py-2 bg-white/10 border border-white/20 rounded-desktop max-md:rounded-mobile text-white placeholder-slate-400 focus:outline-none focus:border-primary text-sm max-[720px]:text-xs transition-colors"
            />
            <button className="px-4 py-2 max-[720px]:px-3 max-[720px]:py-1.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-desktop max-md:rounded-mobile transition-colors text-sm max-[720px]:text-xs whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white border transition-all duration-300 hover:scale-110 hover:brightness-110 shadow-lg ${item.colorClass}`}
                  aria-label={item.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer services */}
      <div className="border-b border-white/10 bg-black/10">
        <div className="shop-container py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                {service.icon}
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">{service.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer links */}
      <div className="border-b border-white/10">
        <div className="shop-container py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <div className="text-white font-bold text-sm">{col.title}</div>
              <div className="flex flex-col gap-2">
                {col.links.map((l) => (
                  l.href.startsWith("/") ? (
                    <Link
                      key={l.label}
                      to={l.href}
                      className="text-slate-400 hover:text-white transition-colors text-xs"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      key={l.label}
                      href={l.href}
                      className="text-slate-400 hover:text-white transition-colors text-xs"
                    >
                      {l.label}
                    </a>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment methods */}
      <div className="shop-container py-4 md:py-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center justify-start gap-3">
          {paymentMethods.map((p) => {
            if (hiddenPaymentMethods[p.name]) {
              return null;
            }

            return (
              <div
                key={p.name}
                className="bg-white rounded-mobile px-3 py-1.5 flex items-center justify-center h-10 w-16 lg:h-12 lg:w-20 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={p.icon}
                  alt={p.name}
                  className="h-full w-full object-contain"
                  onError={() =>
                    setHiddenPaymentMethods((prev) => ({
                      ...prev,
                      [p.name]: true,
                    }))
                  }
                />
              </div>
            );
          })}
        </div>

        <div className="self-start lg:self-auto flex items-center gap-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-desktop max-md:rounded-mobile border border-white/20 bg-white/10 px-3 py-2 hover:bg-white/15 transition-colors"
            aria-label="Download on Google Play"
          >
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              className="h-5 w-5 flex-shrink-0"
            >
              <path fill="#34A853" d="M3 2.5 13.5 13 3 23.5z" />
              <path fill="#4285F4" d="M13.5 13 17 9.5l4 2.5-4 2.5z" />
              <path fill="#FBBC04" d="M3 2.5 9.9 9.4 13.5 13 3 23.5z" />
              <path fill="#EA4335" d="M13.5 13 9.9 16.6 3 23.5l18-11.5z" />
            </svg>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] text-slate-300">GET IT ON</span>
              <span className="text-sm font-semibold text-white">
                Google Play
              </span>
            </span>
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-desktop max-md:rounded-mobile border border-white/20 bg-white/10 px-3 py-2 hover:bg-white/15 transition-colors"
            aria-label="Download on the App Store"
          >
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              className="h-5 w-5 flex-shrink-0 text-white"
              fill="currentColor"
            >
              <path d="M16.37 12.15c.02 2.38 2.09 3.17 2.12 3.18-.02.06-.33 1.13-1.08 2.24-.65.96-1.33 1.92-2.39 1.94-1.04.02-1.37-.62-2.56-.62-1.19 0-1.56.6-2.53.64-1 .04-1.77-1-2.42-1.95-1.33-1.93-2.35-5.46-.98-7.84.68-1.18 1.9-1.93 3.22-1.95 1.01-.02 1.96.68 2.56.68.6 0 1.73-.84 2.92-.72.5.02 1.9.2 2.8 1.51-.07.04-1.67.97-1.65 2.89zM14.93 5.2c.54-.66.9-1.58.8-2.5-.77.03-1.7.51-2.25 1.17-.49.57-.92 1.5-.8 2.38.86.07 1.72-.44 2.25-1.05z" />
            </svg>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] text-slate-300">
                Download on the
              </span>
              <span className="text-sm font-semibold text-white">
                App Store
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-3">
        <div className="shop-container text-center text-xs text-slate-500">
          All Rights Reserved © {new Date().getFullYear()} — Circle Store
        </div>
      </div>
    </footer>
  );
};

export default Footer;
