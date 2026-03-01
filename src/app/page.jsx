// import Navbar from "@/components/common/Navbar";
// import HeroBanner from "@/components/common/HeroBanner";
// import Image from "next/image";
// import JobCard from "@/components/jobs/JobCard";
// import CompanyLogos from "@/components/common/Companylogos";
// import Footer from "daisyui/components/footer";

import CompanyLogos from "@/components/common/Companylogos";
import Footer from "@/components/common/Footer";
import HeroBanner from "@/components/common/HeroBanner";
import Navbar from "@/components/common/Navbar";
import FeaturedJobs from "@/components/jobs/Featuredjobs";
import HowItWorks from "@/components/jobs/Howitworks";
import JobCard from "@/components/jobs/JobCard";
import Testimonials from "@/components/jobs/Testimonials";

// export default function Home() {
//   return (
//     // <div>
//     //   <Navbar />
//     //   <HeroBanner />
      
//     //   {/* Add more sections here */}
//     //   <section className="py-20 bg-white">
//     //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//     //       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//     //         Why Choose QuickHire?
//     //       </h2>
//     //       <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
//     //         Find your next opportunity with the most trusted job platform.
//     //       </p>
//     //       {/* Feature cards can go here */}
//     //     </div>
//     //   </section>
//     // </div>
//     <main>
//       <Navbar />
//       <HeroBanner />
//       <CompanyLogos />
//       <JobCard />
//       {/* <FeaturedJobs />
//       <HowItWorks />
//       <Testimonials /> */}
//       <Footer />
//     </main>
//   );
// }


export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <CompanyLogos />
      <JobCard />
      <FeaturedJobs />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
}