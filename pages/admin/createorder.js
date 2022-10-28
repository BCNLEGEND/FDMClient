import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext';

import CreateNewOrder from '@/components/Orders/CreateNewOrder';

const createorder = () => {
  const router = useRouter();
  const { loggedIn, user } = useContext(AuthContext);

  useEffect(() => {
    if (!loggedIn) {
      router.push('/account/login');
    }
  }, [loggedIn]);

  return (
    <div>
      <CreateNewOrder user={user} />
    </div>
  );
};

export default createorder;
