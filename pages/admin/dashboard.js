import AdminDashboard from '@/components/Admin/AdminDashboard';
import { OrderProvider } from '@/context/order';

export default function Dashboard() {
  return (
    <OrderProvider>
      <main>
        <AdminDashboard />
      </main>
    </OrderProvider>
  );
}
