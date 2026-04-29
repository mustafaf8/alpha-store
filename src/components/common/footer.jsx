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

const Footer = () => {
  const [hiddenPaymentMethods, setHiddenPaymentMethods] = useState({});
  const services = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-300" />,
      title: "Secure Payments",
      desc: "Pay with major cards or installment options. Your payment is protected with industry-standard security.",
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-emerald-300" />,
      title: "Original Brands",
      desc: "We only sell genuine products with direct warranties. Warranty coverage varies by product category.",
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-amber-300" />,
      title: "Easy Returns",
      desc: "Return or exchange eligible items according to our return policy. We’ll guide you step by step.",
    },
    {
      icon: <Truck className="w-6 h-6 text-sky-300" />,
      title: "Fast Delivery",
      desc: "Delivery times vary by location. Main cities typically arrive in 1–3 days.",
    },
  ];

  const footerColumns = [
    {
      title: "Shop",
      links: [
        { label: "New Arrivals", href: "/shop/listing?sortBy=createdAt-desc" },
        { label: "Best Sellers", href: "/shop/listing?sortBy=salesCount-desc" },
        { label: "Top Brands", href: "/shop/home" },
        { label: "Shop All", href: "/shop/listing" },
      ],
    },
    {
      title: "Customer Care",
      links: [
        { label: "Track Order", href: "#" },
        { label: "Returns & Exchanges", href: "#" },
        { label: "Payment Options", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Store Locator", href: "#" },
        { label: "Partnerships", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Warranty Info", href: "#" },
      ],
    },
  ];

  const paymentMethods = [
    {
      name: "paypal",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    },
    {
      name: "mastercard",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    },
    { name: "visa", img: "/visa.svg" },
    {
      name: "amex",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg",
    },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: Facebook,
      color: "text-blue-600 hover:text-blue-500",
    },
    {
      label: "Instagram",
      href: "#",
      icon: Instagram,
      color: "text-pink-500 hover:text-pink-400",
    },
    {
      label: "YouTube",
      href: "#",
      icon: Youtube,
      color: "text-red-600 hover:text-red-500",
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: Linkedin,
      color: "text-blue-500 hover:text-blue-400",
    },
  ];

  return (
    <footer className="bg-[#1a1a2e] dark:bg-gray-950 text-slate-300 text-sm mt-6 pb-14 lg:pb-0">
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
          <div className="flex w-full md:w-auto max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 text-sm"
            />
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors text-sm whitespace-nowrap">
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
                  className={`w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center transition-colors ${item.color}`}
                  aria-label={item.label}
                >
                  <Icon size={20} className="shrink-0" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why shop with us */}
      <div className="border-b border-white/10">
        <div className="shop-container py-8 md:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                {s.icon}
              </div>
              <h4 className="text-white font-bold text-sm">{s.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
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
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-slate-400 hover:text-white transition-colors text-xs"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment methods */}
      <div className="shop-container py-4 md:py-6 flex flex-wrap items-center justify-start gap-3">
        {paymentMethods.map((p) => {
          if (hiddenPaymentMethods[p.name]) {
            return null;
          }

          return (
            <div
              key={p.name}
              className="bg-white rounded-xl px-4 py-2 flex items-center justify-center h-10"
            >
              {p.name === "visa" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 262.3 85"
                  role="img"
                  aria-label="visa"
                  className="h-6 w-[70px]"
                >
                  <path
                    fill="#1434CB"
                    d="M170.9,0c-18.6,0-35.3,9.7-35.3,27.5c0,20.5,29.5,21.9,29.5,32.1c0,4.3-5,8.2-13.4,8.2c-12,0-21-5.4-21-5.4l-3.8,18c0,0,10.3,4.6,24.1,4.6c20.4,0,36.4-10.1,36.4-28.3c0-21.6-29.6-23-29.6-32.5c0-3.4,4.1-7.1,12.5-7.1c9.5,0,17.3,3.9,17.3,3.9l3.8-17.4C191.3,3.6,182.8,0,170.9,0L170.9,0z M0.5,1.3L0,3.9c0,0,7.8,1.4,14.9,4.3c9.1,3.3,9.7,5.2,11.3,11.1l16.7,64.3h22.4L99.6,1.3H77.3l-22.1,56l-9-47.5c-0.8-5.4-5-8.5-10.2-8.5C36,1.3,0.5,1.3,0.5,1.3z M108.6,1.3L91.1,83.6h21.3l17.4-82.3L108.6,1.3L108.6,1.3z M227.2,1.3c-5.1,0-7.8,2.7-9.8,7.5l-31.2,74.8h22.3l4.3-12.5H240l2.6,12.5h19.7L245.2,1.3L227.2,1.3L227.2,1.3z M230.1,23.6l6.6,30.9H219L230.1,23.6L230.1,23.6z"
                  />
                </svg>
              ) : (
                <img
                  src={p.img}
                  alt={p.name}
                  className="max-h-6 max-w-[70px] object-contain"
                  onError={() =>
                    setHiddenPaymentMethods((prev) => ({
                      ...prev,
                      [p.name]: true,
                    }))
                  }
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-3">
        <div className="shop-container text-center text-xs text-slate-500">
          All Rights Reserved © {new Date().getFullYear()} — Alpha Store
        </div>
      </div>
    </footer>
  );
};

export default Footer;
