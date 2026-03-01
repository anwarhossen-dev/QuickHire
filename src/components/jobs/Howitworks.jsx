import { UserPlus, Search, Send } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Create an Account",
    description: "Sign up for free in just a few seconds. Build your profile and let companies discover you.",
    color: "#eef2ff",
    iconColor: "#3d4ef6",
  },
  {
    step: "02",
    icon: Search,
    title: "Search Your Dream Job",
    description: "Browse thousands of roles by category, location, or keyword. Filter by salary, type, and more.",
    color: "#fff7ed",
    iconColor: "#f97316",
  },
  {
    step: "03",
    icon: Send,
    title: "Apply & Get Hired",
    description: "Apply with one click using your profile. Track applications and hear back from top companies.",
    color: "#f0fdf4",
    iconColor: "#22c55e",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f4f5fa] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-[#3d4ef6] font-semibold uppercase tracking-widest mb-2">
            Simple Process
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#1a1d3b]"
            style={{ fontFamily: "'DM Sans', 'Poppins', sans-serif" }}
          >
            How It Works
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
            Getting your next job is simple. Just follow these three easy steps and land your dream role.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Dashed connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.5%+24px)] right-[calc(16.5%+24px)] h-px border-t-2 border-dashed border-gray-200 z-0" />

          {steps.map(({ step, icon: Icon, title, description, color, iconColor }) => (
            <div
              key={step}
              className="relative z-10 bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <span className="text-2xl font-black text-gray-100 absolute top-5 right-5">{step}</span>

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: color }}
              >
                <Icon className="w-7 h-7" style={{ color: iconColor }} />
              </div>

              <h3 className="font-bold text-[#1a1d3b] text-lg mb-2 group-hover:text-[#3d4ef6] transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}