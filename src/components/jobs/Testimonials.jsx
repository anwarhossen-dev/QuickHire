import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "UI Designer at Spotify",
    avatar: "SJ",
    avatarBg: "#eef2ff",
    avatarColor: "#3d4ef6",
    rating: 5,
    review: "QuickHire helped me land my dream job within 2 weeks! The platform is incredibly easy to use and the job listings are very relevant to my skills.",
  },
  {
    name: "Marcus Lee",
    role: "Frontend Dev at Notion",
    avatar: "ML",
    avatarBg: "#f0fdf4",
    avatarColor: "#22c55e",
    rating: 5,
    review: "I was skeptical at first, but the quality of job listings here is amazing. I got 3 interview calls in the first week. Highly recommend to every developer!",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager at Linear",
    avatar: "PS",
    avatarBg: "#fff7ed",
    avatarColor: "#f97316",
    rating: 5,
    review: "The search filters are fantastic — I could narrow down exactly the kind of role I wanted. Landed a senior PM position at a great startup in no time.",
  },
];

const stats = [
  { value: "5,000+", label: "Jobs Listed" },
  { value: "1,200+", label: "Companies" },
  { value: "98%",    label: "Satisfaction Rate" },
  { value: "10k+",   label: "Hired This Year" },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-[#3d4ef6] font-semibold uppercase tracking-widest mb-2">
            Success Stories
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#1a1d3b]"
            style={{ fontFamily: "'DM Sans', 'Poppins', sans-serif" }}
          >
            What People Are Saying
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
            Thousands of job seekers have found their perfect role through QuickHire. Here's what they say.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#f4f5fa] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed flex-1">"{t.review}"</p>

              <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.avatarBg, color: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-[#1a1d3b] text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 bg-[#f4f5fa] rounded-2xl p-6 border border-gray-100">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-extrabold text-[#3d4ef6]">{value}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}