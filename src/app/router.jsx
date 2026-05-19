import { Routes, Route } from "react-router-dom";

/* Layouts */
import PublicLayout from "../layouts/PublicLayout";

/* Public Pages */
import Home from "../pages/public/Home";
import Jobs from "../pages/public/Jobs";
import Companies from "../pages/public/Companies";
import About from "../pages/public/About";

/* Auth Pages */
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import CompanyLogin from "../pages/public/CompanyLogin";
import CompanyRegister from "../pages/public/CompanyRegister";

export default function Router() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/company/login" element={<CompanyLogin />} />
        <Route path="/company/register" element={<CompanyRegister />} />
      </Route>
    </Routes>
  );
}