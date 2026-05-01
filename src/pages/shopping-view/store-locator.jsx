import { MapPin, Phone, Mail, Clock3, Navigation } from "lucide-react";

function StoreLocatorPage() {
  return (
    <section className="shop-container py-8 md:py-14">
      <div className="mx-auto max-w-6xl space-y-6 md:space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-700 via-violet-700 to-purple-700 p-6 md:p-10 text-white shadow-xl text-center">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Store Locator
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight">
            Magazamiz Sizi Bekliyor
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/90 max-w-3xl mx-auto leading-relaxed">
            Adres, iletisim ve yol tarifi bilgilerini tek sayfada bulabilir,
            magaza konumumuza tek tikla ulasabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-5">
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-900">Magaza Bilgileri</h2>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-purple-600 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Adres
                  </p>
                  <p className="text-sm font-medium text-slate-800">
                    Istanbul City Center, Main Shopping District
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-start gap-3">
                <Phone className="w-4 h-4 text-purple-600 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Telefon
                  </p>
                  <p className="text-sm font-medium text-slate-800">
                    +90 534 716 87 54
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-start gap-3">
                <Mail className="w-4 h-4 text-purple-600 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    E-Posta
                  </p>
                  <p className="text-sm font-medium text-slate-800">
                    support@alphastore.com
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-start gap-3">
                <Clock3 className="w-4 h-4 text-purple-600 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Calisma Saatleri
                  </p>
                  <p className="text-sm font-medium text-slate-800">
                    Hafta Ici 09:00 - 22:00 / Hafta Sonu 10:00 - 23:00
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-purple-600 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Ulasim Notu
                  </p>
                  <p className="text-sm font-medium text-slate-800">
                    Metro ve otobus duraklarina 5 dakika yurume mesafesinde.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Istanbul+store"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Yol Tarifi Al
            </a>
          </div>

          <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-3 md:p-4 shadow-sm">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <iframe
                title="Alpha Store Location"
                src="https://maps.google.com/maps?q=Istanbul+store&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[280px] sm:h-[340px] lg:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Haritada yakinlastirarak konumu detayli inceleyebilir ve rota
              olusturabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreLocatorPage;
