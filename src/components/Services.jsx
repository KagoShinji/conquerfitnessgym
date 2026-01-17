const services = [
  {
    title: "Strength Training",
    description: "Build muscle and tone your body with guided weight training.",
  },
  {
    title: "Cardio Programs",
    description: "Boost endurance and burn calories with high-energy workouts.",
  },
  {
    title: "Personal Coaching",
    description: "Get one-on-one coaching from professional trainers.",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 px-8 bg-black text-white"
    >
      {/* Different Background Feel */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-neutral-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(254,214,54,0.1),transparent_45%)]" />

      {/* Header */}
      <div className="relative max-w-6xl mx-auto mb-20">
        <h3 className="text-4xl md:text-5xl font-extrabold">
          Training <span className="text-[#fed636]">Programs</span>
        </h3>
        <p className="mt-4 max-w-xl text-gray-400">
          Precision-built programs focused on performance, endurance, and long-term results.
        </p>
      </div>

      {/* Cards */}
      <div className="relative grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#fed636]/40"
          >
            {/* Accent Line */}
            <span className="absolute top-0 left-0 h-1 w-0 bg-[#fed636] rounded-t-2xl transition-all duration-300 group-hover:w-full" />

            <h4 className="text-xl font-semibold mb-4 text-[#fed636]">
              {service.title}
            </h4>
            <p className="text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
