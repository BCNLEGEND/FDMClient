import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { NEXT_API } from '@/utils/api';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({});
  const [allOrders, setAllOrders] = useState([{}]);
  const [error, setError] = useState(null);
  const router = useRouter();

  //   Register User
  const getAllOrders = async () => {
    try {
      const res = await axios.get(`${NEXT_API}getallorders`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.data.orders;

      if (res.status === 200) {
        setAllOrders(data);
      }
    } catch (err) {
      setError(
        'Something went wrong, we were not able to retrieve any orders, please try again. '
      );
      setError(null);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        allOrders,
        error,
        getAllOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
