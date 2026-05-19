import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-400">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Find Jobs"
                className="w-10 h-10"
              />

              <div>
                <h2 className="text-white text-xl font-bold">
                  Find Jobs
                </h2>

                <p className="text-sm text-gray-500">
                  Career Platform
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-sm">
              Discover career opportunities, connect with top companies,
              and build your professional future with confidence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <Link to="/" className="hover:text-white transition">
                Home
              </Link>

              <Link to="/jobs" className="hover:text-white transition">
                Jobs
              </Link>

              <Link to="/companies" className="hover:text-white transition">
                Companies
              </Link>

              <Link to="/about" className="hover:text-white transition">
                About
              </Link>

            </div>
          </div>

          {/* User */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              User
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <Link to="/login" className="hover:text-white transition">
                Login
              </Link>

              <Link to="/register" className="hover:text-white transition">
                Register
              </Link>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <Link
                to="/company/login"
                className="hover:text-white transition"
              >
                Company Login
              </Link>

              <Link
                to="/company/register"
                className="hover:text-white transition"
              >
                Company Register
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm">

          <p>
            © {new Date().getFullYear()} Find Jobs. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <button className="hover:text-white transition">
              Privacy Policy
            </button>

            <button className="hover:text-white transition">
              Terms of Service
            </button>

          </div>
        </div>

      </div>
    </footer>
  );
}