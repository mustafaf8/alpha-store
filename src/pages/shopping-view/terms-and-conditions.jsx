import {
  FileText,
  ShoppingCart,
  CreditCard,
  Truck,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  Scale,
} from "lucide-react";

function TermsAndConditionsPage() {
  const sections = [
    {
      title: "Orders and Purchases",
      description:
        "All orders are subject to stock availability, payment verification, and security checks.",
      icon: ShoppingCart,
    },
    {
      title: "Payment and Pricing",
      description:
        "Prices may change based on campaigns and stock status. Orders are not final until payment is confirmed.",
      icon: CreditCard,
    },
    {
      title: "Delivery Process",
      description:
        "Delivery times may vary depending on region, product type, and operational volume.",
      icon: Truck,
    },
    {
      title: "Returns and Cancellations",
      description:
        "Returns, exchanges, and cancellations are handled according to our published policy and applicable law.",
      icon: RotateCcw,
    },
  ];

  const legalNotes = [
    "Product visuals are representative and may slightly differ in color or detail.",
    "Content, pricing, and promotions may be updated without prior notice.",
    "Orders may be canceled in cases of misuse, fraud, or security violations.",
    "Legal disputes are resolved under applicable law and competent courts.",
  ];

  return (
    <section className="shop-container py-8 md:py-14">
      <div className="mx-auto max-w-6xl space-y-6 md:space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-primary p-6 md:p-10 text-white shadow-xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
          <p className="relative inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest">
            Legal
          </p>
          <h1 className="relative mt-4 text-3xl md:text-5xl font-black leading-tight uppercase tracking-tighter">
            Terms & Conditions
          </h1>
          <p className="relative mt-4 text-sm md:text-base text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
            This page explains the core terms for orders, payments, deliveries,
            returns, and platform usage. By placing an order, users accept these terms.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            General Terms
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 font-medium leading-relaxed">
            Product, pricing, and campaign data may be adjusted based on
            operational conditions. Order completion depends on successful
            payment approval and security validation.
          </p>
          <p className="mt-2.5 text-sm md:text-base text-slate-500 font-medium leading-relaxed">
            Product descriptions and visuals are informational. Small
            variations may occur due to technical factors, display differences,
            or manufacturer updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article
                key={section.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-black text-slate-900 uppercase tracking-tight">
                    {section.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {section.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              Responsibility and Security
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                In cases of fraud, misuse, or policy violations, order processing
                may be suspended or canceled.
              </p>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Account security is the user's responsibility. Use strong
                passwords and secure sessions to protect your account credentials.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              Legal Framework
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                These terms are enforced under applicable national regulations.
                Consumer law and authorized judicial bodies apply in disputes.
              </p>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Platform content, trademarks, and digital assets are protected by
                intellectual property rights.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-primary" />
            </div>
            Important Notes
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {legalNotes.map((note) => (
              <li
                key={note}
                className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm font-black text-slate-700 uppercase tracking-tight hover:border-primary/30 transition-colors"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TermsAndConditionsPage;
