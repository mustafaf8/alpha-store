import { ShieldCheck, Truck, Sparkles, Users, Target, Heart } from "lucide-react";

function AboutUsPage() {
  const highlights = [
    {
      title: "Carefully Curated Products",
      description:
        "We combine trusted brands, quality standards, and fair pricing in one place.",
    },
    {
      title: "Customer-First Service",
      description:
        "Our support team focuses on fast responses, clear communication, and practical solutions.",
    },
    {
      title: "Reliable Operations",
      description:
        "From inventory to delivery, we optimize each step for a consistent shopping experience.",
    },
  ];

  const values = [
    "Transparent policies and trust-driven decisions",
    "Continuous product and experience improvement",
    "Fast, secure, and seamless shopping",
    "Long-term customer satisfaction",
  ];

  const stats = [
    { label: "Active Products", value: "10K+" },
    { label: "Happy Customers", value: "250K+" },
    { label: "Brand Partners", value: "120+" },
    { label: "Avg Delivery Time", value: "1-3 Days" },
  ];

  return (
    <section className="shop-container py-8 md:py-14">
      <div className="mx-auto max-w-6xl space-y-6 md:space-y-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-700 p-6 md:p-10 shadow-xl text-center text-white relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_48%)]" />
          <div className="relative">
            <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Who We Are
            </p>
            <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight">
              A Better Way to Shop
            </h1>
            <p className="mt-4 text-sm md:text-base text-white/90 leading-relaxed max-w-3xl mx-auto">
              Circle Store delivers a modern e-commerce experience built on
              quality, speed, and trust. Our goal is to help you find the
              right product quickly and receive it with confidence.
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
          <p className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Who We Are
          </p>
          <h2 className="mt-3 text-2xl md:text-4xl font-black text-slate-900 leading-tight">
            About Circle Store
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Circle Store is a modern e-commerce platform designed to bring
            quality products, competitive pricing, and a smooth shopping
            journey together in one place.
          </p>
          <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We continuously improve catalog quality, operational reliability,
            and support services so customers can reach the right products
            faster and with less friction.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-slate-700">Secure Payment</span>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-center gap-2">
              <Truck className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-slate-700">Fast Delivery</span>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-slate-700">Selected Brands</span>
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
              What We Prioritize
            </h2>
            <div className="mt-4 space-y-2">
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-600" />
                Customer-focused support
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-600" />
                Consistent operational quality
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 flex items-center gap-2">
                <Heart className="w-4 h-4 text-purple-600" />
                Long-term satisfaction
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm text-center">
            <h2 className="text-lg md:text-xl font-black text-slate-900">
              Our Core Values
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
            Growing Together
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We treat every piece of feedback as an opportunity to improve.
            Our team keeps refining the Circle Store experience month by month.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUsPage;
