import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export function OrderProvider(props) {
  const [order, setOrder] = useState([]);
  const changeOrder = (order) => setOrder(order);

  return (
    <OrderContext.Provider value={{ order, changeOrder }}>
      {props.children}
    </OrderContext.Provider>
  );
}
