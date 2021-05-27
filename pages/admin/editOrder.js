import React from 'react';
import EditOrder from '../../src/components/Admin/EditOrder/EditOrder';
import { OrderProvider } from '../../src/context/order';

export default function dashboard() {
  return (
    <OrderProvider>
      <main>
        <EditOrder />
      </main>
    </OrderProvider>
  );
}
