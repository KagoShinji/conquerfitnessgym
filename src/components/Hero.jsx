export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-neutral-900 to-black px-8"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(254,214,54,0.15),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-white">
            Build Your Body.
            <span className="block text-yellow-500">Transform Your Life.</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl text-lg">
            A premium fitness facility built for discipline, strength, and real transformation.
            Train with purpose. Conquer your limits.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-yellow-600"
            >
              Join Now
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-yellow-500 hover:text-yellow-500"
            >
              View Programs
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:flex justify-center">
          <img
            src="/images/conquerlogo.jpg"
            alt="Conquer Fitness Gym"
            className="max-w-md rounded-2xl shadow-2xl ring-1 ring-white/10 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  )
}
