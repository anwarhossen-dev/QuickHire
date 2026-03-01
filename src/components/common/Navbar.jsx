import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    // <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-16">
    //       {/* Logo */}
    //       <div className="flex items-center">
    //         <Link href="/" className="text-3xl font-extrabold text-blue-600 tracking-tight">
    //           QuickHire
    //         </Link>
    //       </div>

    //       {/* Desktop menu */}
    //       <div className="hidden md:flex items-center space-x-8">
    //         <Link
    //           href="/jobs"
    //           className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
    //         >
    //           Find Jobs
    //         </Link>
    //         <Link
    //           href="/companies"
    //           className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
    //         >
    //           Browse Companies
    //         </Link>

    //         <div className="flex items-center space-x-3">
    //           <Button variant="outline" size="sm">
    //             Login
    //           </Button>
    //           <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
    //             Sign Up
    //           </Button>
    //         </div>
    //       </div>

    //       {/* Mobile menu button */}
    //       <div className="md:hidden">
    //         <Button variant="ghost" size="icon">
    //           <span className="text-xl">☰</span>
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

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
            href="#"
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