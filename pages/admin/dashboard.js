import React from 'react';
import AdminDashboard from '../../src/components/Admin/AdminDashboard';
import { OrderProvider } from '../../src/context/order';

export default function dashboard() {
  return (
    <OrderProvider>
      <main>
        <AdminDashboard />
      </main>
    </OrderProvider>
  );
}
