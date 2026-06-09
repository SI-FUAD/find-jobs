import { useState } from "react";
import { Link } from "react-router-dom";

import {
  User,
  Mail,
  Lock,
  ArrowRight,
  UserPlus,
} from "lucide-react";

import usePageTitle from "../../hooks/usePageTitle";

export default function Register() {
  usePageTitle("Register");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen bg-[#050816] relative overflow-hidden flex items-center justify-center px-4 py-28">

      <div className="absolute -top-30 -left-30 w-80 h-80 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-30 -right-30 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 w-full max-w-md">

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">

          <div className="text-center mb-8">

            <div className="w-16 h-16 rounded-2xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mx-auto mb-5">
              <UserPlus className="text-blue-400" size={30} />
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Create Account
            </h1>

            <p className="text-gray-400 text-sm sm:text-base">
              Join Find Jobs and discover new opportunities
            </p>

          </div>

          <form className="space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  placeholder="First Name"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-blue-500/40 focus:bg-white/10 transition"
                />
              </div>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  placeholder="Last Name"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-blue-500/40 focus:bg-white/10 transition"
                />
              </div>

            </div>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-blue-500/40 focus:bg-white/10 transition"
              />
            </div>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-blue-500/40 focus:bg-white/10 transition"
              />
            </div>

            <button className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
              Create Account
              <ArrowRight size={18} />
            </button>

          </form>

          <p className="text-center text-gray-400 text-sm mt-7">
            Already have an account?{" "}

            <Link
              to="/login"
              className="text-blue-400 hover:text-blue-300 font-semibold transition"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}