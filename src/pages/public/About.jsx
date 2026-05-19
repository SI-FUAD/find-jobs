import {
  ShieldCheck,
  BriefcaseBusiness,
  Users,
  Globe,
} from "lucide-react";

import usePageTitle from "../../hooks/usePageTitle";

export default function About() {
  usePageTitle("About Us");

  return (
    <div className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-linear-to-b from-blue-600/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 py-30 relative z-10">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              About Find Jobs
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              Connecting Talent With
              <span className="block text-blue-400">
                Global Opportunities
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
              Find Jobs is a modern career platform designed to help
              professionals discover opportunities and companies find
              exceptional talent faster and smarter.
            </p>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <BriefcaseBusiness className="text-blue-400 mb-5" size={40} />

            <h3 className="text-xl font-bold mb-3">
              Thousands of Jobs
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Explore opportunities from startups, enterprises,
              and international companies.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <Users className="text-blue-400 mb-5" size={40} />

            <h3 className="text-xl font-bold mb-3">
              Professional Network
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Connect candidates and recruiters through
              a professional hiring ecosystem.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <ShieldCheck className="text-blue-400 mb-5" size={40} />

            <h3 className="text-xl font-bold mb-3">
              Trusted Platform
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Secure authentication and verified employers
              for a safer experience.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <Globe className="text-blue-400 mb-5" size={40} />

            <h3 className="text-xl font-bold mb-3">
              Worldwide Access
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Search opportunities from anywhere and work
              with global companies remotely.
            </p>
          </div>

        </div>

      </section>

      {/* Privacy */}
      <section
        id="privacy"
        className="border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-bold mb-8">
            Privacy Policy
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">

            <p>
              We respect your privacy and are committed to protecting
              your personal information. Your data is securely stored
              and never sold to third parties.
            </p>

            <p>
              Find Jobs only collects information necessary to provide
              recruitment, hiring, and professional networking services.
            </p>

            <p>
              Users maintain control over their profiles, resumes,
              and application visibility at all times.
            </p>

          </div>

        </div>
      </section>

      {/* Terms */}
      <section
        id="terms"
        className="border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-bold mb-8">
            Terms of Service
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">

            <p>
              By using Find Jobs, users agree to maintain professional
              conduct and provide accurate information while using the platform.
            </p>

            <p>
              Employers are responsible for maintaining authentic
              job listings and fair hiring practices.
            </p>

            <p>
              Find Jobs reserves the right to remove harmful,
              misleading, or fraudulent content from the platform.
            </p>

          </div>

        </div>
      </section>

    </div>
  );
}