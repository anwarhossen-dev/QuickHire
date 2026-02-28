import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Login - QuickHire',
  description: 'Sign in to your QuickHire account',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <LoginForm />
      </main>

      <Footer />
    </div>
  );
}
