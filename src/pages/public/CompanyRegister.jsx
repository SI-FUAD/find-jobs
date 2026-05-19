import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";

export default function CompanyRegister() {
  usePageTitle("Company Register");

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("Find Jobs Data"));

    const exists = data.companies.find(
      (c) => c.email === form.email
    );

    if (exists) {
      alert("Company already exists");
      return;
    }

    const newCompany = {
      companyId: "c_" + Date.now(),
      brandName: form.name,
      brandColor: "#ea580c",
      email: form.email,
      phone: form.phone,
      address: form.address,
      password: form.password
    };

    data.companies.push(newCompany);

    data.others = data.others.map((o) =>
      o.type === "currentUser"
        ? { ...o, data: newCompany }
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
          Company Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            placeholder="Company Name"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Company Email"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            placeholder="Phone"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <textarea
            placeholder="Address"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, address: e.target.value })
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
            Create Company
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          Already have account?{" "}
          <Link
            to="/company/login"
            className="text-orange-600 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}