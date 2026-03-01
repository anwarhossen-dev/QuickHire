// export default function PostJobBanner() {
//   return (
//     <section className="py-10 px-6 bg-[#f4f5fa]">
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-[#3d4ef6] rounded-3xl overflow-hidden relative flex flex-col lg:flex-row items-center justify-between px-8 py-10 lg:py-12 gap-8">

//           {/* Background decoration */}
//           <div className="absolute inset-0 pointer-events-none overflow-hidden">
//             <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white opacity-5" />
//             <div className="absolute bottom-0 left-1/4 w-32 h-32 rounded-full bg-white opacity-5" />
//           </div>

//           {/* Left text */}
//           <div className="relative z-10 text-center lg:text-left max-w-sm">
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight" style={{ fontFamily: "'DM Sans','Poppins',sans-serif" }}>
//               Start posting
//               <br />jobs today
//             </h2>
//             <p className="mt-3 text-blue-100 text-sm leading-relaxed">
//               Start posting for only $10.
//             </p>
//             <button className="mt-6 bg-white text-[#3d4ef6] font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md">
//               Sign Up For Free
//             </button>
//           </div>

//           {/* Right mockup dashboard */}
//           <div className="relative z-10 hidden lg:block">
//             <div className="bg-white rounded-2xl shadow-2xl p-4 w-80">
//               {/* Mini header */}
//               <div className="flex items-center justify-between mb-3">
//                 <span className="font-bold text-xs text-[#1a1d3b]">Dashboard</span>
//                 <div className="flex gap-1">
//                   <div className="w-2 h-2 rounded-full bg-red-400" />
//                   <div className="w-2 h-2 rounded-full bg-yellow-400" />
//                   <div className="w-2 h-2 rounded-full bg-green-400" />
//                 </div>
//               </div>
//               {/* Stats row */}
//               <div className="grid grid-cols-3 gap-2 mb-3">
//                 {[
//                   { label: "Applications", value: "1,240" },
//                   { label: "Interviews",   value: "57" },
//                   { label: "Hired",        value: "12" },
//                 ].map(({ label, value }) => (
//                   <div key={label} className="bg-[#f4f5fa] rounded-xl p-2.5 text-center">
//                     <p className="font-extrabold text-[#3d4ef6] text-base">{value}</p>
//                     <p className="text-[10px] text-gray-400 mt-0.5">{label}</p>
//                   </div>
//                 ))}
//               </div>
//               {/* Bar chart mockup */}
//               <div className="bg-[#f4f5fa] rounded-xl p-3">
//                 <p className="text-[10px] font-semibold text-gray-500 mb-2">Weekly Applications</p>
//                 <div className="flex items-end gap-1.5 h-14">
//                   {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
//                     <div
//                       key={i}
//                       className="flex-1 rounded-t-md transition-all"
//                       style={{
//                         height: `${h}%`,
//                         backgroundColor: i === 5 ? "#3d4ef6" : "#c7caef",
//                       }}
//                     />
//                   ))}
//                 </div>
//                 <div className="flex justify-between mt-1.5">
//                   {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
//                     <span key={i} className="text-[9px] text-gray-400 flex-1 text-center">{d}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function PostJobBanner() {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[220px]"
          style={{ background: "linear-gradient(130deg, #3d3abf 0%, #5b4ef8 50%, #6c5fff 100%)" }}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-white opacity-[0.06] pointer-events-none" />
          <div className="absolute bottom-4 left-40 w-20 h-20 rounded-full bg-white opacity-[0.04] pointer-events-none" />

          {/* ── LEFT TEXT ── */}
          <div className="relative z-10 flex flex-col justify-center px-10 py-12 w-full lg:w-[300px] flex-shrink-0">
            <h2
              className="text-[2rem] font-extrabold text-white leading-tight"
              style={{ fontFamily: "'DM Sans','Poppins',sans-serif" }}
            >
              Start posting<br />jobs today
            </h2>
            <p className="mt-3 text-blue-200 text-sm">Start posting jobs for only $10.</p>
            <button className="mt-7 self-start bg-white text-[#4338ca] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors shadow-md">
              Sign Up For Free
            </button>
          </div>

          {/* ── RIGHT DASHBOARD MOCKUP ── */}
          <div className="relative z-10 hidden lg:flex flex-1 items-end justify-end pr-6 pt-6">
            {/* outer shadow frame */}
            <div className="bg-white rounded-t-2xl shadow-2xl w-full max-w-[540px] overflow-hidden" style={{ boxShadow: "0 -8px 40px rgba(0,0,0,0.18)" }}>

              {/* ── BROWSER TOP BAR ── */}
              <div className="bg-[#f0f2ff] border-b border-gray-200 px-3 py-2 flex items-center gap-3">
                {/* dots */}
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                {/* url bar */}
                <div className="flex-1 bg-white rounded px-3 py-0.5 text-[9px] text-gray-400 border border-gray-200">
                  quickhire.com/dashboard
                </div>
                <div className="bg-[#4338ca] text-white text-[9px] font-bold px-2.5 py-1 rounded-lg">+ Post Job</div>
              </div>

              {/* ── DASHBOARD BODY ── */}
              <div className="flex">

                {/* Left sidebar */}
                <div className="w-28 bg-white border-r border-gray-100 py-4 px-3 flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-4 h-4 bg-[#4338ca] rounded-full flex items-center justify-center">
                      <span className="text-white font-black text-[7px]">Q</span>
                    </div>
                    <span className="text-[9px] font-extrabold text-[#1a1d3b]">QuickHire</span>
                  </div>
                  {[
                    { label: "Dashboard", active: true },
                    { label: "Messages",  active: false },
                    { label: "My Jobs",   active: false },
                    { label: "Browse",    active: false },
                    { label: "Settings",  active: false },
                  ].map(({ label, active }) => (
                    <div
                      key={label}
                      className={`text-[9px] px-2 py-1.5 rounded-lg font-medium ${
                        active ? "bg-[#eef2ff] text-[#4338ca]" : "text-gray-400"
                      }`}
                    >
                      {label}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 bg-[#f8f9ff] p-3">

                  {/* Welcome */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div>
                      <p className="text-[10px] font-extrabold text-gray-800">Good Morning, Olivia 👋</p>
                      <p className="text-[8px] text-gray-400">Here is your job listing status</p>
                    </div>
                    <div className="flex gap-1">
                      <button className="text-[8px] border border-gray-200 bg-white px-2 py-0.5 rounded text-gray-500">Week</button>
                      <button className="text-[8px] bg-[#4338ca] text-white px-2 py-0.5 rounded">Month</button>
                    </div>
                  </div>

                  {/* 3 stat cards */}
                  <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                    <div className="bg-[#4338ca] rounded-xl p-2 text-white">
                      <p className="text-[7px] opacity-80 leading-tight">Total Applications</p>
                      <p className="text-base font-extrabold leading-tight mt-0.5">76</p>
                      <p className="text-[7px] opacity-70 mt-0.5">↑ 12%</p>
                    </div>
                    <div className="bg-[#22c55e] rounded-xl p-2 text-white">
                      <p className="text-[7px] opacity-90 leading-tight">Active Jobs Today</p>
                      <p className="text-base font-extrabold leading-tight mt-0.5">3</p>
                      <p className="text-[7px] opacity-80 mt-0.5">Open now</p>
                    </div>
                    <div className="bg-[#f97316] rounded-xl p-2 text-white">
                      <p className="text-[7px] opacity-90 leading-tight">New Applicants</p>
                      <p className="text-base font-extrabold leading-tight mt-0.5">24</p>
                      <p className="text-[7px] opacity-80 mt-0.5">This week</p>
                    </div>
                  </div>

                  {/* Bottom: chart + right col */}
                  <div className="grid grid-cols-5 gap-1.5">

                    {/* Bar chart */}
                    <div className="col-span-3 bg-white rounded-xl p-2.5">
                      <div className="flex items-center justify-between mb-1.5">
                        <p className="text-[8px] font-bold text-gray-700">Applications</p>
                        <div className="flex gap-1">
                          <span className="flex items-center gap-0.5 text-[7px] text-gray-400"><span className="w-1.5 h-1.5 rounded-sm bg-[#4338ca] inline-block"/>Senior</span>
                          <span className="flex items-center gap-0.5 text-[7px] text-gray-400"><span className="w-1.5 h-1.5 rounded-sm bg-[#f97316] inline-block"/>Junior</span>
                        </div>
                      </div>
                      {/* Grouped bars */}
                      <div className="flex items-end gap-1 h-14">
                        {[
                          [60, 35], [80, 50], [45, 30], [90, 55],
                          [65, 40], [75, 45], [50, 25], [85, 60],
                        ].map(([a, b], i) => (
                          <div key={i} className="flex items-end gap-0.5 flex-1">
                            <div className="flex-1 rounded-t-sm" style={{ height: `${a}%`, backgroundColor: "#4338ca" }} />
                            <div className="flex-1 rounded-t-sm" style={{ height: `${b}%`, backgroundColor: "#f97316" }} />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-1">
                        {["J","F","M","A","M","J","J","A"].map((m, i) => (
                          <span key={i} className="text-[7px] text-gray-400 flex-1 text-center">{m}</span>
                        ))}
                      </div>
                    </div>

                    {/* Right stats */}
                    <div className="col-span-2 flex flex-col gap-1.5">
                      <div className="bg-white rounded-xl p-2">
                        <p className="text-[7px] text-gray-400">Jobs Open</p>
                        <p className="text-sm font-extrabold text-gray-800 leading-tight">12</p>
                        <p className="text-[7px] text-gray-400 mt-0.5">Last open</p>
                      </div>
                      <div className="bg-white rounded-xl p-2">
                        <p className="text-[7px] text-gray-400">Applications Score</p>
                        <p className="text-sm font-extrabold text-gray-800 leading-tight">2,342</p>
                        {/* mini donut placeholder */}
                        <div className="flex gap-1 mt-1">
                          {["#4338ca","#f97316","#22c55e"].map((c) => (
                            <div key={c} className="flex-1 h-1 rounded-full" style={{ backgroundColor: c }} />
                          ))}
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-2">
                        <p className="text-[7px] text-gray-400">Total Hired</p>
                        <p className="text-sm font-extrabold text-gray-800 leading-tight">67</p>
                        <p className="text-[7px] text-[#22c55e] mt-0.5">↑ 5% this week</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}