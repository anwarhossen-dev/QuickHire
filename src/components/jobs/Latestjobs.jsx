import { MapPin, Bookmark } from "lucide-react";

const latestJobs = [
  { title: "Social Media Assistant", company: "Twitter",  logo: "🐦", location: "Sydney · Paris, France",   type: "Intern",    tags: ["Design"],              bgColor: "#1da1f2" },
  { title: "Social Media Assistant", company: "Twitter",  logo: "🐦", location: "Sydney · Paris, France",   type: "Full Time", tags: ["Design"],              bgColor: "#1da1f2" },
  { title: "Brand Designer",         company: "Dropbox",  logo: "📦", location: "Sydney, Australia",        type: "Full Time", tags: ["Design", "Business"],  bgColor: "#0061ff" },
  { title: "Brand Designer",         company: "Dropbox",  logo: "📦", location: "Haridge · Paris, France",  type: "Full Time", tags: ["Design", "Business"],  bgColor: "#0061ff" },
  { title: "Interactive Developer",  company: "Substly",  logo: "🔧", location: "Sydney · Hamburg, Germany", type: "Full Time", tags: ["Design"],              bgColor: "#6c5ce7" },
  { title: "Interactive Developer",  company: "Directly", logo: "⚡", location: "Directly · Hamburg, Germany",type: "Full Time",tags: ["Design"],              bgColor: "#f39c12" },
  { title: "HR Manager",             company: "Twilio",   logo: "🔵", location: "Twilio · Amsterdam",        type: "Full Time", tags: ["Design", "Business"],  bgColor: "#f22f46" },
  { title: "HR Manager",             company: "Webflow",  logo: "🌊", location: "Webflow · Typescript",      type: "Full Time", tags: ["Design"],              bgColor: "#4353ff" },
];

export default function LatestJobs() {
  return (
    <section className="bg-[#f4f5fa] py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1d3b]" style={{ fontFamily: "'DM Sans','Poppins',sans-serif" }}>
            Latest <span className="text-[#3d4ef6]">jobs</span> open
          </h2>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#3d4ef6] hover:underline">
            Show all jobs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* 2-col list grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {latestJobs.map((job, idx) => (
            <div key={idx} className="bg-white rounded-2xl px-5 py-4 flex items-center gap-4 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group">

              {/* Logo */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ backgroundColor: job.bgColor + "20" }}>
                {job.logo}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm text-[#1a1d3b] group-hover:text-[#3d4ef6] transition-colors truncate">{job.title}</h3>
                    <div className="flex items-center gap-1 mt-0.5 text-xs text-gray-400">
                      <span>{job.company}</span>
                      <span>·</span>
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{job.location}</span>
                    </div>
                  </div>
                  <button className="text-gray-300 hover:text-[#3d4ef6] transition-colors flex-shrink-0 mt-0.5">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                {/* Tags + badge */}
                <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wide bg-[#eef2ff] text-[#3d4ef6] px-2 py-0.5 rounded-full">
                    {job.type}
                  </span>
                  {job.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}