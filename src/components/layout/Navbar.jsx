import { NavLink, useLocation, useNavigate } from "react-router-dom";

import {
  Menu,
  X,
  Home,
  BriefcaseBusiness,
  Building2,
  Info,
  LogIn,
  UserPlus,
  ChevronDown,
  LayoutDashboard,
  User,
  FileText,
  Bookmark,
  LogOut,
  Users,
  ShieldCheck,
  ClipboardList,
  PlusCircle,
  FolderKanban,
  ChartNoAxesColumn,
} from "lucide-react";

import { useEffect, useState } from "react";

import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  const {
    auth,
    authType,
    logout,
    loading,
  } = useAuth();

  useEffect(() => {
    setMobileOpen(false);

    setDropdownOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    await logout();

    navigate("/");
  };

  if (loading) return null;

  const desktopLink = ({ isActive }) =>
    `transition font-medium ${
      isActive
        ? "text-white"
        : "text-slate-300 hover:text-white"
    }`;

  const mobileLink = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
      isActive
        ? "bg-white/10 text-white"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <header
  className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#020617] backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto h-20 px-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src="/logo.png"
            alt="Find Jobs"
            className="w-10 h-10 object-contain"
          />

          <div>
            <h1 className="font-bold text-white text-lg leading-none">
              Find Jobs
            </h1>

            <p className="text-xs text-slate-400">
              Career Platform
            </p>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={desktopLink}>
            Home
          </NavLink>

          <NavLink to="/jobs" className={desktopLink}>
            Jobs
          </NavLink>

          <NavLink to="/companies" className={desktopLink}>
            Companies
          </NavLink>

          <NavLink to="/about" className={desktopLink}>
            About
          </NavLink>
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3 relative">

          {/* Guest */}
          {!auth && (
            <>
              <NavLink
                to="/login"
                className="px-5 py-2 rounded-xl border border-white/15 text-white hover:bg-white/10 transition"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition"
              >
                Register
              </NavLink>

              <NavLink
                to="/company/login"
                className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white transition"
              >
                Hire Talent
              </NavLink>
            </>
          )}

          {/* USER */}
          {auth && authType === "user" && (
            <button
              onClick={() =>
                setDropdownOpen(!dropdownOpen)
              }
              className="flex items-center gap-3"
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-white/10"
                style={{
                  background: `linear-gradient(135deg, ${auth.avatar_color}, #1e293b)`,
                }}
              >
                {auth.avatar_text}
              </div>

              <ChevronDown
                size={18}
                className={`text-white transition ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          )}

          {/* COMPANY */}
          {auth && authType === "company" && (
            <button
              onClick={() =>
                setDropdownOpen(!dropdownOpen)
              }
              className="flex items-center gap-3 px-4 py-2 rounded-2xl text-white shadow-lg"
              style={{
                backgroundColor: auth.logo_color,
              }}
            >
              <BriefcaseBusiness size={18} />

              <div className="text-left">
                <p className="text-xs opacity-80">
                  Company
                </p>

                <p className="font-semibold leading-none">
                  {auth.name}
                </p>
              </div>

              <ChevronDown
                size={18}
                className={`transition ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          )}

          {/* ADMIN */}
          {auth && authType === "admin" && (
            <button
              onClick={() =>
                setDropdownOpen(!dropdownOpen)
              }
              className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-emerald-600 text-white shadow-lg"
            >
              <ShieldCheck size={18} />

              <div className="text-left">
                <p className="text-xs opacity-80">
                  Admin
                </p>

                <p className="font-semibold leading-none">
                  {auth.name}
                </p>
              </div>

              <ChevronDown
                size={18}
                className={`transition ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          )}

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute top-16 right-0 w-72 rounded-3xl border border-white/10 bg-[#0f172a]/95 backdrop-blur-2xl shadow-2xl overflow-hidden p-2">

              {/* USER */}
              {authType === "user" && (
                <>
                  <DropdownItem
                    icon={<LayoutDashboard size={18} />}
                    label="Dashboard"
                    onClick={() => navigate("/user")}
                  />

                  <DropdownItem
                    icon={<User size={18} />}
                    label="Profile"
                    onClick={() => navigate("/user/profile")}
                  />

                  <div className="my-2 border-t border-white/10" />

                  <DropdownItem
                    danger
                    icon={<LogOut size={18} />}
                    label="Logout"
                    onClick={handleLogout}
                  />
                </>
              )}

              {/* COMPANY */}
              {authType === "company" && (
                <>
                  <DropdownItem
                    icon={<LayoutDashboard size={18} />}
                    label="Dashboard"
                    onClick={() => navigate("/company")}
                  />

                  <DropdownItem
                    icon={<PlusCircle size={18} />}
                    label="Add Job Post"
                    onClick={() =>
                      navigate("/company/add-job")
                    }
                  />

                  <div className="my-2 border-t border-white/10" />

                  <DropdownItem
                    danger
                    icon={<LogOut size={18} />}
                    label="Logout"
                    onClick={handleLogout}
                  />
                </>
              )}

              {/* ADMIN */}
              {authType === "admin" && (
                <>
                  <DropdownItem
                    icon={<ChartNoAxesColumn size={18} />}
                    label="Analytics"
                    onClick={() =>
                      navigate("/admin")
                    }
                  />

                  <DropdownItem
  icon={<ClipboardList size={18} />}
  label="Manage Applications"
  onClick={() =>
    navigate("/admin/manage-applications")
  }
/>

                  <div className="my-2 border-t border-white/10" />

                  <DropdownItem
                    danger
                    icon={<LogOut size={18} />}
                    label="Logout"
                    onClick={handleLogout}
                  />
                </>
              )}
            </div>
          )}
        </div>

        {/* MOBILE */}
        <div className="md:hidden">

          {!auth ? (
            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="text-white"
            >
              {mobileOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          ) : (
            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="text-white"
            >
              {authType === "user" && (
  <div className="flex items-center gap-2 max-w-[75vw]">
    <div
      className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-white font-bold"
      style={{
        background: `linear-gradient(135deg, ${auth.avatar_color}, #1e293b)`,
      }}
    >
      {auth.avatar_text}
    </div>

    <ChevronDown
      size={18}
      className={`text-white shrink-0 transition ${
        mobileOpen ? "rotate-180" : ""
      }`}
    />
  </div>
)}

              {authType === "company" && (
  <div
    className="flex items-center gap-2 px-3 py-2 rounded-2xl text-white max-w-[80vw]"
    style={{
      backgroundColor: auth.logo_color,
    }}
  >
    <BriefcaseBusiness
      size={18}
      className="shrink-0"
    />

    <div className="min-w-0 flex-1 text-left">
      <p className="text-xs opacity-80">
        Company
      </p>

      <p className="font-semibold truncate">
        {auth.name}
      </p>
    </div>

    <ChevronDown
      size={18}
      className={`shrink-0 transition ${
        mobileOpen ? "rotate-180" : ""
      }`}
    />
  </div>
)}

              {authType === "admin" && (
  <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-emerald-600 text-white max-w-[80vw]">
    <ShieldCheck
      size={18}
      className="shrink-0"
    />

    <div className="min-w-0 flex-1 text-left">
      <p className="text-xs opacity-80">
        Admin
      </p>

      <p className="font-semibold truncate">
        {auth.name}
      </p>
    </div>

    <ChevronDown
      size={18}
      className={`shrink-0 transition ${
        mobileOpen ? "rotate-180" : ""
      }`}
    />
  </div>
)}
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#020617]/98 backdrop-blur-2xl">

          <div className="p-5 space-y-2">

            <NavLink to="/" className={mobileLink}>
              <Home size={18} />
              Home
            </NavLink>

            <NavLink to="/jobs" className={mobileLink}>
              <BriefcaseBusiness size={18} />
              Jobs
            </NavLink>

            <NavLink to="/companies" className={mobileLink}>
              <Building2 size={18} />
              Companies
            </NavLink>

            <NavLink to="/about" className={mobileLink}>
              <Info size={18} />
              About
            </NavLink>

            <div className="border-t border-white/10 my-3"></div>

            {!auth && (
              <>
                <NavLink
  to="/login"
  className="flex items-center justify-center gap-2 py-3 rounded-2xl border border-white/10 text-white"
>
  <LogIn size={18} />
  Login
</NavLink>

                <NavLink
  to="/register"
  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-blue-600 text-white"
>
  <UserPlus size={18} />
  Register
</NavLink>

                <NavLink
  to="/company/login"
  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-orange-500 text-white"
>
  <BriefcaseBusiness size={18} />
  Hire Talent
</NavLink>
              </>
            )}

            {/* USER MOBILE */}
            {auth && authType === "user" && (
              <>
                <MobileAction
  to="/user"
  label="Dashboard"
  icon={<LayoutDashboard size={18} />}
/>

                <MobileAction
                  to="/user/profile"
                  label="Profile"
                  icon={<User size={18} />}
                />

                <MobileAction
                  to="/user/my-cv"
                  label="My CV"
                  icon={<FileText size={18} />}
                />

                <MobileAction
                  to="/user/saved-jobs"
                  label="Saved Jobs"
                  icon={<Bookmark size={18} />}
                />

                <MobileAction
                  to="/user/applications"
                  label="Applied Jobs"
                  icon={<ClipboardList size={18} />}
                />

                <MobileAction
  to="/user/application-status"
  label="Application Status"
  icon={<ChartNoAxesColumn size={18} />}
/>
              </>
            )}

            {/* COMPANY MOBILE */}
            {auth && authType === "company" && (
              <>
                <MobileAction
                  to="/company"
                  label="Dashboard"
                  icon={<LayoutDashboard size={18} />}
                />

                <MobileAction
                  to="/company/add-job"
                  label="Add Job Post"
                  icon={<PlusCircle size={18} />}
                />

                <MobileAction
                  to="/company/manage-jobs"
                  label="Manage Jobs"
                  icon={<FolderKanban size={18} />}
                />

                <MobileAction
                  to="/company/candidates"
                  label="Candidates"
                  icon={<Users size={18} />}
                />
              </>
            )}

            {/* ADMIN MOBILE */}
            {auth && authType === "admin" && (
              <>
                <MobileAction
                  to="/admin"
                  label="Analytics"
                  icon={<ChartNoAxesColumn size={18} />}
                />

                <MobileAction
                  to="/admin/manage-users"
                  label="Manage Users"
                  icon={<Users size={18} />}
                />

                <MobileAction
                  to="/admin/manage-companies"
                  label="Manage Companies"
                  icon={<Building2 size={18} />}
                />

                <MobileAction
                  to="/admin/manage-jobs"
                  label="Manage Jobs"
                  icon={<BriefcaseBusiness size={18} />}
                />

                <MobileAction
  to="/admin/manage-applications"
  label="Manage Applications"
  icon={<ClipboardList size={18} />}
/>

                <MobileAction
                  to="/admin/cv-collection"
                  label="CV Collection"
                  icon={<FileText size={18} />}
                />
              </>
            )}

            {auth && (
  <div className="border-t border-white/10 my-3" />
)}
            
            {auth && (
              <button
  onClick={handleLogout}
  className="
    w-full
    flex
    items-center
    justify-center
    gap-2
    py-3
    rounded-2xl
    border
    border-red-500/20
    text-red-400
    hover:bg-red-500/10
    transition
  "
>
  <LogOut size={18} />
  Logout
</button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function DropdownItem({
  icon,
  label,
  onClick,
  danger,
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
        danger
          ? "text-red-400 hover:bg-red-500/10"
          : "text-slate-200 hover:bg-white/5"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function MobileAction({
  to,
  label,
  icon,
}) {
  return (
    <NavLink
      to={to}
      className="flex items-center gap-3 py-3 px-4 rounded-2xl bg-white/5 text-white hover:bg-white/10 transition"
    >
      {icon}
      {label}
    </NavLink>
  );
}