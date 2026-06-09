import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Mail,
  Lock,
  ArrowRight,
  Building2,
} from "lucide-react";

import usePageTitle from "../../hooks/usePageTitle";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import endpoints from "../../api/endpoints";
import { useAuth } from "../../context/AuthContext";

export default function CompanyLogin() {
  usePageTitle("Company Login");

  const navigate = useNavigate();

const { login } = useAuth();

const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);
    setError("");

    const response = await axios.post(
      endpoints.companyLogin,
      {
        email: form.email,
        password: form.password,
      }
    );

    await login(response.data.token);

    navigate("/");
  } catch (err) {
    if (err.response?.status === 401) {
  setError("Incorrect email or password.");
} else if (err.response?.status === 422) {
  setError("Please fill all required fields correctly.");
} else {
  setError("Server error. Please try again.");
}
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[#050816] relative overflow-hidden flex items-center justify-center px-4 py-28">

      <div className="absolute -top-30 -left-30 w-80 h-80 bg-orange-500/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-30 -right-30 w-80 h-80 bg-orange-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 w-full max-w-md">

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">

          <div className="text-center mb-8">

            <div className="w-16 h-16 rounded-2xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center mx-auto mb-5">
              <Building2 className="text-orange-400" size={30} />
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Company Login
            </h1>

            <p className="text-gray-400 text-sm sm:text-base">
              Access your hiring dashboard
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
              value={form.email}
onChange={(e) =>
  setForm({
    ...form,
    email: e.target.value,
  })
}
                type="email"
                placeholder="Company Email"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-orange-500/40 focus:bg-white/10 transition"
              />
            </div>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
              value={form.password}
onChange={(e) =>
  setForm({
    ...form,
    password: e.target.value,
  })
}
                type="password"
                placeholder="Password"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-orange-500/40 focus:bg-white/10 transition"
              />
            </div>

            {error && (
  <div className="text-red-400 text-sm">
    {error}
  </div>
)}

{loading && (
  <p className="text-sm text-gray-400">
    Please wait...
  </p>
)}

            <button
  disabled={loading}
  className="w-full h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold transition flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
>
  {loading ? "Logging in..." : "Login"}

  <ArrowRight size={18} />
</button>

          </form>

          <p className="text-center text-gray-400 text-sm mt-7">
            New company?{" "}

            <Link
              to="/company/register"
              className="text-orange-400 hover:text-orange-300 font-semibold transition"
            >
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}