import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { UserContext } from '../../context/user';
import { OrderContext } from '../../context/order';
import { ApiUrl } from '../../utils/api';

import AllActiveOrders from './AllActiveOrders';

export default function AdminDashboard() {
  const { user, loggedIn } = useContext(UserContext);
  const { changeOrder } = useContext(OrderContext);
  const router = useRouter();
  const api = ApiUrl;

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
          // router.push('/login/error');
        }
      }, [])
    : useEffect(() => !loggedIn && router.push('/login'), []);

  return (
    <div>
      <AllActiveOrders />
    </div>
  );
}
