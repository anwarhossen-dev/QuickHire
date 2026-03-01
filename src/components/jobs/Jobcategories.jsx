import { Palette, Briefcase, TrendingUp, DollarSign, Monitor, Code, BarChart2, Users } from "lucide-react";

const categories = [
  { icon: Palette,    label: "Design",         count: "235 jobs available",  color: "#eef2ff", iconColor: "#3d4ef6", highlight: false },
  { icon: Briefcase,  label: "Sales",           count: "756 jobs available",  color: "#fff7ed", iconColor: "#f97316", highlight: false },
  { icon: TrendingUp, label: "Marketing",       count: "140 jobs available",  color: "#3d4ef6", iconColor: "#ffffff", highlight: true  },
  { icon: DollarSign, label: "Finance",         count: "346 jobs available",  color: "#f0fdf4", iconColor: "#22c55e", highlight: false },
  { icon: Monitor,    label: "Technology",      count: "436 jobs available",  color: "#eef2ff", iconColor: "#3d4ef6", highlight: false },
  { icon: Code,       label: "Engineering",     count: "542 jobs available",  color: "#fdf2ff", iconColor: "#a855f7", highlight: false },
  { icon: BarChart2,  label: "Business",        count: "210 jobs available",  color: "#fff7ed", iconColor: "#f97316", highlight: false },
  { icon: Users,      label: "Human Resource",  count: "346 jobs available",  color: "#ecfdf5", iconColor: "#10b981", highlight: false },
];

export default function JobCategories() {
  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1d3b]" style={{ fontFamily: "'DM Sans','Poppins',sans-serif" }}>
            Explore by{" "}
            <span className="text-[#3d4ef6] relative inline-block">
              category
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 100 6" fill="none">
                <path d="M2 4 C20 1,50 5,98 3" stroke="#3d4ef6" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#3d4ef6] hover:underline">
            More of jobs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map(({ icon: Icon, label, count, color, iconColor, highlight }) => (
            <div
              key={label}
              className={`rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 cursor-pointer group border hover:-translate-y-1 hover:shadow-lg ${
                highlight
                  ? "bg-[#3d4ef6] border-[#3d4ef6] shadow-lg shadow-blue-200"
                  : "bg-white border-gray-100 shadow-sm hover:border-[#3d4ef6]/20"
              }`}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: highlight ? "rgba(255,255,255,0.2)" : color }}
              >
                <Icon className="w-5 h-5" style={{ color: highlight ? "#ffffff" : iconColor }} />
              </div>
              <div>
                <p className={`font-bold text-sm ${highlight ? "text-white" : "text-[#1a1d3b] group-hover:text-[#3d4ef6]"} transition-colors`}>
                  {label}
                </p>
                <p className={`text-xs mt-0.5 ${highlight ? "text-blue-100" : "text-gray-400"}`}>{count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}