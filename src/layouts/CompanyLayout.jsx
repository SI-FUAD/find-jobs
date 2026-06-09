import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import DashboardSidebar from "../components/layout/DashboardSidebar";

import ScrollToTop from "../utils/ScrollToTop";

import { useAuth } from "../context/AuthContext";

import {
  LayoutDashboard,
  PlusCircle,
  FolderKanban,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

export default function CompanyLayout() {
  const [open, setOpen] = useState(false);

  const { logout } = useAuth();

  const links = [
  {
    path: "/company",
    label: "Dashboard",
    icon: LayoutDashboard,
    end: true,
  },

  {
    path: "/company/add-job",
    label: "Add Job Post",
    icon: PlusCircle,
  },

  {
    path: "/company/manage-jobs",
    label: "Manage Jobs",
    icon: FolderKanban,
  },

  {
    path: "/company/candidates",
    label: "Candidates",
    icon: Users,
  },
];

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <div className="min-h-screen bg-orange-50">
        {/* Desktop Sidebar Only */}
        <div className="hidden md:block">
          <DashboardSidebar
            title="Company Dashboard"
subtitle="Manage hiring and recruitment"
headerIcon={
  <BriefcaseBusiness
    size={24}
    className="text-orange-400"
  />
}
            links={links}
            open={open}
            setOpen={setOpen}
            logout={logout}
            colorClasses={{
  sidebarBg: "bg-slate-900",

  sidebarBorder: "border-slate-800",

  text: "text-orange-400",

  subtitle: "text-slate-400",

  navText: "text-slate-300",

  active:
    "bg-orange-500 text-white shadow-lg shadow-orange-500/20",

  hover:
    "hover:bg-orange-500/10 hover:text-orange-300",
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