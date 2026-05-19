import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";

export default function Login() {
  usePageTitle("Login");

  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("Find Jobs Data"));

    const user = data.users.find(
      (u) =>
        u.email === form.email &&
        u.password === form.password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    data.others = data.others.map((o) =>
      o.type === "currentUser"
        ? { ...o, data: user }
        : o
    );

    localStorage.setItem("Find Jobs Data", JSON.stringify(data));
    window.dispatchEvent(new Event("authChanged"));

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-24">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}