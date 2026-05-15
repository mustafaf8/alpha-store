import { MapPin, Phone, Mail, Clock3, Navigation } from "lucide-react";

function StoreLocatorPage() {
  return (
    <section className="shop-container py-8 md:py-14">
      <div className="mx-auto max-w-6xl space-y-6 md:space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-primary p-6 md:p-10 text-white shadow-xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
          <p className="relative inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest">
            Store Locator
          </p>
          <h1 className="relative mt-4 text-3xl md:text-5xl font-black leading-tight uppercase tracking-tighter">
            Our Store Is Ready for You
          </h1>
          <p className="relative mt-4 text-sm md:text-base text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
            Find address, contact details, and directions in one place, then
            open navigation with a single click.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6">Store Information</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Address
                  </p>
                  <p className="text-sm font-bold text-slate-800 leading-tight mt-1">
                    Istanbul City Center, Main Shopping District
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Phone
                  </p>
                  <p className="text-sm font-bold text-slate-800 leading-tight mt-1">
                    +90 534 716 87 54
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Email
                  </p>
                  <p className="text-sm font-bold text-slate-800 leading-tight mt-1">
                    support@circlestore.com
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Opening Hours
                  </p>
                  <p className="text-sm font-bold text-slate-800 leading-tight mt-1">
                    Weekdays 09:00 - 22:00 / Weekend 10:00 - 23:00
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Transit Note
                  </p>
                  <p className="text-sm font-bold text-slate-800 leading-tight mt-1">
                    A 5-minute walk from nearby metro and bus stops.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Istanbul+store"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-base font-black uppercase tracking-widest text-white hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </div>

          <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-3 md:p-4 shadow-sm">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 h-full min-h-[300px]">
              <iframe
                title="Circle Store Location"
                src="https://maps.google.com/maps?q=Istanbul+store&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreLocatorPage;
