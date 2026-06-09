import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import DashboardSidebar from "../components/layout/DashboardSidebar";

import ScrollToTop from "../utils/ScrollToTop";

import { useAuth } from "../context/AuthContext";

import {
  ChartNoAxesColumn,
  Users,
  Building2,
  BriefcaseBusiness,
  ClipboardList,
  FileText,
  ShieldCheck,
} from "lucide-react";

export default function AdminLayout() {
  const [open, setOpen] = useState(false);

  const { logout } = useAuth();

  const links = [
  {
    path: "/admin",
    label: "Analytics",
    icon: ChartNoAxesColumn,
    end: true,
  },

  {
    path: "/admin/manage-users",
    label: "Manage Users",
    icon: Users,
  },

  {
    path: "/admin/manage-companies",
    label: "Manage Companies",
    icon: Building2,
  },

  {
    path: "/admin/manage-jobs",
    label: "Manage Jobs",
    icon: BriefcaseBusiness,
  },

  {
    path: "/admin/manage-applications",
    label: "Manage Applications",
    icon: ClipboardList,
  },

  {
    path: "/admin/cv-collection",
    label: "CV Collection",
    icon: FileText,
  },
];

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <div className="min-h-screen bg-emerald-50">
        {/* Desktop Sidebar Only */}
        <div className="hidden md:block">
          <DashboardSidebar
            title="Admin Dashboard"
subtitle="Monitor and manage the platform"
headerIcon={
  <ShieldCheck
    size={24}
    className="text-emerald-400"
  />
}
            links={links}
            open={open}
            setOpen={setOpen}
            logout={logout}
            colorClasses={{
  sidebarBg: "bg-slate-900",

  sidebarBorder: "border-slate-800",

  text: "text-emerald-400",

  subtitle: "text-slate-400",

  navText: "text-slate-300",

  active:
    "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20",

  hover:
    "hover:bg-emerald-500/10 hover:text-emerald-300",
}}
          />
        </div>

        {/* Main Content */}
        <main className="pt-24 md:ml-72 min-h-screen">
          <div className="p-4 md:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}