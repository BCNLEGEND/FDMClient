import React from 'react';
import AddOrder from '../../src/components/Admin/addOrder/AddOrder';
import { OrderProvider } from '../../src/context/order';

export default function dashboard() {
  return (
    <OrderProvider>
      <main>
        <AddOrder />
      </main>
    </OrderProvider>
  );
}
