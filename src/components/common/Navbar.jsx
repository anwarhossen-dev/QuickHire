import Link from "next/link";
import Button from "./Button";
import { Search, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ─── NAVIGATION ──────────────────────────────────────── */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-extrabold text-blue-600 tracking-tight">
                QuickHire
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/jobs"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Find Jobs
              </Link>
              <Link
                href="/companies"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Browse Companies
              </Link>

              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  Login
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Sign Up
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <span className="text-xl">☰</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── HERO / BANNER ───────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
            Discover
            <br />
            more than{" "}
            <span className="text-blue-600">50,000+</span> Jobs
          </h1>

          <p className="text-xl text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto">
            Great platform for job seekers looking for new career heights and passionate about startups.
          </p>

          {/* Search bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-3 md:p-4 rounded-xl shadow-lg border border-gray-200">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="block w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 placeholder-gray-500"
                />
              </div>

              <div className="relative flex-1 sm:flex-initial min-w-[220px]">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  defaultValue="Florence, Italy"
                  className="block w-full pl-11 pr-10 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white text-gray-900"
                >
                  <option>Florence, Italy</option>
                  <option>Berlin, Germany</option>
                  <option>Remote</option>
                  <option>London, UK</option>
                  <option>New York, USA</option>
                </select>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 text-lg font-medium rounded-lg w-full sm:w-auto">
                Search my job
              </Button>
            </div>

            {/* Popular searches */}
            <div className="mt-6 text-sm text-gray-600">
              Popular :{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">UI Designer</span>,{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">UX Researcher</span>,{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">Android</span>,{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">Admin</span>
            </div>
          </div>
        </div>
      </section>

      {/* You can continue with other sections below... */}
    </div>
  );
}