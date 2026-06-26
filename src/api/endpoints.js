const endpoints = {
  /* Public */
  home: "/",

  /* User Auth */
  userLogin: "/auth/login",
  userRegister: "/auth/register",

  /* Company Auth */
  companyLogin: "/company/auth/login",
  companyRegister: "/company/auth/register",

  /* Logout */
  logout: "/auth/logout",

  /* User */
  userDashboard: "/user/dashboard",
  userProfile: "/user/profile",
  userMyCV: "/user/my-cv",
  userSavedJobs: "/user/saved-jobs",
  userApplications: "/user/applications",
  userApplicationStatus:
    "/user/application-status",

  /* Company */
  companyDashboard: "/company/dashboard",
  companyCreateJob: "/company/jobs",
  companyCandidates: "/company/candidates",

  /* Company Jobs */
  companyJobs: "/company/jobs",

  /* Admin */
  adminAnalytics: "/admin/analytics",
  adminUsers: "/admin/manage-users",
  adminCompanies: "/admin/manage-companies",
  adminJobs: "/admin/manage-jobs",
  adminApplications:
    "/admin/manage-applications",
  adminCVCollection:
    "/admin/cv-collection",
};

export default endpoints;