import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useState } from "react";
import usePageTitle from "../../hooks/usePageTitle";

export default function Home() {
    usePageTitle("Home - Discover Your Dream Career");
  const navigate = useNavigate();

  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (jobTitle) params.append("title", jobTitle);
    if (location) params.append("location", location);

    navigate(`/jobs?${params.toString()}`);
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black"></div>

      <div className="relative z-10 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-4 w-full">

          <div className="max-w-4xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Trusted by professionals worldwide
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white mb-6">

              Find Your

              <span className="block text-blue-400">
                Dream Career
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
              Explore thousands of job opportunities from top companies
              and take the next step toward your future.
            </p>

            {/* Search Box */}
            <div className="bg-white/10 border border-white/10 backdrop-blur-2xl p-4 rounded-3xl shadow-2xl">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <input
                  type="text"
                  placeholder="Job title or keyword"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="h-14 rounded-2xl bg-white text-black px-5 outline-none"
                />

                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-14 rounded-2xl bg-white text-black px-5 outline-none"
                />

                <button
                  onClick={handleSearch}
                  className="h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
                >
                  <Search size={20} />
                  Search Jobs
                </button>

              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-12 text-white">

              <div>
                <h3 className="text-3xl font-bold">
                  10K+
                </h3>

                <p className="text-gray-400">
                  Active Jobs
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  5K+
                </h3>

                <p className="text-gray-400">
                  Companies
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  25K+
                </h3>

                <p className="text-gray-400">
                  Candidates
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}