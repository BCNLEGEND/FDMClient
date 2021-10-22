import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import useStyles from './MyOrdersStyles';
import { useRouter } from 'next/router';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { UserContext } from '../../../context/user';
import { OrderContext } from '../../../context/order';
import { API_URL } from '../../../utils/api';

import ActiveOrders from './ActiveOrders';
import ClosedOrders from './ClosedOrders';

export default function MyOrders() {
  const { loggedIn } = useContext(UserContext);
  const { changeOrder } = useContext(OrderContext);
  const classes = useStyles();
  const router = useRouter();
  const api = API_URL;

  // 0. check if user is loggedin ?
  // 0.1 If not redirect to login page.

  // 1. If loggedin, check what type of user we are?
  // -- possible user roles: user, staff, admin
  // -- if client only fetch individual client orders
  // -- if admin or staff fecth all orders
  loggedIn
    ? useEffect(async () => {
        const token = localStorage.getItem('jwt');
        try {
          const res = await axios.get(`${api}orders/myorders`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          changeOrder(res.data.data);
        } catch (err) {
          console.log(err);
          // router.push('/login/error');
        }
      }, [])
    : useEffect(() => !loggedIn && router.push('/login'), []);

  // 3. Display orders in screen
  return (
    // a. if length of order context is 0, place your first order
    // b. if length of order os > 0 display orders
    <main className={classes.root}>
      <Typography variant="h3" component="h1" className={classes.heading}>
        Your Orders:
      </Typography>
      <Paper className={classes.paper}>
        <ActiveOrders />
      </Paper>
      <Paper className={classes.paperClosed}>
        <ClosedOrders />
      </Paper>
    </main>
  );
}

// 3.1. Open orders first
// 3.2. Include edit button in the Open Orders
// 3.3. Include cancel button in the Open Orders
// 3.4. Dispable cancel button after x amount of time or phase
// 3.5. Historical Orders after
// 3.6. Include repeat order posibility in Historical Orders
