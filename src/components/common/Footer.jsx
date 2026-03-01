// import React from 'react';
// import Link from 'next/link';
// import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-gray-100">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           {/* Brand */}
//           <div className="md:col-span-1">
//             <h3 className="text-2xl font-bold text-white mb-2">QuickHire</h3>
//             <p className="text-gray-400 text-sm">
//               Discover more than 5000+ jobs and passionate about startups
//             </p>
//             <div className="flex gap-4 mt-4">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Linkedin size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Instagram size={20} />
//               </a>
//             </div>
//           </div>

//           {/* For Job Seekers */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-4">For Job Seekers</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/jobs" className="text-gray-400 hover:text-white transition-colors">
//                   Find Jobs
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Browse Companies
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Career Advice
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Salary Guide
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* For Employers */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-4">For Employers</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/admin" className="text-gray-400 hover:text-white transition-colors">
//                   Post a Job
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Pricing
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Company Profile
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Resources
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Support */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Help Center
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Terms of Service
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-800"></div>

//         {/* Bottom Footer */}
//         <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400 text-sm">
//             &copy; {currentYear} QuickHire. All rights reserved.
//           </p>
//           <div className="flex gap-6 mt-4 md:mt-0">
//             <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
//               Privacy
//             </Link>
//             <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
//               Terms
//             </Link>
//             <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
//               Sitemap
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1d2e] text-white px-6 pt-14 pb-8">
      <div className="max-w-7xl mx-auto">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#3d4ef6] rounded-full flex items-center justify-center">
                <span className="text-white font-black text-xs">Q</span>
              </div>
              <span className="font-extrabold text-base text-white" style={{ fontFamily: "'DM Sans','Poppins',sans-serif" }}>
                QuickHire
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* Col 2 — About */}
          <div>
            <h4 className="font-bold text-sm text-white mb-5">About</h4>
            <ul className="flex flex-col gap-3">
              {["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Resources */}
          <div>
            <h4 className="font-bold text-sm text-white mb-5">Resources</h4>
            <ul className="flex flex-col gap-3">
              {["Help Docs", "Guide", "Updates", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div>
            <h4 className="font-bold text-sm text-white mb-2">Get job notifications</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex items-center overflow-hidden rounded-lg border border-gray-600">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none min-w-0"
              />
              <button className="bg-[#3d4ef6] hover:bg-[#2d3ee0] text-white text-sm font-semibold px-4 py-2.5 whitespace-nowrap transition-colors flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            2021 © QuickHire. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3d4ef6] flex items-center justify-center transition-colors">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3d4ef6] flex items-center justify-center transition-colors">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            {/* Dribbble */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3d4ef6] flex items-center justify-center transition-colors">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3d4ef6] flex items-center justify-center transition-colors">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3d4ef6] flex items-center justify-center transition-colors">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}