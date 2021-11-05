import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AllOrders from '@/components/Orders/AllOrders';
import AuthContext from '@/context/AuthContext';

const allorders = () => {
  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => !loggedIn && router.push('/account/login'), []);

  return (
    <main>
      <AllOrders />
    </main>
  );
};

export default allorders;
