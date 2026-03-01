// import { Search, MapPin } from "lucide-react";
// //import Image from "next/image";
// import Button from "./Button";
// import Image from "next/image";

// export default function HeroBanner() {
//   return (
//     <section className="relative overflow-hidden bg-[#f4f5fa] min-h-[88vh] flex flex-col justify-center">
//       {/* Geometric background lines */}
//       <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
//         <svg
//           className="absolute right-0 top-0 h-full w-full opacity-30"
//           viewBox="0 0 600 700"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect x="80" y="60" width="300" height="200" rx="4" stroke="#c7caef" strokeWidth="1.5" />
//           <rect x="120" y="100" width="300" height="200" rx="4" stroke="#c7caef" strokeWidth="1.5" />
//           <rect x="160" y="140" width="300" height="200" rx="4" stroke="#c7caef" strokeWidth="1.5" />
//           <rect x="40" y="300" width="250" height="180" rx="4" stroke="#c7caef" strokeWidth="1.5" />
//           <rect x="80" y="340" width="250" height="180" rx="4" stroke="#c7caef" strokeWidth="1.5" />
//         </svg>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 md:py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* Left content */}
//           <div>
//             <h1
//               className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#1a1d3b] leading-[1.05] tracking-tight"
//               style={{ fontFamily: "'DM Sans', 'Poppins', sans-serif" }}
//             >
//               Discover
//               <br />
//               more than
//               <br />
//               <span className="relative inline-block">
//                 <span className="text-[#3d6ef6]">5000+ Jobs</span>
//                 {/* Hand-drawn underline SVG */}
//                 <svg
//                   className="absolute -bottom-3 left-0 w-full"
//                   height="14"
//                   viewBox="0 0 420 14"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M4 9 C60 3, 140 13, 210 7 C280 1, 360 11, 416 6"
//                     stroke="#3d6ef6"
//                     strokeWidth="5"
//                     strokeLinecap="round"
//                     fill="none"
//                   />
//                 </svg>
//               </span>
//             </h1>

//             <p className="mt-10 text-base sm:text-lg text-gray-500 max-w-md leading-relaxed">
//               Great platform for the job seeker that searching for new career heights and passionate about startups.
//             </p>

//             {/* Search box */}
//             <div className="mt-8 max-w-2xl">
//               <div className="flex flex-col sm:flex-row items-stretch gap-0 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">

//                 {/* Job input */}
//                 <div className="relative flex-1 border-r border-gray-100">
//                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     placeholder="Job title or keyword"
//                     className="w-full pl-12 pr-4 py-4 focus:outline-none text-gray-800 placeholder-gray-400 text-sm bg-transparent"
//                   />
//                 </div>

//                 {/* Location */}
//                 <div className="relative sm:min-w-[190px] border-r border-gray-100">
//                   <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <select
//                     defaultValue="Florence, Italy"
//                     className="w-full pl-12 pr-6 py-4 bg-white focus:outline-none text-gray-700 text-sm appearance-none cursor-pointer"
//                   >
//                     <option>Remote / Anywhere</option>
//                     <option>Berlin, Germany</option>
//                     <option>London, UK</option>
//                     <option>New York, USA</option>
//                     <option>Florence, Italy</option>
//                     <option>San Francisco, USA</option>
//                     <option>San Francisco, USA</option>
//                   </select>
//                   <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
//                     <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </div>
//                 </div>

//                 <button className="bg-[#3d4ef6] hover:bg-[#2d3ee0] text-white px-7 py-4 font-semibold text-sm transition-colors whitespace-nowrap">
//                   Search my job
//                 </button>
//               </div>

//               {/* Popular tags */}
//               <p className="mt-4 text-sm text-gray-500">
//                 <span className="font-medium text-gray-700">Popular :</span>{" "}
//                 {["UI Designer", "UX Researcher", "Android", "Admin"].map((tag, i, arr) => (
//                   <span key={tag}>
//                     <span className="hover:text-[#3d6ef6] cursor-pointer transition-colors">{tag}</span>
//                     {i < arr.length - 1 && <span className="text-gray-300 mx-1">,</span>}
//                   </span>
//                 ))}
//               </p>
//             </div>
//           </div>

//           {/* Right image */}
//           <div className="hidden lg:flex justify-end items-end relative h-[520px] mt-25 ">
//             <Image
//               src="/images/hero.png"
//               alt="Job seeker"
//               width={500}
//               height={500}
//               className="object-contain object-bottom absolute bottom-0 right-0 drop-shadow-xl"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Search, MapPin } from "lucide-react";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#f4f5fa] min-h-[85vh] flex flex-col justify-center">
      {/* Geometric background lines */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
        <svg className="absolute right-0 top-0 h-full w-full opacity-25" viewBox="0 0 600 700" fill="none">
          <rect x="80"  y="60"  width="300" height="200" rx="4" stroke="#c7caef" strokeWidth="1.5" />
          <rect x="120" y="100" width="300" height="200" rx="4" stroke="#c7caef" strokeWidth="1.5" />
          <rect x="160" y="140" width="300" height="200" rx="4" stroke="#c7caef" strokeWidth="1.5" />
          <rect x="40"  y="300" width="250" height="180" rx="4" stroke="#c7caef" strokeWidth="1.5" />
          <rect x="80"  y="340" width="250" height="180" rx="4" stroke="#c7caef" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#1a1d3b] leading-[1.08] tracking-tight" style={{ fontFamily: "'DM Sans','Poppins',sans-serif" }}>
              Discover
              <br />more than
              <br />
              <span className="relative inline-block">
                <span className="text-[#3d6ef6]">5000+ Jobs</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 380 12" fill="none">
                  <path d="M3 8 C55 3,130 11,190 6 C250 1,320 10,377 5" stroke="#3d6ef6" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="mt-8 text-sm sm:text-base text-gray-500 max-w-sm leading-relaxed">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>

            {/* Search box */}
            <div className="mt-7 max-w-xl">
              <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="relative flex-1 border-r border-gray-100">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input type="text" placeholder="Job title or keyword" className="w-full pl-10 pr-4 py-3.5 focus:outline-none text-gray-800 placeholder-gray-400 text-sm bg-transparent" />
                </div>
                <div className="relative sm:min-w-[160px] border-r border-gray-100">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <select defaultValue="Florence, Italy" className="w-full pl-10 pr-5 py-3.5 bg-white focus:outline-none text-gray-700 text-sm appearance-none cursor-pointer">
                    <option>Remote / Anywhere</option>
                    <option>Berlin, Germany</option>
                    <option>London, UK</option>
                    <option>New York, USA</option>
                    <option>Florence, Italy</option>
                    <option>San Francisco, USA</option>
                  </select>
                  <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <button className="bg-[#3d4ef6] hover:bg-[#2d3ee0] text-white px-6 py-3.5 font-semibold text-sm transition-colors whitespace-nowrap">
                  Search my job
                </button>
              </div>

              <p className="mt-3.5 text-xs text-gray-500">
                <span className="font-medium text-gray-600">Popular :</span>{" "}
                {["UI Designer", "UX Researcher", "Android", "Admin"].map((tag, i, arr) => (
                  <span key={tag}>
                    <span className="hover:text-[#3d6ef6] cursor-pointer transition-colors">{tag}</span>
                    {i < arr.length - 1 && <span className="text-gray-300 mx-1">,</span>}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:flex justify-end items-end relative h-[480px]">
            <Image src="/hero.png" alt="Job seeker" width={480} height={480} className="object-contain object-bottom absolute bottom-0 right-0 drop-shadow-xl" priority />
          </div>
        </div>
      </div>
    </section>
  );
}