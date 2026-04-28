import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const services = [
    {
      icon: "🔒",
      title: "Safe Shopping & Payment",
      desc: "We are committed to following the best privacy policies and security, and you can pay using Visa, Master Card, American Express, Oritel or Otf, or pay upon delivery or in Jarir stores.",
    },
    {
      icon: "✅",
      title: "Authentic Products & Guaranteed",
      desc: "All electronic devices sold online are original and guaranteed directly from Jarir and the company. The guarantee reaches up to 3 years. This excludes accessories and devices. Jarir's regulations and instructions apply.",
    },
    {
      icon: "🔄",
      title: "Return Services & Support",
      desc: "You can return your purchases or exchange them the way you like. You can return it to us by visiting any Jarir store, or you can book a return visit from Jarir, or contact us and we will be pleased to serve you whenever you are in the Kingdom.",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      desc: "We provide delivery within the Kingdom of Saudi Arabia within 1-3 days for main cities, within 5 days for other cities.",
    },
  ];

  const paymentMethods = [
    { name: "tabby", img: "https://cdn.brandfetch.io/idpYJDvMhj/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEyhd-rk" },
    { name: "tamara", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Tamara_Logo.svg/640px-Tamara_Logo.svg.png" },
    { name: "mada", img: "https://upload.wikimedia.org/wikipedia/ar/5/5c/Saudi_Payments_mada.svg" },
    { name: "mastercard", img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
    { name: "visa", img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" },
    { name: "amex", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "#", icon: Facebook, color: "hover:text-blue-600" },
    { label: "Instagram", href: "#", icon: Instagram, color: "hover:text-pink-500" },
    { label: "YouTube", href: "#", icon: Youtube, color: "hover:text-red-600" },
    { label: "LinkedIn", href: "#", icon: Linkedin, color: "hover:text-blue-500" },
  ];

  return (
    <footer className="bg-[#1a1a2e] text-slate-300 text-sm mt-8">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-20 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-white font-bold text-base mb-1">Be the first to know about latest technologies and offers</h3>
            <p className="text-slate-400 text-xs">Join our mailing list to check out latest products, exclusive offers and more...</p>
          </div>
          <div className="flex w-full md:w-auto max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 text-sm"
            />
            <button className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} className={`text-slate-400 transition-colors ${item.color}`} aria-label={item.label}>
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="text-3xl">{s.icon}</div>
              <h4 className="text-white font-bold text-sm">{s.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment methods */}
      <div className="container mx-auto px-4 lg:px-20 py-6 flex flex-wrap items-center justify-center gap-4">
        {paymentMethods.map((p, i) => (
          <div key={i} className="bg-white/10 rounded-xl px-4 py-2 flex items-center justify-center h-10">
            <img src={p.img} alt={p.name} className="max-h-6 max-w-[70px] object-contain filter brightness-150" />
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4 text-center text-xs text-slate-500">
          All Rights Reserved © {new Date().getFullYear()} — Alpha Store
        </div>
      </div>
    </footer>
  );
};

export default Footer;
