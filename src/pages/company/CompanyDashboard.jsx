import { useEffect, useState } from "react";

import api from "../../api/axios";
import endpoints from "../../api/endpoints";

import DashboardHeader from "../../components/common/DashboardHeader";
import StatCard from "../../components/common/StatCard";

export default function CompanyDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await api.get(
          endpoints.companyDashboard
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDashboard();
  }, []);

  if (!data) {
    return (
      <div className="text-slate-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-8 md:space-y-10">

      {/* HEADER */}

      <DashboardHeader
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
                {data.company_id}
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
            value={data.jobs_count}
            color="orange"
          />

          <StatCard
            title="Active Jobs"
            value={data.active_jobs_count}
            color="green"
          />

          <StatCard
            title="Expired Jobs"
            value={data.expired_jobs_count}
            color="red"
          />

        </div>
      </section>

    </div>
  );
}