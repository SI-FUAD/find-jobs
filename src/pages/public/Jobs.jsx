import {
  Briefcase,
  Filter,
  MapPin,
  Search,
} from "lucide-react";

import { useState } from "react";
import usePageTitle from "../../hooks/usePageTitle";

export default function Jobs() {
    usePageTitle("Jobs");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="min-h-screen bg-black text-white">

      <div className="container-custom section-padding">

        <div className="mb-12">

          <h1 className="text-5xl font-black mb-4">
            Explore Jobs
          </h1>

          <p className="text-gray-400 text-lg">
            Search opportunities from top companies worldwide.
          </p>

        </div>

        {/* FILTERS */}
        <div className="glass-card rounded-3xl p-6 mb-10">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="relative md:col-span-2">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />

              <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-primary pl-12"
              />
            </div>

            <div className="relative">
              <MapPin
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />

              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input-primary pl-12"
              />
            </div>

            <button className="btn-secondary">
              <Filter size={18} />
              Filters
            </button>

          </div>

        </div>

        {/* EMPTY STATE */}
        <div className="glass-card rounded-3xl p-16 text-center">

          <div className="w-24 h-24 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center mb-8">
            <Briefcase size={40} className="text-blue-500" />
          </div>

          <h2 className="text-3xl font-bold mb-4">
            No Jobs Found
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Job API integration will be added later.
            The filters and search UI are already prepared.
          </p>

        </div>

      </div>

    </div>
  );
}