import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0917] text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo / Brand */}
        <div className="text-lg md:text-2xl font-bold">Fahmida K M | Portfolio</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base">
          <a href="#about" className="hover:text-pink-400 transition duration-200">About</a>
          <a href="#projects" className="hover:text-pink-400 transition duration-200">Projects</a>
          <a href="#experience" className="hover:text-pink-400 transition duration-200">Work</a>
          <a href="#contact" className="hover:text-pink-400 transition duration-200">Contact</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden bg-[#0b0917] text-white transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <a href="#about" onClick={() => setIsOpen(false)} className="block px-6 py-3 border-b border-gray-700 hover:bg-[#1c1a2e]">About</a>
        <a href="#projects" onClick={() => setIsOpen(false)} className="block px-6 py-3 border-b border-gray-700 hover:bg-[#1c1a2e]">Projects</a>
        <a href="#experience" onClick={() => setIsOpen(false)} className="block px-6 py-3 border-b border-gray-700 hover:bg-[#1c1a2e]">Work</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-[#1c1a2e]">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
