const plans = [
  {
    name: "1 Month Gym",
    price: "₱2,000",
    features: ["Access to all equipment"],
  },
  {
    name: "Student / Senior",
    price: "₱1,500",
    features: ["Access to all equipment"],
  },
  {
    name: "Couple Membership",
    price: "₱3,000",
    features: ["Access to all equipment"],
  },
  {
    name: "3 Months Package",
    price: "₱5,000",
    features: ["Access to all equipment", "Circuit Training included"],
  },
  {
    name: "ALL-IN Monthly PT",
    price: "₱5,000",
    popular: true,
    features: [
      "Access to all equipment",
      "FREE yearly membership (₱350)",
      "15 Personal Training sessions",
    ],
  },
  {
    name: "1 Year Membership",
    price: "₱15,000",
    features: ["Access to all equipment"],
  },
  {
    name: "1-Week Session",
    price: "₱1000",
    features: ["Access to all equipment"],
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-28 px-8 bg-black text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(254,214,54,0.1),transparent_45%)]" />

      {/* Header */}
      <div className="relative max-w-4xl mx-auto text-center mb-20">
        <h3 className="text-4xl md:text-5xl font-extrabold">
          Membership <span className="text-[#fed636]">Pricing</span>
        </h3>
        <p className="mt-4 text-gray-400">
          Mandaue Branch · Flexible plans for every fitness level
        </p>
      </div>

      {/* Cards */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl border p-8 backdrop-blur-md transition-all duration-300
              ${
                plan.popular
                  ? "border-[#fed636]/50 bg-[#fed636]/10 scale-105 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                  : "border-white/10 bg-white/5 hover:-translate-y-2 hover:border-[#fed636]/40"
              }`}
          >
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#fed636] px-4 py-1 text-xs font-bold text-black">
                BEST VALUE
              </span>
            )}

            <h4 className="text-xl font-semibold mb-2 text-[#fed636]">
              {plan.name}
            </h4>

            <p className="text-3xl font-extrabold mb-6">
              {plan.price}
            </p>

            <ul className="mb-8 space-y-3 text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#fed636]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300
                ${
                  plan.popular
                    ? "bg-[#fed636] text-black hover:shadow-[0_0_25px_rgba(254,214,54,0.6)]"
                    : "border border-[#fed636] text-[#fed636] hover:bg-[#fed636] hover:text-black"
                }`}
            >
              Join Now
            </button>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <p className="relative mt-16 text-center text-sm text-gray-500">
        * One-time yearly registration fee of ₱350 unless stated otherwise
      </p>
    </section>
  )
}
