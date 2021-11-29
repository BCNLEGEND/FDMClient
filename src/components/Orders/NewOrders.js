import React, { useEffect, useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderDetails from '@/components/Orders/OrderDetails';
import OrderEdit from '@/components/Orders/OrderEdit';
import Link from 'next/link';

import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TablePagination, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ViewListIcon from '@mui/icons-material/ViewList';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import OrderContext from '@/context/OrderContext';

const NewOrders = () => {
  const { newOrders, getNewOrders, error, success } = useContext(OrderContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openOrderDetails, setOpenOrderDetails] = useState(false);
  const [openOrderEdit, setOpenOrderEdit] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  useEffect(() => {
    getNewOrders();
  }, [success]);

  useEffect(
    () => (error && toast.error(error)) || (success && toast.success(success)),
    [error, success]
  );

  const handleView = (id) => {
    setSelectedOrder(newOrders.filter((order) => order._id === id)[0]);
    setOpenOrderDetails(true);
  };

  const handleEdit = (id) => {
    setSelectedOrder(newOrders.filter((order) => order._id === id)[0]);
    setOpenOrderEdit(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <section>
      <ToastContainer />
      {openOrderDetails && (
        <OrderDetails
          setOpenOrderDetails={setOpenOrderDetails}
          order={selectedOrder}
        />
      )}
      {openOrderEdit && (
        <OrderEdit
          setOpenOrderEdit={setOpenOrderEdit}
          order={selectedOrder}
        />
      )}
      <TableContainer component={Paper}>
        <Table size="small" aria-label="Order Table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body2" color="primary">
                  Nº de Encarrec:
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color="primary">
                  Mayorista:
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2" color="primary">
                  Order Date:
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2" color="primary">
                  Customer Name:
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2" color="primary">
                  Status:
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2" color="primary">
                  Payed:
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2" color="primary">
                  View:
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2" color="primary">
                  Edit:
                </Typography>
              </TableCell>
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
                    <TableCell>{order.mayorista}</TableCell>
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
            <TablePagination
              rowsPerPageOptions={[]}
              count={newOrders.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
            />
          </TableBody>
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
