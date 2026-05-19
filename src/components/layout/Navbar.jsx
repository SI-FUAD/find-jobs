import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400"
      : "text-gray-300 hover:text-white transition";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3 select-none"
        >
          <img
            src="/logo.png"
            alt="Find Jobs"
            className="w-10 h-10 object-contain"
          />

          <div>
            <h1 className="text-white font-bold text-xl leading-none">
              Find Jobs
            </h1>

            <p className="text-xs text-gray-400">
              Career Platform
            </p>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/jobs" className={navLinkClass}>
            Jobs
          </NavLink>

          <NavLink to="/companies" className={navLinkClass}>
            Companies
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">

          <NavLink
            to="/login"
            className="px-5 py-2 rounded-xl border border-white/15 text-white hover:bg-white/10 transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition shadow-lg shadow-blue-500/20"
          >
            Register
          </NavLink>

          <NavLink
            to="/company/login"
            className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white transition"
          >
            Hire Talent
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-4">

            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/jobs"
              onClick={() => setMobileOpen(false)}
              className={navLinkClass}
            >
              Jobs
            </NavLink>

            <NavLink
              to="/companies"
              onClick={() => setMobileOpen(false)}
              className={navLinkClass}
            >
              Companies
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMobileOpen(false)}
              className={navLinkClass}
            >
              About
            </NavLink>

            <div className="border-t border-white/10 pt-5 flex flex-col gap-3">

              <NavLink
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 rounded-xl border border-white/15 text-white"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 rounded-xl bg-blue-600 text-white"
              >
                Register
              </NavLink>

              <NavLink
                to="/company/login"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 rounded-xl bg-orange-500 text-white"
              >
                Hire Talent
              </NavLink>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}