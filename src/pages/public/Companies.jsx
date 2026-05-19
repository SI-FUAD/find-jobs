import {
  Building2,
  Search,
} from "lucide-react";

import { useState } from "react";
import usePageTitle from "../../hooks/usePageTitle";

export default function Companies() {
    usePageTitle("Companies");
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-black text-white">

      <div className="container-custom section-padding">

        <div className="mb-12">

          <h1 className="text-5xl font-black mb-4">
            Companies
          </h1>

          <p className="text-gray-400 text-lg">
            Discover employers actively hiring talented professionals.
          </p>

        </div>

        <div className="glass-card rounded-3xl p-6 mb-10">

          <div className="relative">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-primary pl-12"
            />

          </div>

        </div>

        <div className="glass-card rounded-3xl p-16 text-center">

          <div className="w-24 h-24 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center mb-8">
            <Building2 size={40} className="text-blue-500" />
          </div>

          <h2 className="text-3xl font-bold mb-4">
            No Companies Found
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Company API integration will be added later.
            The page structure is fully ready for expansion.
          </p>

        </div>

      </div>

    </div>
  );
}