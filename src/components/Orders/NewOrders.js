import React, { useEffect, useState, useContext } from 'react';
import OrderDetails from '@/components/Orders/OrderDetails';
import Link from 'next/link';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Button,
  TableFooter,
  TablePagination,
  Typography,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ViewListIcon from '@material-ui/icons/ViewList';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import OrderContext from '@/context/OrderContext';

const NewOrders = () => {
  const { newOrders, getNewOrders } = useContext(OrderContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openOrderDetails, setOpenOrderDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  useEffect(() => {
    getNewOrders();
  }, []);

  const handleView = (id) => {
    setSelectedOrder(newOrders.filter((order) => order._id === id)[0]);
    setOpenOrderDetails(true);
  };

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <section>
      {openOrderDetails && (
        <OrderDetails
          setOpenOrderDetails={setOpenOrderDetails}
          order={selectedOrder}
        />
      )}
      <TableContainer component={Paper}>
        <Table size="small" aria-label="Order Table">
          <TableHead>
            <TableRow>
              <TableCell>Nº de Encarrec:</TableCell>
              <TableCell align="right">Order Date:</TableCell>
              <TableCell align="right">Customer Name:</TableCell>
              <TableCell align="right">Status:</TableCell>
              <TableCell align="right">Payed:</TableCell>
              <TableCell>View:</TableCell>
              <TableCell>Edit:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newOrders.length === 0 ? (
              <TableRow>
                <TableCell>Currently there are no new orders!!!</TableCell>
              </TableRow>
            ) : (
              newOrders
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>{order.encarrec}</TableCell>
                    <TableCell align="right">
                      {String(order.newDate).substring(0, 10)}
                    </TableCell>
                    <TableCell align="right">{`${order.firstName} ${order.lastName}`}</TableCell>
                    <TableCell align="right">{order.status}</TableCell>
                    <TableCell align="right">
                      {order.payed ? 'Yes' : 'No'}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        color="secondary"
                        size="small"
                        onClick={() => handleView(order._id)}
                      >
                        <VisibilityIcon />
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        color="primary"
                        size="small"
                        onClick={() => handleEdit(order._id)}
                      >
                        <EditIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
            )}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[]}
              count={newOrders.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
      <Grid container spacing={4}>
        <Grid item xs={6} align="center">
          <Link href="/admin/allorders">
            <Button size="large" color="primary">
              <ViewListIcon />
              <Typography
                color="primary"
                variant="body1"
                style={{ marginLeft: 'var(--size-xxs' }}
              >
                See all Orders
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6} align="center">
          <Link href="/admin/createorder">
            <Button>
              <AddCircleOutlineIcon size="large" color="secondary" />
              <Typography
                color="secondary"
                variant="body1"
                style={{ marginLeft: 'var(--size-xxs' }}
              >
                Add New Order
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </section>
  );
};

export default NewOrders;