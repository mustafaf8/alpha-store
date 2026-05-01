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
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-700 p-6 md:p-10 text-white shadow-xl text-center">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Legal
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight">
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/90 max-w-3xl mx-auto leading-relaxed">
            Cookies help the platform stay secure, fast, and personalized.
            This page explains cookie categories and preference controls.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
            <Cookie className="w-5 h-5 text-purple-600" />
            Cookie Types
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {cookieTypes.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-purple-600" />
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900">
              Manage Cookie Preferences
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              You can review, delete, or block cookie categories through your
              browser settings. Keeping essential cookies enabled is recommended
              for a stable platform experience.
            </p>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              Cookie preferences are device-specific, so you may need to update
              settings separately on different devices.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900">
              Important Notes
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {notes.map((note) => (
                <li
                  key={note}
                  className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
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
