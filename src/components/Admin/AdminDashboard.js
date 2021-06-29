import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext';
import { OrderContext } from '@/context/order';
import { API_URL } from '@/utils/api';

import AllActiveOrders from './AllActiveOrders';

export default function AdminDashboard() {
  const { loggedIn, admin } = useContext(AuthContext);
  const { changeOrder } = useContext(OrderContext);
  const router = useRouter();
  const api = API_URL;

  admin
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
