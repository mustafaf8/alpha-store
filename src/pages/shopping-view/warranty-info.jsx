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
        <div className="rounded-3xl border border-slate-200 bg-primary p-6 md:p-10 text-white shadow-xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
          <p className="relative inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest">
            Legal
          </p>
          <h1 className="relative mt-4 text-3xl md:text-5xl font-black leading-tight uppercase tracking-tighter">
            Warranty Info
          </h1>
          <p className="relative mt-4 text-sm md:text-base text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
            You can find warranty scope, claim steps, and process details on
            this page. Our goal is to resolve warranty requests quickly and transparently.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            Warranty Coverage
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {coverage.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-500 font-medium leading-relaxed">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              Warranty Claim Steps
            </h2>
            <ul className="space-y-2.5">
              {claimSteps.map((step) => (
                <li
                  key={step}
                  className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 uppercase tracking-tight hover:border-primary/30 transition-colors"
                >
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-primary" />
              </div>
              Exclusions
            </h2>
            <ul className="space-y-2.5">
              {exclusions.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 uppercase tracking-tight hover:border-primary/30 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm text-center">
          <h2 className="text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
            Process and Contact
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
            Warranty timelines may vary by product and brand. Once your request
            is received, we provide detailed updates on inspection and service steps.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col items-center gap-3 group hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-black text-slate-700 uppercase tracking-tight">Keep Invoice Ready</span>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col items-center gap-3 group hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Clock3 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-black text-slate-700 uppercase tracking-tight">Fast Evaluation</span>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col items-center gap-3 group hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-black text-slate-700 uppercase tracking-tight">Support Line</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WarrantyInfoPage;
