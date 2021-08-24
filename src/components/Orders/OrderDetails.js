import React from 'react';
import { Paper, Grid, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const OrderDetails = ({ order, setOpenOrderDetails }) => {
  console.log(order);

  const handleClose = () => {
    setOpenOrderDetails(false);
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
          height: '75vh',
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
        <Grid container spacing={1}>
          <Grid item xs={4}>
            Encarrec ID:
          </Grid>
          <Grid item xs={8}>
            {order.encarrec}
          </Grid>
          <Grid item xs={4}>
            Order ID:
          </Grid>
          <Grid item xs={8}>
            {order._id}
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
    </section>
  );
};

export default OrderDetails;
