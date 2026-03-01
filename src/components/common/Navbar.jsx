import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (

    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#3d4ef6] rounded-full flex items-center justify-center">
            <span className="text-white font-black text-sm">Q</span>
          </div>
          <span
            className="text-[#1a1d3b] font-extrabold text-lg"
            style={{ fontFamily: "'DM Sans', 'Poppins', sans-serif" }}
          >
            QuickHire
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm text-gray-600 hover:text-[#3d4ef6] font-medium transition-colors">
            Find Jobs
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-[#3d4ef6] font-medium transition-colors">
            Browse Companies
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-[#3d4ef6] font-medium transition-colors">
            How It Works
          </Link>
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-semibold text-[#3d4ef6] hover:underline hidden sm:inline-flex"
          >
            Login
          </Link>
          <Link
            href="#"
            className="bg-[#3d4ef6] hover:bg-[#2d3ee0] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}