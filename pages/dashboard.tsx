import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';

export default function Page() {
  return (
    <main className='flex w-full'>
      <Navbar />
      <Dashboard />
    </main>
  );
}
