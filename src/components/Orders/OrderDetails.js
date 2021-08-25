import React from 'react';
import { IMG_API } from '@/utils/api';
import { Paper, Grid, Button, Typography } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CloseIcon from '@material-ui/icons/Close';
import Image from 'next/image';

const OrderDetails = ({ order, setOpenOrderDetails }) => {
  const handleClose = () => {
    setOpenOrderDetails(false);
  };

  console.log(order.products);

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
          height: '100%',
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
        <Typography variant="h5" color="primary">
          {`Order Details for order with ID : ${order._id}`}
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
                  <TableCell>
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
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.products.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {product.cn}
                    </TableCell>
                    <TableCell align="right">{product.description}</TableCell>
                    <TableCell align="right">{product.qty}</TableCell>
                    <TableCell align="right">{`€ ${product.price}`}</TableCell>
                    <TableCell align="right">
                      {`€ ${product.price * product.qty}`}
                    </TableCell>
                    <TableCell align="center">
                      <Image
                        width={30}
                        height={30}
                        responsive
                        src={`${IMG_API}${product.img}`}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Paper>
    </section>
  );
};

export default OrderDetails;
