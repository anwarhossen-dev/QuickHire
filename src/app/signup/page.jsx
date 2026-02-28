import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import SignupForm from '@/components/auth/SignupForm';

export const metadata = {
  title: 'Sign Up - QuickHire',
  description: 'Create your QuickHire account and start applying to jobs',
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <SignupForm />
      </main>

      <Footer />
    </div>
  );
}
