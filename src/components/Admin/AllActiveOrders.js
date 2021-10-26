import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@mui/material/Typography';

const columns = [
  {
    field: 'cn',
    headerName: 'CN',
    width: 100,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 300,
  },
  { field: 'qty', headerName: 'Qty', width: 100 },
  { field: 'price', headerName: 'Price', width: 100 },
  { field: 'total', headerName: 'Total', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },

  {
    field: 'payed',
    headerName: 'Payed',
    width: 100,
  },
  {
    field: 'newDate',
    headerName: 'Order Date',
    width: 150,
  },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'comments', headerName: 'Comments', width: 250 },
];

import OrderContext from '@/context/OrderContext';

export default function ActiveOrders() {
  const { order } = useContext(OrderContext);
  const openOrders = order.filter((order) => order.activeOrder);
  const allOpenOrders = openOrders.map((order, i) => {
    const date = new Date(order.newDate);
    return {
      ...order,
      id: i,
      newDate: `${date.getDate()} - ${
        date.getMonth() + 1
      } - ${date.getFullYear()}`,
      total: order.price ? Math.round(order.price * order.qty * 100) / 100 : '',
    };
  });

  return (
    <Paper
      style={{
        width: '95%',
        padding: 'var(--size-xs)',
        margin: 'var(--size-xxs) auto',
      }}
    >
      <Typography variant="h4" component="h1">
        Open Orders:{' '}
      </Typography>
      <DataGrid
        rows={allOpenOrders}
        columns={columns}
        pageSize={5}
        checkboxSelection
        autoHeight={true}
      />
    </Paper>
  );
}
