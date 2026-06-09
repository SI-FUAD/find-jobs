import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import DashboardSidebar from "../components/layout/DashboardSidebar";

import ScrollToTop from "../utils/ScrollToTop";

import { useAuth } from "../context/AuthContext";

import {
  LayoutDashboard,
  User,
  Bookmark,
  FileText,
  ClipboardList,
  ChartNoAxesColumn,
} from "lucide-react";

export default function UserLayout() {
  const [open, setOpen] = useState(false);

  const { logout } = useAuth();

  const links = [
  {
    path: "/user",
    label: "Dashboard",
    icon: LayoutDashboard,
    end: true,
  },

  {
    path: "/user/profile",
    label: "Profile",
    icon: User,
  },

  {
    path: "/user/my-cv",
    label: "My CV",
    icon: FileText,
  },

  {
    path: "/user/saved-jobs",
    label: "Saved Jobs",
    icon: Bookmark,
  },

  {
    path: "/user/applications",
    label: "Applied Jobs",
    icon: ClipboardList,
  },

  {
    path: "/user/application-status",
    label: "Application Status",
    icon: ChartNoAxesColumn,
  },
];

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <div className="min-h-screen bg-slate-50">
        {/* Desktop Sidebar Only */}
        <div className="hidden md:block">
          <DashboardSidebar
  title="User Dashboard"
  subtitle="Manage your career journey"
  headerIcon={
    <User
      size={24}
      className="text-blue-400"
    />
  }
            links={links}
            open={open}
            setOpen={setOpen}
            logout={logout}
            colorClasses={{
  sidebarBg: "bg-slate-900",

  sidebarBorder: "border-slate-800",

  text: "text-blue-400",

  subtitle: "text-slate-400",

  navText: "text-slate-300",

  active:
    "bg-blue-500 text-white shadow-lg shadow-blue-500/20",

  hover:
    "hover:bg-blue-500/10 hover:text-blue-300",
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