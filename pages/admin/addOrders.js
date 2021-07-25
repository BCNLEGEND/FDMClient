import AddOrder from '@/components/Admin/addOrder/AddOrder';
import { OrderProvider } from '@/context/order';

export default function AddOrders() {
  return (
    <OrderProvider>
      <main>
        <AddOrder />
      </main>
    </OrderProvider>
  );
}
