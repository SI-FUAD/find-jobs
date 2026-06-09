import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Lock,
  ArrowRight,
} from "lucide-react";

import usePageTitle from "../../hooks/usePageTitle";

export default function CompanyRegister() {
  usePageTitle("Company Register");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  return (
    <div className="min-h-screen bg-[#050816] relative overflow-hidden flex items-center justify-center px-4 py-28">

      <div className="absolute -top-30 -left-30 w-80 h-80 bg-orange-500/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-30 -right-30 w-80 h-80 bg-orange-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 w-full max-w-lg">

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">

          <div className="text-center mb-8">

            <div className="w-16 h-16 rounded-2xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center mx-auto mb-5">
              <Building2 className="text-orange-400" size={30} />
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Register Company
            </h1>

            <p className="text-gray-400 text-sm sm:text-base">
              Create your company hiring account
            </p>

          </div>

          <form className="space-y-5">

            <div className="relative">
              <Building2
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                placeholder="Company Name"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-orange-500/40 focus:bg-white/10 transition"
              />
            </div>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="email"
                placeholder="Company Email"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-orange-500/40 focus:bg-white/10 transition"
              />
            </div>

            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                placeholder="Phone Number"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-orange-500/40 focus:bg-white/10 transition"
              />
            </div>

            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-4 top-5 text-gray-500"
              />

              <textarea
                rows="4"
                placeholder="Company Address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder:text-gray-500 outline-none resize-none focus:border-orange-500/40 focus:bg-white/10 transition"
              ></textarea>
            </div>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-orange-500/40 focus:bg-white/10 transition"
              />
            </div>

            <button className="w-full h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20">
              Create Company
              <ArrowRight size={18} />
            </button>

          </form>

          <p className="text-center text-gray-400 text-sm mt-7">
            Already have an account?{" "}

            <Link
              to="/company/login"
              className="text-orange-400 hover:text-orange-300 font-semibold transition"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}