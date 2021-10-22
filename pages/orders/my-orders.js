import React from 'react';
import MyOrders from '@/components/Order/MyOrders/MyOrders';
import { OrderProvider } from '@/context/order';

export default function orders() {
  return (
    <OrderProvider>
      <main>
        <MyOrders />
      </main>
    </OrderProvider>
  );
}
