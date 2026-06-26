import { useQuery } from "@tanstack/react-query";

import queryKeys from "../../api/queryKeys";

import api from "../../api/axios";
import endpoints from "../../api/endpoints";

import StatCard from "../../components/common/StatCard";
import PageHeader from "../../components/common/PageHeader";

export default function UserDashboard() {
const { data, isLoading } = useQuery({
  queryKey: queryKeys.userDashboard,

  queryFn: async () => {
    const response = await api.get(
      endpoints.userDashboard
    );

    return response.data;
  },
});

  if (isLoading) {
    return (
      <div className="text-slate-600">
        Loading...
      </div>
    );
  }

  const {
    user,
    stats
  } = data;

  const savedJobs = stats.saved_jobs;

  return (
    <div className="space-y-8 md:space-y-10">

      {/* HEADER */}
      <PageHeader
  title="Dashboard Overview"
  subtitle="Track your applications and job activity in one place"
  color="blue"
/>

<div className="flex items-center gap-4 mt-6">
  <div className="text-4xl">👋</div>

  <div>
    <h2 className="text-2xl font-bold text-slate-800">
      Hello, {user.name}
    </h2>

    <p className="text-slate-500 text-sm">
      Welcome back to your job dashboard
    </p>
  </div>
</div>

      {/* BASIC INFO + PROFILE COMPLETION */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 md:mb-6">
          Basic Information
        </h2>

        <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-8 shadow-sm grid md:grid-cols-2 gap-8">

          {/* LEFT INFO */}
          <div className="space-y-3 text-slate-700">
            <p><span className="font-semibold">User ID:</span> {user.user_id}</p>
            <p><span className="font-semibold">Full Name:</span> {user.name}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Phone:</span> {user.phone || "-"}</p>
            <p><span className="font-semibold">Address:</span> {user.current_address || "-"}</p>
          </div>

          {/* RIGHT: PROFILE CIRCLE */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-semibold text-blue-700 mb-3">
              Profile Completion
            </p>

            <div className="relative w-28 h-28 md:w-32 md:h-32">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="4"
                />

                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="100"
                  strokeDashoffset={100 - (user.profile_completion || 0)}
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center text-blue-600 font-bold text-lg">
                {user.profile_completion || 0}%
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SAVED JOBS */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 md:mb-6">
          Saved Jobs
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-3xl">
          <StatCard
            title="Total Saved Jobs"
            value={savedJobs}
            color="blue"
          />
        </div>
      </section>

      {/* APPLICATION STATS */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 md:mb-6">
          Application Status
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">

          <StatCard title="Total Applications" value={stats.total} color="blue" />
          <StatCard title="Applied" value={stats.applied} color="yellow" />
          <StatCard title="Shortlisted" value={stats.shortlisted} color="orange" />
          <StatCard title="Accepted" value={stats.accepted} color="green" />
          <StatCard title="Rejected" value={stats.rejected} color="red" />

        </div>
      </section>

    </div>
  );
}