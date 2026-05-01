import { ShieldCheck, FileText, Wrench, Clock3, BadgeCheck, Phone } from "lucide-react";

function WarrantyInfoPage() {
  const coverage = [
    {
      title: "Electronics",
      detail: "Usually covered by manufacturer warranty support for up to 24 months.",
    },
    {
      title: "Small Home Appliances",
      detail: "Depending on brand and model, warranty coverage may range from 12 to 24 months.",
    },
    {
      title: "Accessories and Consumables",
      detail: "Limited warranty or exchange terms may apply by category.",
    },
    {
      title: "Campaign / Special Items",
      detail: "Special conditions listed on the product page apply.",
    },
  ];

  const claimSteps = [
    "Prepare your invoice and order number.",
    "Share the product model and issue details with our support team.",
    "After guidance, start the authorized service or inspection process.",
    "For approved cases, repair, replacement, or refund is applied.",
  ];

  const exclusions = [
    "Physical damage caused by user misuse",
    "Unauthorized interventions or service actions",
    "Out-of-scope cases such as liquid contact, drops, or breakage",
    "Usage without invoice or outside warranty conditions",
  ];

  return (
    <section className="shop-container py-8 md:py-14">
      <div className="mx-auto max-w-6xl space-y-6 md:space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-700 p-6 md:p-10 text-white shadow-xl text-center">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Legal
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight">
            Warranty Info
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/90 max-w-3xl mx-auto leading-relaxed">
            You can find warranty scope, claim steps, and process details on
            this page. Our goal is to resolve warranty requests quickly and transparently.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-purple-600" />
            Warranty Coverage
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {coverage.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-100 bg-slate-50 p-4"
              >
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-purple-600" />
              Warranty Claim Steps
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {claimSteps.map((step) => (
                <li
                  key={step}
                  className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
                >
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-purple-600" />
              Exclusions
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {exclusions.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm text-center">
          <h2 className="text-lg md:text-xl font-black text-slate-900">
            Process and Contact
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Warranty timelines may vary by product and brand. Once your request
            is received, we provide detailed updates on inspection and service steps.
          </p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm font-semibold text-slate-700 flex items-center justify-center gap-2">
              <FileText className="w-4 h-4 text-purple-600" />
              Keep Invoice Ready
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm font-semibold text-slate-700 flex items-center justify-center gap-2">
              <Clock3 className="w-4 h-4 text-purple-600" />
              Fast Evaluation
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm font-semibold text-slate-700 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-purple-600" />
              Support: +90 534 716 87 54
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WarrantyInfoPage;
