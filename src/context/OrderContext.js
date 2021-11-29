import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { NEXT_API } from '@/utils/api';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({});
  const [allOrders, setAllOrders] = useState([{}]);
  const [searchResults, setSearchResults] = useState([{}]);
  const [newOrders, setNewOrders] = useState([{}]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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

  const getNewOrders = async () => {
    try {
      const res = await axios.get(`${NEXT_API}getallorders`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.data.orders.filter(
        (order) => order.status === 'new'
      );

      if (res.status === 200) {
        setNewOrders(data);
      }
    } catch (err) {
      setError(
        'Something went wrong, we were not able to retrieve any orders, please try again. '
      );
      setError(null);
    }
  };

  const createNewOrder = async (newOrder) => {
    try {
      const res = await axios.post(
        `${NEXT_API}createneworder`,
        { newOrder },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (res.status === 200) {
        setSuccess('Order successfully created!');
        router.push('/admin/allorders')
      }
    } catch (err) {
      setError(
        'Something went wrong, we were not able create the order, please try again. '
      );
      setError(null);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        allOrders,
        newOrders,
        error,
        success,
        createNewOrder,
        getAllOrders,
        getNewOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
