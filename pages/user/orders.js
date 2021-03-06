import React from 'react';
import Orders from '../../src/components/User/Orders/Orders';
import { OrderProvider } from '../../src/context/order';

export default function orders() {
  return (
    <OrderProvider>
      <Orders />
    </OrderProvider>
  );
}
