import { Routes, Route } from "react-router-dom";

/* Layouts */
import PublicLayout from "../layouts/PublicLayout";
import UserLayout from "../layouts/UserLayout";
import CompanyLayout from "../layouts/CompanyLayout";
import AdminLayout from "../layouts/AdminLayout";

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

/* User Pages */
import UserDashboard from "../pages/user/UserDashboard";
import UserProfile from "../pages/user/UserProfile";
import UserMyCv from "../pages/user/UserMyCv";
import UserSavedJobs from "../pages/user/UserSavedJobs";
import UserApplications from "../pages/user/UserApplications";
import UserApplicationStatus from "../pages/user/UserApplicationStatus";

/* Company Pages */
import CompanyDashboard from "../pages/company/CompanyDashboard";
import CompanyAddJob from "../pages/company/CompanyAddJob";
import CompanyManageJobs from "../pages/company/CompanyManageJobs";
import CompanyCandidates from "../pages/company/CompanyCandidates";

/* Admin Pages */
import AdminAnalytics from "../pages/admin/AdminAnalytics";
import AdminManageUsers from "../pages/admin/AdminManageUsers";
import AdminManageCompanies from "../pages/admin/AdminManageCompanies";
import AdminManageJobs from "../pages/admin/AdminManageJobs";
import AdminManageApplications from "../pages/admin/AdminManageApplications";
import AdminCvCollection from "../pages/admin/AdminCvCollection";

export default function Router() {
  return (
    <Routes>

      {/* PUBLIC */}
      <Route element={<PublicLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route path="/companies" element={<Companies />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/company/login"
          element={<CompanyLogin />}
        />

        <Route
          path="/company/register"
          element={<CompanyRegister />}
        />

      </Route>

      {/* USER */}
      <Route
        path="/user"
        element={<UserLayout />}
      >
        <Route
          index
          element={<UserDashboard />}
        />

        <Route
          path="profile"
          element={<UserProfile />}
        />

        <Route
          path="my-cv"
          element={<UserMyCv />}
        />

        <Route
          path="saved-jobs"
          element={<UserSavedJobs />}
        />

        <Route
          path="applications"
          element={<UserApplications />}
        />

        <Route
          path="application-status"
          element={<UserApplicationStatus />}
        />
      </Route>

      {/* COMPANY */}
      <Route
        path="/company"
        element={<CompanyLayout />}
      >
        <Route
          index
          element={<CompanyDashboard />}
        />

        <Route
          path="add-job"
          element={<CompanyAddJob />}
        />

        <Route
          path="manage-jobs"
          element={<CompanyManageJobs />}
        />

        <Route
          path="candidates"
          element={<CompanyCandidates />}
        />
      </Route>

      {/* ADMIN */}
      <Route
        path="/admin"
        element={<AdminLayout />}
      >
        <Route
          index
          element={<AdminAnalytics />}
        />

        <Route
          path="manage-users"
          element={<AdminManageUsers />}
        />

        <Route
          path="manage-companies"
          element={<AdminManageCompanies />}
        />

        <Route
          path="manage-jobs"
          element={<AdminManageJobs />}
        />

        <Route
          path="manage-applications"
          element={<AdminManageApplications />}
        />

        <Route
          path="cv-collection"
          element={<AdminCvCollection />}
        />
      </Route>

    </Routes>
  );
}