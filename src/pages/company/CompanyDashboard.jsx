import { useQuery } from "@tanstack/react-query";

import queryKeys from "../../api/queryKeys";

import companyService from "../../services/companyService";

import PageHeader from "../../components/common/PageHeader";
import StatCard from "../../components/common/StatCard";

export default function CompanyDashboard() {
  const {
  data,
  isLoading,
  isError,
  error,
} = useQuery({
  queryKey: queryKeys.companyDashboard,

  queryFn: companyService.getDashboard,
});

  if (isLoading) {
    return (
      <div className="text-slate-600">
        Loading...
      </div>
    );
  }

  if (isError) {
  return (
    <div className="text-red-600">
      {error?.response?.data?.message ??
        "Failed to load dashboard"}
    </div>
  );
}

  return (
    <div className="space-y-8 md:space-y-10">

      {/* HEADER */}

      <PageHeader
        title="Company Dashboard"
        subtitle="Manage your jobs and hiring activity"
        color="orange"
      />

      {/* COMPANY INFORMATION */}

      <section>
        <h2
          className="
            text-xl
            md:text-2xl
            font-bold
            text-orange-600
            mb-4
            md:mb-6
          "
        >
          Company Information
        </h2>

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-5
            md:p-8
            shadow-sm
          "
        >
          <div className="grid md:grid-cols-2 gap-6 text-slate-700">

            <div>
              <p className="text-slate-500">
                Company ID
              </p>

              <h3 className="text-lg font-semibold">
                {data.companyId}
              </h3>
            </div>

            <div>
              <p className="text-slate-500">
                Company Name
              </p>

              <h3 className="text-lg font-semibold">
                {data.name}
              </h3>
            </div>

            <div>
              <p className="text-slate-500">
                Email
              </p>

              <h3 className="text-lg font-semibold break-all">
                {data.email}
              </h3>
            </div>

            <div>
              <p className="text-slate-500">
                Phone
              </p>

              <h3 className="text-lg font-semibold">
                {data.phone || "-"}
              </h3>
            </div>

            <div className="md:col-span-2">
              <p className="text-slate-500">
                Address
              </p>

              <h3 className="text-lg font-semibold">
                {data.address || "-"}
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* JOB STATISTICS */}

      <section>
        <h2
          className="
            text-xl
            md:text-2xl
            font-bold
            text-orange-600
            mb-4
            md:mb-6
          "
        >
          Job Statistics
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

          <StatCard
            title="Total Jobs"
            value={data.jobStatistics.totalJobs}
            color="orange"
          />

          <StatCard
            title="Active Jobs"
            value={data.jobStatistics.activeJobs}
            color="green"
          />

          <StatCard
            title="Expired Jobs"
            value={data.jobStatistics.expiredJobs}
            color="red"
          />

        </div>
      </section>

      <section>
  <h2
    className="
      text-xl
      md:text-2xl
      font-bold
      text-orange-600
      mb-4
      md:mb-6
    "
  >
    Hiring Insights
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

    <StatCard
      title="Qualified Candidates"
      value={data.candidateInsights.totalCandidates}
      color="orange"
    />

    <StatCard
      title="Currently Shortlisted"
      value={data.candidateInsights.shortlistedCandidates}
      color="yellow"
    />

    <StatCard
      title="Accepted"
      value={data.candidateInsights.acceptedCandidates}
      color="green"
    />

    <StatCard
      title="Rejected"
      value={data.candidateInsights.rejectedCandidates}
      color="red"
    />

    <StatCard
      title="Acceptance Rate"
      value={`${data.candidateInsights.acceptanceRate}%`}
      color="green"
    />

    <StatCard
      title="Rejection Rate"
      value={`${data.candidateInsights.rejectionRate}%`}
      color="red"
    />

  </div>
</section>

<section>
  <h2
    className="
      text-xl
      md:text-2xl
      font-bold
      text-orange-600
      mb-4
      md:mb-6
    "
  >
    Recruitment Activity
  </h2>

  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

    {/* Recent Jobs */}

    <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">

      <h3
  className="
    text-lg
    font-bold
    text-slate-800
    mb-4
  "
>
  Recent Job Posts
</h3>

      <div className="space-y-4">

        {data.activityOverview.recentJobs.length === 0 ? (
          <p className="text-slate-500">
            No jobs posted yet.
          </p>
        ) : (
          data.activityOverview.recentJobs.map((job) => (
            <div
  key={job.jobId}
  className="
    flex
    flex-col
    sm:flex-row
    sm:justify-between
    gap-3
    border-b
    border-slate-100
    pb-3
  "
>
              <div className="min-w-0">

  <p
  className="
    font-semibold
    text-orange-600
    truncate
  "
>
    {job.title ?? "Untitled Job"}
  </p>

  <p className="text-sm text-slate-500">
    {job.jobId}
  </p>

</div>

              <div className="text-right text-sm">

                <p className="text-green-600 font-medium">
                  Posted: {job.datePosted}
                </p>

                <p className="text-red-500">
                  Deadline: {job.deadline}
                </p>

              </div>
            </div>
          ))
        )}

      </div>

    </div>

    {/* Candidate Updates */}

    <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">

      <h3
  className="
    text-lg
    font-bold
    text-slate-800
    mb-4
  "
>
  Recent Candidate Updates
</h3>

      <div className="space-y-4">

        {data.activityOverview.recentCandidateUpdates.length === 0 ? (
          <p className="text-slate-500">
            No candidate updates yet.
          </p>
        ) : (
          data.activityOverview.recentCandidateUpdates.map(
            (candidate) => (
              <div
  key={candidate.applicationId}
  className="
    flex
    flex-col
    sm:flex-row
    sm:justify-between
    gap-3
    border-b
    border-slate-100
    pb-3
  "
>
                <div className="min-w-0">

  <p
  className="
    font-semibold
    text-slate-800
    truncate
  "
>
    {candidate.candidateName ?? "Unknown Candidate"}
  </p>

  <p
  className="
    text-sm
    text-orange-600
    font-medium
    truncate
  "
>
  {candidate.jobTitle ?? "Unknown Job"}
</p>

  <p className="text-xs text-slate-400">
    {candidate.jobId}
  </p>

  <p className="text-xs text-slate-400">
    {candidate.applicationId}
  </p>

</div>

                <div className="text-right">

                  <span
                    className={
                      candidate.status === "Accepted"
                        ? "text-green-600 font-semibold"
                        : candidate.status === "Rejected"
                        ? "text-red-600 font-semibold"
                        : "text-yellow-600 font-semibold"
                    }
                  >
                    {candidate.status ?? "N/A"}
                  </span>

                  <p className="text-xs text-slate-500">
                    {candidate.updatedAt}
                  </p>

                </div>
              </div>
            )
          )
        )}

      </div>

    </div>

  </div>
</section>

    </div>
  );
}