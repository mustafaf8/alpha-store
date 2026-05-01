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
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-700 p-6 md:p-10 text-white shadow-xl text-center">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Legal
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/90 max-w-3xl mx-auto leading-relaxed">
            This page explains the core terms for orders, payments, deliveries,
            returns, and platform usage. By placing an order, users accept these terms.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" />
            General Terms
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
            Product, pricing, and campaign data may be adjusted based on
            operational conditions. Order completion depends on successful
            payment approval and security validation.
          </p>
          <p className="mt-2.5 text-sm md:text-base text-slate-600 leading-relaxed">
            Product descriptions and visuals are informational. Small
            variations may occur due to technical factors, display differences,
            or manufacturer updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article
                key={section.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-purple-600" />
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {section.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {section.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-purple-600" />
              Responsibility and Security
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              In cases of fraud, misuse, or policy violations, order processing
              may be suspended or canceled.
            </p>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              Account security is the user's responsibility. Use strong
              passwords and secure sessions to protect your account credentials.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-600" />
              Legal Framework
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              These terms are enforced under applicable national regulations.
              Consumer law and authorized judicial bodies apply in disputes.
            </p>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              Platform content, trademarks, and digital assets are protected by
              intellectual property rights.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-purple-600" />
            Important Notes
          </h2>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {legalNotes.map((note) => (
              <li
                key={note}
                className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700"
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
