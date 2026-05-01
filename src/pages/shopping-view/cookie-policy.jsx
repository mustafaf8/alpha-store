import { Cookie, ShieldCheck, SlidersHorizontal, Gauge, BarChart3 } from "lucide-react";

function CookiePolicyPage() {
  const cookieTypes = [
    {
      title: "Zorunlu Cerezler",
      description:
        "Sepet, oturum guvenligi ve temel sayfa islevlerinin calismasi icin gereklidir.",
      icon: ShieldCheck,
    },
    {
      title: "Performans Cerezleri",
      description:
        "Sayfa hizini, kullanim davranislarini ve genel performansi analiz etmek icin kullanilir.",
      icon: Gauge,
    },
    {
      title: "Analitik Cerezler",
      description:
        "Kullanici etkileşimlerini olcumleyerek urun ve deneyim iyilestirmelerinde yol gosterir.",
      icon: BarChart3,
    },
    {
      title: "Tercih Cerezleri",
      description:
        "Dil, para birimi ve gorunum tercihlerini hatirlayarak daha tutarli deneyim sunar.",
      icon: SlidersHorizontal,
    },
  ];

  const notes = [
    "Cerezleri tarayici ayarlarindan silebilir veya engelleyebilirsiniz.",
    "Zorunlu cerezlerin devre disi birakilmasi platformun bazi alanlarini kisitlayabilir.",
    "Cerez tercihleri cihaz ve tarayici bazinda ayrica yonetilir.",
    "Politika ve cerez kullanimi operasyonel ihtiyaca gore guncellenebilir.",
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
            Cerezler; platformun guvenli, hizli ve size ozel calismasini saglamak
            icin kullanilir. Bu sayfa cerez turlerini ve tercih yonetimini aciklar.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
            <Cookie className="w-5 h-5 text-purple-600" />
            Cerez Turleri
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
              Cerez Tercihlerinizi Yonetin
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Tarayici ayarlarinizdan cerezleri inceleyebilir, silebilir veya
              belirli kategorileri engelleyebilirsiniz. Platform kullanim
              deneyiminin bozulmamasi icin zorunlu cerezlerin acik tutulmasi
              onerilir.
            </p>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              Cerez tercihleri cihaz bazindadir; farkli cihazlarda ayarlarinizi
              ayrica duzenlemeniz gerekebilir.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900">
              Onemli Notlar
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
