import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext';
import OrderContext from '@/context/OrderContext';
import { API_URL } from '@/utils/api';

import AllActiveOrders from './AllActiveOrders';

export default function AdminDashboard() {
  const { user, loggedIn } = useContext(AuthContext);
  const { changeOrder } = useContext(OrderContext);
  const router = useRouter();
  const api = API_URL;

  user.role === 'admin' || user.role === 'staff'
    ? useEffect(async () => {
        const token = localStorage.getItem('jwt');
        try {
          const res = await axios.get(`${api}orders`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          changeOrder(res.data.data.data);
        } catch (err) {
          console.log(err);
        }
      }, [])
    : useEffect(
        () =>
          router.push('/user/profile'),
        []
      );

  return (
    <div>
      <AllActiveOrders />
    </div>
  );
}
