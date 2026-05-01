import { ShieldCheck, Truck, Sparkles, Users, Target, Heart } from "lucide-react";

function AboutUsPage() {
  const highlights = [
    {
      title: "Özenle Seçilmiş Ürünler",
      description:
        "Güvenilir markalardan seçilmiş ürünlerle kalite, fiyat dengesi ve güveni aynı anda sunuyoruz.",
    },
    {
      title: "Müşteri Odaklı Hizmet",
      description:
        "Destek ekibimiz hızlı dönüş, şeffaf iletişim ve net çözüm odaklı bir deneyim için çalışır.",
    },
    {
      title: "Güvenilir Operasyon",
      description:
        "Stoktan teslimata kadar tüm adımları optimize ederek daha tutarlı ve hızlı bir alışveriş akışı sağlarız.",
    },
  ];

  const values = [
    "Şeffaf politika ve güven odaklı yaklaşım",
    "Sürekli ürün ve deneyim geliştirme",
    "Hızlı, güvenli ve akıcı alışveriş",
    "Uzun vadeli müşteri memnuniyeti",
  ];

  const stats = [
    { label: "Aktif Ürün", value: "10K+" },
    { label: "Mutlu Müşteri", value: "250K+" },
    { label: "Marka İş Ortağı", value: "120+" },
    { label: "Ortalama Teslimat", value: "1-3 Gün" },
  ];

  return (
    <section className="shop-container py-8 md:py-14">
      <div className="mx-auto max-w-6xl space-y-6 md:space-y-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-700 p-6 md:p-10 shadow-xl text-center text-white relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_48%)]" />
          <div className="relative">
            <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Biz Kimiz
            </p>
            <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight">
              Alisverisin Daha Iyi Hali
            </h1>
            <p className="mt-4 text-sm md:text-base text-white/90 leading-relaxed max-w-3xl mx-auto">
              Alpha Store; kalite, hiz ve guven odakli modern bir e-ticaret
              deneyimi sunar. Amacimiz, dogru urunu en kolay sekilde bulmanizi
              ve memnuniyetle teslim almanizi saglamaktir.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-center"
            >
              <p className="text-2xl md:text-3xl font-black text-slate-900">
                {stat.value}
              </p>
              <p className="mt-1 text-xs md:text-sm font-semibold text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-8 shadow-sm text-center">
          <p className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700">
            Biz Kimiz
          </p>
          <h2 className="mt-3 text-2xl md:text-4xl font-black text-slate-900 leading-tight">
            Alpha Store Hakkında
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Alpha Store; kaliteli ürün, rekabetçi fiyat ve sorunsuz alışveriş
            deneyimini tek noktada sunmak için tasarlanmış modern bir e-ticaret
            platformudur.
          </p>
          <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Katalog kalitesini, operasyon süreçlerini ve destek hizmetlerini
            sürekli geliştirerek müşterilerimizin güvenle ve hızlıca doğru ürüne
            ulaşmasını hedefliyoruz.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-slate-700">Guvenli Odeme</span>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-center gap-2">
              <Truck className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-slate-700">Hizli Teslimat</span>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-slate-700">Secili Markalar</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm text-center"
            >
              <h2 className="text-base font-bold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 text-center">
              Neyi Onemsiyoruz
            </h2>
            <div className="mt-4 space-y-2">
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-600" />
                Musteri odakli destek
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-600" />
                Kesintisiz operasyon kalitesi
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 flex items-center gap-2">
                <Heart className="w-4 h-4 text-purple-600" />
                Uzun vadeli memnuniyet
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm text-center">
            <h2 className="text-lg md:text-xl font-black text-slate-900">
              Temel Değerlerimiz
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2.5">
              {values.map((value) => (
                <li
                  key={value}
                  className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 text-center"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm text-center">
          <h2 className="text-lg md:text-xl font-black text-slate-900">
            Birlikte Buyuyoruz
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Her geri bildirimi urun ve hizmet kalitemizi artirmak icin bir firsat
            olarak goruyoruz. Alpha Store deneyimini her ay daha iyi hale getirmek
            icin calismaya devam ediyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUsPage;
