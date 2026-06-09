import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import usePageTitle from "../../hooks/usePageTitle";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import endpoints from "../../api/endpoints";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  usePageTitle("Login");

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
      endpoints.userLogin,
      {
        email: form.email,
        password: form.password,
      }
    );

    /*
    |--------------------------------------------------------------------------
    | Store Token
    |--------------------------------------------------------------------------
    */

    await login(response.data.token);

    /*
    |--------------------------------------------------------------------------
    | Redirect By Role
    |--------------------------------------------------------------------------
    */

    if (response.data.auth_type === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
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

      {/* Background Glow */}
      <div className="absolute -top-30 -left-30 w-80 h-80 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-30 -right-30 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 w-full max-w-md">

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">

          {/* Header */}
          <div className="text-center mb-8">

            <div className="w-16 h-16 rounded-2xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mx-auto mb-5">
              <ShieldCheck className="text-blue-400" size={30} />
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Welcome Back
            </h1>

            <p className="text-gray-400 text-sm sm:text-base">
              Login to continue your career journey
            </p>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-blue-500/40 focus:bg-white/10 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      password: e.target.value,
                    })
                  }
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-blue-500/40 focus:bg-white/10 transition"
                />
              </div>
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

            {/* Button */}
            <button
  disabled={loading}
  className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
>
  {loading ? "Logging in..." : "Login"}

  <ArrowRight size={18} />
</button>

          </form>

          {/* Footer */}
          <p className="text-center text-gray-400 text-sm mt-7">
            Don’t have an account?{" "}

            <Link
              to="/register"
              className="text-blue-400 hover:text-blue-300 font-semibold transition"
            >
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}