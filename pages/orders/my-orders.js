import React from 'react';
import MyOrders from '../../src/components/Order/MyOrders/MyOrders';
import { OrderProvider } from '../../src/context/order';

export default function orders() {
  return (
    <OrderProvider>
      <main>
        <MyOrders />
      </main>
    </OrderProvider>
  );
}
