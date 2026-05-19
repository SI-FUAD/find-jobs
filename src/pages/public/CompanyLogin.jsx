import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";

export default function CompanyLogin() {
  usePageTitle("Company Login");

  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("Find Jobs Data"));

    const company = data.companies.find(
      (c) =>
        c.email === form.email &&
        c.password === form.password
    );

    if (!company) {
      alert("Invalid company credentials");
      return;
    }

    data.others = data.others.map((o) =>
      o.type === "currentUser"
        ? { ...o, data: company }
        : o
    );

    localStorage.setItem("Find Jobs Data", JSON.stringify(data));
    window.dispatchEvent(new Event("authChanged"));

    navigate("/company");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4 pt-24">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

        <h2 className="text-3xl font-bold text-center mb-6 text-orange-600">
          Company Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Company Email"
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

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
            Login
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          New company?{" "}
          <Link
            to="/company/register"
            className="text-orange-600 font-semibold"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}