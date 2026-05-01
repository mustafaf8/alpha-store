import {
  ShieldCheck,
  Lock,
  Eye,
  UserCheck,
  Mail,
  FileText,
  Users,
  Clock3,
  Globe,
} from "lucide-react";

function PrivacyPolicyPage() {
  const collectedData = [
    {
      title: "Kimlik ve Iletisim Bilgileri",
      items: ["Ad soyad", "E-posta adresi", "Telefon numarasi", "Hesap bilgileri"],
    },
    {
      title: "Adres ve Teslimat Bilgileri",
      items: [
        "Teslimat adresi",
        "Fatura bilgileri",
        "Sehir/ilce/posta kodu",
        "Siparis teslimat notlari",
      ],
    },
    {
      title: "Siparis ve Islem Bilgileri",
      items: [
        "Siparis gecmisi",
        "Iade ve degisim kayitlari",
        "Fatura detaylari",
        "Musteri hizmetleri talepleri",
      ],
    },
    {
      title: "Kullanim ve Teknik Veriler",
      items: [
        "IP ve cihaz bilgileri",
        "Tarayici ve oturum verileri",
        "Sayfa kullanim davranislari",
        "Cerez (cookie) tercihleri",
      ],
    },
  ];

  const processingPurposes = [
    "Siparislerin alinmasi, onaylanmasi ve teslim edilmesi",
    "Musteri talepleri ve destek sureclerinin yonetilmesi",
    "Odeme guvenligi, dolandiricilik onleme ve risk kontrolu",
    "Platform performansi, urun deneyimi ve hizmet kalitesinin iyilestirilmesi",
    "Yasal ve duzenleyici yukumluluklerin yerine getirilmesi",
  ];

  const sharingParties = [
    {
      title: "Lojistik ve Kargo Is Ortaklari",
      description:
        "Teslimat operasyonunun yurutulmesi icin gerekli ad, soyad, telefon ve adres bilgileri.",
    },
    {
      title: "Odeme ve Finans Kuruluslari",
      description:
        "Odeme dogrulama ve islem guvenligi icin gerekli finansal islem verileri.",
    },
    {
      title: "Teknik Servis Saglayicilar",
      description:
        "Altyapi, analiz, bildirim ve sistem guvenligi amacli sinirli teknik veri erisimi.",
    },
    {
      title: "Yetkili Kamu Kurumlari",
      description:
        "Yasal zorunluluk veya resmi talep halinde, mevzuat kapsaminda paylasim.",
    },
  ];

  const securityMeasures = [
    "Sifreleme, erisim kontrolu ve sistem guvenlik duvarlari",
    "Yetki bazli personel erisimi ve kayitli denetim mekanizmalari",
    "Duzenli guvenlik taramalari ve olay yonetim prosedurleri",
    "Veri yedekleme, butunluk kontrolleri ve operasyonel denetimler",
  ];

  const userRights = [
    "Hangi verilerin islendigi hakkinda bilgi alma",
    "Yanlis veya eksik verilerin duzeltilmesini talep etme",
    "Belirli kosullarda verilerin silinmesini isteme",
    "Veri isleme faaliyetlerine itiraz etme",
    "Yasal kapsamda kurul ve merciilere basvuru yapma",
  ];

  return (
    <section className="shop-container py-8 md:py-14">
      <div className="mx-auto max-w-6xl space-y-6 md:space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-700 p-6 md:p-10 text-white shadow-xl text-center">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Legal
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight">
            Gizlilik Politikasi
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/90 max-w-3xl mx-auto leading-relaxed">
            Kisisel verilerinizin gizliligi ve guvenligi onceligimizdir. Bu
            politika; hangi verileri topladigimizi, neden kullandigimizi ve nasil
            korudugumuzu detayli sekilde aciklar.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" />
            Hangi Verileri Topluyoruz?
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {collectedData.map((group) => (
              <article
                key={group.title}
                className="rounded-xl border border-slate-100 bg-slate-50 p-4"
              >
                <h3 className="text-sm font-bold text-slate-900">{group.title}</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-purple-600" />
              Verileri Neden Isliyoruz?
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {processingPurposes.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              Verileri Kimlerle Paylasiyoruz?
            </h2>
            <div className="mt-4 space-y-2.5">
              {sharingParties.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-purple-600" />
            Verilerinizi Nasil Koruyoruz?
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {securityMeasures.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <Clock3 className="w-5 h-5 text-purple-600" />
              Saklama Sureleri
            </h2>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                Hesap bilgileri: hesap aktif oldugu surece veya mevzuat kapsaminda
                gerekli sure boyunca.
              </p>
              <p className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                Siparis ve fatura kayitlari: yasal zorunluluklar dogrultusunda
                ilgili saklama suresi boyunca.
              </p>
              <p className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                Destek ve iletisim kayitlari: hizmet kalitesi ve hukuki gereklilik
                kapsaminda sinirli sureyle.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-600" />
              Veri Sahibi Haklari
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {userRights.map((item) => (
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
            Haklariniz ve Iletisim
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Verilerinize iliskin tum taleplerinizi destek kanalimiz uzerinden
            iletebilirsiniz. Talepleriniz ilgili mevzuat cercevesinde
            degerlendirilir ve size en kisa surede donus yapilir.
          </p>
          <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-4 flex items-center justify-center gap-2 text-slate-700">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <Mail className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold">privacy@alphastore.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicyPage;
