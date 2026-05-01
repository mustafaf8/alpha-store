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
      title: "Siparis ve Satin Alma",
      description:
        "Verilen tum siparisler stok durumu, odeme dogrulamasi ve guvenlik kontrollerine tabidir.",
      icon: ShoppingCart,
    },
    {
      title: "Odeme ve Fiyatlandirma",
      description:
        "Fiyatlar kampanya ve stok durumuna gore guncellenebilir. Odeme onayi alinmadan siparis tamamlanmis sayilmaz.",
      icon: CreditCard,
    },
    {
      title: "Teslimat Surecleri",
      description:
        "Teslimat sureleri bolge, urun tipi ve operasyonel yogunluga bagli olarak degisebilir.",
      icon: Truck,
    },
    {
      title: "Iade ve Iptal",
      description:
        "Iade, degisim ve iptal islemleri yayinlanan iade kosullari ve ilgili mevzuat cercevesinde uygulanir.",
      icon: RotateCcw,
    },
  ];

  const legalNotes = [
    "Urun gorselleri temsilidir; renk ve detaylarda kucuk farkliliklar olabilir.",
    "Platformdaki icerik, fiyat ve kampanya bilgileri onceden haber verilmeksizin guncellenebilir.",
    "Kotuye kullanim, sahte islem veya guvenlik ihlali durumlarinda siparisler iptal edilebilir.",
    "Yasal uyusmazliklarda ilgili mevzuat ve yetkili mahkemeler esas alinir.",
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
            Bu sayfa; siparis, odeme, teslimat, iade ve platform kullanimina
            iliskin temel kosullari aciklar. Siparis olusturan her kullanici bu
            kosullari kabul etmis sayilir.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" />
            Genel Kosullar
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
            Platformda yer alan urun, fiyat ve kampanya bilgileri guncel
            operasyonel kosullara gore duzenlenir. Siparisin olusmasi, odeme
            onayi ve guvenlik kontrollerinin tamamlanmasina baglidir.
          </p>
          <p className="mt-2.5 text-sm md:text-base text-slate-600 leading-relaxed">
            Urun aciklamalari ve gorselleri bilgilendirme amaclidir; teknik
            farkliliklar, ekran goruntuleme degiskenleri veya uretici guncellemeleri
            nedeniyle kucuk farklar olusabilir.
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
              Sorumluluk ve Guvenlik
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Dolandiricilik, kotuye kullanim veya guvenlik politikalarina aykiri
              durumlarda siparislerin islenmesi durdurulabilir ya da iptal
              edilebilir.
            </p>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              Hesap guvenligi kullanicinin sorumlulugundadir. Hesap bilgilerinizin
              gizliligini korumak adina guclu sifre ve guvenli oturum kullanimi
              onemlidir.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-600" />
              Yasal Cerceve
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Bu kosullar ulusal mevzuata uygun olarak uygulanir. Uyusmazlik
              durumlarinda ilgili tuketici mevzuati ve yetkili yargi mercileri
              esas alinir.
            </p>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              Platforma ait icerik, marka ve dijital varliklar fikri mulkiyet
              haklari kapsaminda korunur.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-purple-600" />
            Onemli Notlar
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
