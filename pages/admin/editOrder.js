import EditOrder from '@/components/Admin/EditOrder/EditOrder';
import { OrderProvider } from '@/src/context/order';

export default function EditOrder() {
  return (
    <OrderProvider>
      <main>
        <EditOrder />
      </main>
    </OrderProvider>
  );
}
