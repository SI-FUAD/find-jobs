import { useQuery } from "@tanstack/react-query";

import queryKeys from "../../api/queryKeys";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import api from "../../api/axios";
import endpoints from "../../api/endpoints";

import PageHeader from "../../components/common/PageHeader";
import StatCard from "../../components/common/StatCard";

export default function AdminAnalytics() {
  const { data, isLoading } = useQuery({
  queryKey: queryKeys.adminAnalytics,

  queryFn: async () => {
    const response = await api.get(
      endpoints.adminAnalytics
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

  const COLORS = [
    "#3B82F6",
    "#F59E0B",
    "#22C55E",
    "#EF4444",
  ];

  return (
    <div className="space-y-8 md:space-y-10">

      {/* Hero */}

      <PageHeader
  title="Admin Analytics"
  subtitle="Platform overview and performance metrics"
  color="green"
/>

      {/* User Insights */}

      <section>
        <h2
          className="
            text-xl
            md:text-2xl
            font-bold
            text-emerald-700
            mb-4 md:mb-6
          "
        >
          User Insights
        </h2>

        <div className="grid grid-cols-2 xl:grid-cols-5 gap-4 md:gap-6">
          <StatCard
            title="Total Users"
            value={data.userInsights.totalUsers}
            color="green"
          />

          <StatCard
            title="Users Who Applied"
            value={data.userInsights.uniqueAppliedUsers}
            color="blue"
          />

          <StatCard
            title="Avg Profile Completion"
            value={`${data.userInsights.avgProfileCompletion}%`}
            color="yellow"
          />

          <StatCard
            title="Completed Profiles (100%)"
            value={data.userInsights.completedProfiles}
            color="green"
          />

          <StatCard
            title="Uncompleted Profiles"
            value={data.userInsights.uncompletedProfiles}
            color="red"
          />
        </div>
      </section>

      {/* Company Insights */}

      <section>
        <h2
          className="
            text-xl
            md:text-2xl
            font-bold
            text-emerald-700
            mb-4 md:mb-6
          "
        >
          Company Insights
        </h2>

        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-3xl">
          <StatCard
            title="Total Companies"
            value={data.companyInsights.totalCompanies}
            color="green"
          />

          <StatCard
            title="Avg Jobs per Company"
            value={data.companyInsights.avgJobsPerCompany}
            color="blue"
          />
        </div>
      </section>

      {/* Job Insights */}

      <section>
        <h2
          className="
            text-xl
            md:text-2xl
            font-bold
            text-emerald-700
            mb-4 md:mb-6
          "
        >
          Job Insights
        </h2>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          <StatCard
            title="Total Jobs"
            value={data.jobInsights.totalJobs}
            color="green"
          />

          <StatCard
            title="Active Jobs"
            value={data.jobInsights.activeJobs}
            color="blue"
          />

          <StatCard
            title="Expired Jobs"
            value={data.jobInsights.expiredJobs}
            color="red"
          />

          <StatCard
            title="Avg Applications per Job"
            value={data.jobInsights.avgApplicationsPerJob}
            color="yellow"
          />
        </div>
      </section>

      {/* Application Insights */}

      <section>
        <h2
          className="
            text-xl
            md:text-2xl
            font-bold
            text-emerald-700
            mb-4 md:mb-6
          "
        >
          Application Insights
        </h2>

        <div className="grid grid-cols-2 xl:grid-cols-5 gap-4 md:gap-6">
          <StatCard
            title="Total Applications"
            value={data.applicationInsights.totalApplications}
            color="green"
          />

          <StatCard
            title="Applied"
            value={data.applicationInsights.applied}
            color="blue"
          />

          <StatCard
            title="Shortlisted"
            value={data.applicationInsights.shortlisted}
            color="yellow"
          />

          <StatCard
            title="Accepted"
            value={data.applicationInsights.accepted}
            color="green"
          />

          <StatCard
            title="Rejected"
            value={data.applicationInsights.rejected}
            color="red"
          />

          <StatCard
            title="Pending"
            value={data.applicationInsights.pending}
            color="yellow"
          />

          <StatCard
            title="Completed Applications"
            value={
              data.applicationInsights
                .completedApplications
            }
            color="green"
          />

          <StatCard
            title="Acceptance Rate"
            value={`${data.applicationInsights.acceptanceRate}%`}
            color="green"
          />

          <StatCard
            title="Rejection Rate"
            value={`${data.applicationInsights.rejectionRate}%`}
            color="red"
          />

          <StatCard
            title="Applications Updated"
            value={
              data.applicationInsights
                .updatedApplications
            }
            color="blue"
          />
        </div>
      </section>

      {/* Chart */}

      <section>
        <h2
          className="
            text-xl
            md:text-2xl
            font-bold
            text-emerald-700
            mb-4 md:mb-6
          "
        >
          Application Status Distribution
        </h2>

        <div
          className="
            bg-white
            rounded-3xl
            border
            border-slate-200
            p-4 md:p-8
            shadow-sm
          "
        >
          <ResponsiveContainer
            width="100%"
            height={280}
          >
            <PieChart>
              <Pie
                data={data.pieChartData}
                dataKey="value"
                outerRadius={90}
                label
              >
                {data.pieChartData.map(
                  (_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  )
                )}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

    </div>
  );
}