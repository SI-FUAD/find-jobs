export default function AdminManageJobs() {
  return (
    <div className="space-y-8">
      <div className="bg-linear-to-r from-emerald-600 to-emerald-500 rounded-3xl p-8 shadow-xl">
        <h1 className="text-4xl font-black text-white">
          Manage Jobs
        </h1>

        <p className="text-emerald-100 mt-2">
          Review and process job postings
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-emerald-100">
        <h2 className="text-xl font-bold text-slate-800">
          Coming Soon
        </h2>

        <p className="text-slate-500 mt-2">
          This page is connected and ready.
        </p>
      </div>
    </div>
  );
}