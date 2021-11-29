import React from 'react';
import { Paper, Grid, Button, Typography } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CloseIcon from '@mui/icons-material/Close';

const OrderEdit = ({ order, setOpenOrderEdit }) => {
  const handleClose = () => {
    setOpenOrderEdit(false);
  };

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
          <Grid item xs={11}></Grid> {/* PLACEHOLDER GRID TO POSITION X IN CORRECT PLACE */}
          <Grid item xs={1}>
            <Button color="primary" size="small" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h5" color="primary">
          {`Edit Order Details for order with ID : ${order._id}`}
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
            <Grid item xs={4}>
              Client ID:
            </Grid>
            <Grid item xs={8}>
              {order.clientId}
            </Grid>
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
              Total:
            </Grid>
            <Grid item xs={8}>
              {order.total}
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
                  {/* <TableCell>
                    <Typography variant="body2" color="primary">
                      Price:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="primary">
                      Total:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="primary">
                      Image:
                    </Typography>
                  </TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={order._id}>
                  <TableCell component="th" scope="row">
                    {order.cn}
                  </TableCell>
                  <TableCell align="right">{order.description}</TableCell>
                  <TableCell align="right">{order.qty}</TableCell>
                  {/* <TableCell align="right">{`€ ${order.price}`}</TableCell>
                  <TableCell align="right">
                    {`€ ${order.price * order.qty}`}
                  </TableCell> */}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Paper>
    </section>
  );
};

export default OrderEdit;