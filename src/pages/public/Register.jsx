import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";

export default function Register() {
  usePageTitle("Register");

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("Find Jobs Data"));

    const exists = data.users.find(
      (u) => u.email === form.email
    );

    if (exists) {
      alert("Email already exists");
      return;
    }

    const initials =
      form.firstName[0].toUpperCase() +
      form.lastName[0].toUpperCase();

    const newUser = {
      userId: "u_" + Date.now(),
      userLogoText: initials,
      userLogoColor: "#2563eb",
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password
    };

    data.users.push(newUser);

    data.others = data.others.map((o) =>
      o.type === "currentUser"
        ? { ...o, data: newUser }
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
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="flex gap-3">
            <input
              placeholder="First Name"
              className="w-1/2 p-3 border rounded-lg"
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
            />

            <input
              placeholder="Last Name"
              className="w-1/2 p-3 border rounded-lg"
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
            />
          </div>

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

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Register
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          Already have account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}