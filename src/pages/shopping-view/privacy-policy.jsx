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
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-700 p-6 md:p-10 text-white shadow-xl text-center">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Legal
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/90 max-w-3xl mx-auto leading-relaxed">
            Protecting your personal data is one of our core commitments.
            This policy explains what we collect, why we use it, and how we protect it.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" />
            What Data Do We Collect?
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
              Why Do We Process Data?
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
              Who Do We Share Data With?
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
            How Do We Protect Your Data?
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
              Retention Periods
            </h2>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                Account data: while your account is active or as required by law.
              </p>
              <p className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                Order and invoice records: for legally required retention periods.
              </p>
              <p className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                Support records: for a limited period for service quality and legal compliance.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-600" />
              Data Subject Rights
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
            Your Rights and Contact
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            You can submit all data-related requests via our support channels.
            Requests are reviewed in line with applicable regulations and answered promptly.
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
