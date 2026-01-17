export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 py-12 px-8">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-900 to-black opacity-50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm md:text-base mb-4 md:mb-0">
          © 2026 Conquer Fitness & Gym. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-[#fed636] transition-colors duration-300"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#fed636] transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#fed636] transition-colors duration-300"
          >
            Twitter
          </a>
        </div>
      </div>

      {/* Optional small footer note */}
      <p className="relative mt-8 text-center text-sm text-gray-500">
        Designed with passion to help you conquer your fitness goals.
      </p>
    </footer>
  )
}
