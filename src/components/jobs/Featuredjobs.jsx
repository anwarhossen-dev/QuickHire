import { MapPin, Clock, Bookmark } from "lucide-react";

const jobs = [
  { title: "Senior UI/UX Designer", company: "Spotify",  logo: "🎵", location: "Remote",          type: "Full Time", salary: "$80k – $100k",  tags: ["Figma", "Research", "Prototyping"],  featured: true,  bgColor: "#1db954" },
  { title: "Frontend Developer",    company: "Notion",   logo: "📝", location: "New York, USA",   type: "Full Time", salary: "$90k – $120k",  tags: ["React", "TypeScript", "Tailwind"],   featured: false, bgColor: "#000000" },
  { title: "Product Manager",       company: "Figma",    logo: "🎨", location: "San Francisco",   type: "Full Time", salary: "$110k – $140k", tags: ["Strategy", "Roadmap", "Agile"],      featured: true,  bgColor: "#f24e1e" },
  { title: "Backend Engineer",      company: "Linear",   logo: "⚡", location: "Remote",          type: "Contract",  salary: "$70k – $95k",   tags: ["Node.js", "PostgreSQL", "AWS"],      featured: false, bgColor: "#5e6ad2" },
  { title: "Motion Designer",       company: "Apple",    logo: "🍎", location: "London, UK",      type: "Part Time", salary: "$60k – $80k",   tags: ["After Effects", "Cinema 4D"],        featured: false, bgColor: "#555555" },
  { title: "Data Scientist",        company: "Tesla",    logo: "🚗", location: "Berlin, Germany", type: "Full Time", salary: "$100k – $130k", tags: ["Python", "ML", "TensorFlow"],        featured: true,  bgColor: "#cc0000" },
];

const typeColors = {
  "Full Time": { bg: "#eef2ff", text: "#3d4ef6" },
  "Part Time": { bg: "#fff7ed", text: "#f97316" },
  "Contract":  { bg: "#f0fdf4", text: "#22c55e" },
};

export default function FeaturedJobs() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm text-[#3d4ef6] font-semibold uppercase tracking-widest mb-2">
              Recent Listings
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[#1a1d3b]"
              style={{ fontFamily: "'DM Sans', 'Poppins', sans-serif" }}
            >
              Featured Jobs
            </h2>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-semibold text-[#3d4ef6] hover:underline">
            View all jobs →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => {
            const typeStyle = typeColors[job.type] || typeColors["Full Time"];
            return (
              <div
                key={job.title}
                className="relative bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer group"
              >
                {job.featured ? (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-[#eef2ff] text-[#3d4ef6] px-2.5 py-1 rounded-full">
                    Featured
                  </span>
                ) : (
                  <button className="absolute top-4 right-4 text-gray-300 hover:text-[#3d4ef6] transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                )}

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: job.bgColor + "18" }}
                >
                  {job.logo}
                </div>

                <h3 className="font-bold text-[#1a1d3b] text-base group-hover:text-[#3d4ef6] transition-colors leading-snug">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-400 mt-0.5">{job.company}</p>

                <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />{job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />{job.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {job.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-50">
                  <span className="font-bold text-[#1a1d3b] text-sm">{job.salary}</span>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: typeStyle.bg, color: typeStyle.text }}
                  >
                    {job.type}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}