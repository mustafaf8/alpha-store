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
      title: "Identity and Contact Information",
      items: ["Full name", "Email address", "Phone number", "Account details"],
    },
    {
      title: "Address and Delivery Information",
      items: [
        "Delivery address",
        "Billing details",
        "City/District/Postal code",
        "Order delivery notes",
      ],
    },
    {
      title: "Order and Transaction Information",
      items: [
        "Order history",
        "Return and exchange records",
        "Invoice details",
        "Customer service requests",
      ],
    },
    {
      title: "Usage and Technical Data",
      items: [
        "IP and device information",
        "Browser and session data",
        "Page usage behavior",
        "Cookie preferences",
      ],
    },
  ];

  const processingPurposes = [
    "Processing, confirming, and delivering orders",
    "Managing customer requests and support processes",
    "Payment security, fraud prevention, and risk control",
    "Improving platform performance and service quality",
    "Complying with legal and regulatory obligations",
  ];

  const sharingParties = [
    {
      title: "Logistics and Shipping Partners",
      description:
        "Name, phone, and address details required to fulfill delivery operations.",
    },
    {
      title: "Payment and Financial Institutions",
      description:
        "Financial transaction data required for payment validation and security.",
    },
    {
      title: "Technical Service Providers",
      description:
        "Limited technical data access for infrastructure, analytics, notifications, and security.",
    },
    {
      title: "Authorized Public Authorities",
      description:
        "Data sharing under legal obligations or official requests when required by law.",
    },
  ];

  const securityMeasures = [
    "Encryption, access control, and system firewalls",
    "Role-based access and auditable control mechanisms",
    "Regular security scans and incident response procedures",
    "Backups, integrity checks, and operational audits",
  ];

  const userRights = [
    "Request information about what data is processed",
    "Request correction of inaccurate or incomplete data",
    "Request deletion of data under applicable conditions",
    "Object to specific processing activities",
    "Submit a complaint to authorized supervisory bodies",
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
            Privacy Policy
          </h1>
          <p className="relative mt-4 text-sm md:text-base text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
            Protecting your personal data is one of our core commitments.
            This policy explains what we collect, why we use it, and how we protect it.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            What Data Do We Collect?
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {collectedData.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-500 font-medium">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              Why Do We Process Data?
            </h2>
            <ul className="mt-6 space-y-2.5">
              {processingPurposes.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 uppercase tracking-tight hover:border-primary/30 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              Who Do We Share Data With?
            </h2>
            <div className="mt-6 space-y-3">
              {sharingParties.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-4 hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm font-black text-slate-900 uppercase tracking-tight">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs text-slate-500 font-medium leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-primary" />
            </div>
            How Do We Protect Your Data?
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            {securityMeasures.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 uppercase tracking-tight hover:border-primary/30 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock3 className="w-5 h-5 text-primary" />
              </div>
              Retention Periods
            </h2>
            <div className="mt-6 space-y-3">
              <p className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm font-black text-slate-700 uppercase tracking-tight">
                Account data: while your account is active or as required by law.
              </p>
              <p className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm font-black text-slate-700 uppercase tracking-tight">
                Order and invoice records: for legally required retention periods.
              </p>
              <p className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm font-black text-slate-700 uppercase tracking-tight">
                Support records: for a limited period for service quality and legal compliance.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              Data Subject Rights
            </h2>
            <ul className="mt-6 space-y-2.5">
              {userRights.map((item) => (
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
            Your Rights and Contact
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
            You can submit all data-related requests via our support channels.
            Requests are reviewed in line with applicable regulations and answered promptly.
          </p>
          <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-700">
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
            </div>
            <span className="text-lg font-black text-primary uppercase tracking-tight">privacy@alphastore.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicyPage;
