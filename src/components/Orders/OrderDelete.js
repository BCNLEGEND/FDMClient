import React, {useContext} from 'react';
import { IMG_API } from '@/utils/api';
import { Paper, Grid, Button, Typography } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

import OrderContext  from '@/context/OrderContext';

const OrderDetails = ({ order, setOpenOrderDelete }) => {
  const {deleteOrder} = useContext(OrderContext)
 
  const handleClose = () => {
    setOpenOrderDelete(false);
  };

  const handleDelete = () => {
    deleteOrder(order)
    setOpenOrderDelete(false);
  }

  return (
    <section
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        backgroundColor: 'rgba(255,255,255,.5)',
        padding: 'var(--size-s)',
        width: '100vw',
        height: '100vh',
        zIndex: '100',
      }}
    >
      <Paper
        style={{
          width: '75%',
          margin: '0 auto',
          padding: 'var(--size-xs)',
          backgroundColor: 'rgba(255,255,255,.8)',
        }}
      >
        <Grid container>
          <Grid item xs={11}></Grid>
          <Grid item xs={1}>
            <Button color="primary" size="small" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h5" color="error">
          {`⚠️⚠️⚠️ Are you sure you want to DELETE Order with ID : ${order.encarrec} ⚠️⚠️⚠️`}
        </Typography>
        <Paper
          style={{
            margin: 'var(--size-xs)',
            padding: 'var(--size-xs)',
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={4}>
              Encarrec ID:
            </Grid>
            <Grid item xs={8}>
              {order.encarrec}
            </Grid>
            { order.clientId && 
                <>
                  <Grid item xs={4}>
                    Client ID:
                  </Grid>
                  <Grid item xs={8}>
                    {order.clientId}
                  </Grid>
                </>
            }
            <Grid item xs={4}>
              First Name:
            </Grid>
            <Grid item xs={8}>
              {order.firstName}
            </Grid>
            <Grid item xs={4}>
              Last Name:
            </Grid>
            <Grid item xs={8}>
              {order.lastName}
            </Grid>
            <Grid item xs={4}>
              Order Date:
            </Grid>
            <Grid item xs={8}>
              {String(order.newDate).substring(0, 10)}
            </Grid>
            <Grid item xs={4}>
              Status:
            </Grid>
            <Grid item xs={8}>
              {order.status}
            </Grid>
            <Grid item xs={4}>
              Payed:
            </Grid>
            <Grid
              item
              xs={8}
              style={{
                color: `${order.payed ? 'var(--secondary-color)' : 'red'}`,
              }}
            >
              {order.payed ? 'Yes' : 'No'}
            </Grid>
          </Grid>
        </Paper>
        <Typography variant="h6" color="primary">
          Ordered Products:
        </Typography>
        <Paper
          style={{
            margin: 'var(--size-xs)',
            padding: 'var(--size-xs)',
          }}
        >
          <TableContainer>
            <Table size="small" aria-label="Order Details Table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="body2" color="primary">
                      Còdigo Nacional:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="primary">
                      Description:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="primary">
                      Qty:
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={order._id}>
                  <TableCell component="th" scope="row">
                    {order.cn}
                  </TableCell>
                  <TableCell align="right">{order.description}</TableCell>
                  <TableCell align="right">{order.qty}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Grid container>
            <Grid item xs={8}></Grid>
            <Grid container item xs={4}>
            <IconButton
                variant='outline'
                style={{ color: 'red' }}
                size="large"
                onClick={() => handleDelete(order._id)}
            >
                <DeleteIcon /> Delete Order
            </IconButton>
          </Grid>
        </Grid>
        
      </Paper>
    </section>
  );
};

export default OrderDetails;
