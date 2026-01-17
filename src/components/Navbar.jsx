export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-[#fed636] drop-shadow-[0_0_10px_rgba(254,214,54,0.6)]">
          Conquer Fitness & Gym
        </h1>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">
          {["Home", "Programs", "Membership", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="transition-colors duration-300 group-hover:text-red-500">
                {item}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#pricing"
          className="hidden md:inline-flex items-center rounded-full border border-red-500 px-5 py-2 text-sm font-semibold text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-[0_0_18px_rgba(239,68,68,0.6)]"
        >
          Join Now
        </a>
      </div>
    </nav>
  )
}
