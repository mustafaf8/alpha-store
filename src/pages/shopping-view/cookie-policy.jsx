import { Cookie, ShieldCheck, SlidersHorizontal, Gauge, BarChart3 } from "lucide-react";

function CookiePolicyPage() {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      description:
        "Required for cart behavior, session security, and core page functionality.",
      icon: ShieldCheck,
    },
    {
      title: "Performance Cookies",
      description:
        "Used to analyze page speed, usage behavior, and overall performance.",
      icon: Gauge,
    },
    {
      title: "Analytics Cookies",
      description:
        "Measure user interactions to guide product and experience improvements.",
      icon: BarChart3,
    },
    {
      title: "Preference Cookies",
      description:
        "Remember language, currency, and view preferences for a consistent experience.",
      icon: SlidersHorizontal,
    },
  ];

  const notes = [
    "You can delete or block cookies through browser settings.",
    "Disabling essential cookies may limit parts of the platform.",
    "Cookie preferences are managed per device and browser.",
    "Cookie usage and policy details may be updated based on operational needs.",
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
            Cookie Policy
          </h1>
          <p className="relative mt-4 text-sm md:text-base text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
            Cookies help the platform stay secure, fast, and personalized.
            This page explains cookie categories and preference controls.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            Cookie Types
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {cookieTypes.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight mb-6">
              Manage Cookie Preferences
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                You can review, delete, or block cookie categories through your
                browser settings. Keeping essential cookies enabled is recommended
                for a stable platform experience.
              </p>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Cookie preferences are device-specific, so you may need to update
                settings separately on different devices.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight mb-6">
              Important Notes
            </h2>
            <ul className="space-y-2.5">
              {notes.map((note) => (
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
      </div>
    </section>
  );
}

export default CookiePolicyPage;
