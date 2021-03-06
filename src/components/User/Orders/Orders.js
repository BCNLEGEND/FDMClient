import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import useStyles from './OrdersStyles';
import { useRouter } from 'next/router';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentIcon from '@material-ui/icons/Assignment';
import RepeatIcon from '@material-ui/icons/Repeat';

import { UserContext } from '../../../context/user';
import { OrderContext } from '../../../context/order';
import text from '../../Calendar/CalendarText';

export default function Orders() {
  const { user, loggedIn } = useContext(UserContext);
  const { order, changeOrder } = useContext(OrderContext);
  const classes = useStyles();
  const router = useRouter();

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
          const res = await axios.get(
            'http://127.0.0.1:8000/api/v1/orders/myorders',
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          changeOrder(res.data.data);
        } catch (err) {
          console.log(err);
          // router.push('/login/error');
        }
      }, [])
    : useEffect(() => !loggedIn && router.push('/login'), []);

  const activeOrders = order.map((order) => {
    const date = new Date(order.orderDate);
    return order.activeOrder ? (
      <Card key={order._id} className={classes.card}>
        <CardContent>
          <div className={classes.cardHeading}>
            <Typography variant="h5" component="h2">
              {order.description}
            </Typography>
            <Typography variant="h5" component="h2">
              {`${order.price} €`}
            </Typography>
          </div>
          <div className={classes.cardSubHeading}>
            <div className={classes.cardSubHeading}>
              <Typography variant="body2">CN: </Typography>
              <Typography variant="body2">{order.cn}</Typography>
            </div>
            <Typography variant="body2">{`${order.qty} und`}</Typography>
          </div>
          <Typography variant="body2">{`${date.getDate()} - ${
            text.ca.MONTHS[date.getMonth() + 1]
          } - ${date.getFullYear()}`}</Typography>
          <div className={classes.clientDetails}>
            <Typography variant="body1">{order.firstName}</Typography>
            <Typography variant="body1" className={classes.lastName}>
              {order.lastName}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <IconButton>
            <Tooltip title="Details">
              <AssignmentIcon />
            </Tooltip>
          </IconButton>
          <IconButton>
            <Tooltip title="Edit">
              <EditIcon />
            </Tooltip>
          </IconButton>
          <IconButton>
            <Tooltip title="Delete">
              <DeleteIcon />
            </Tooltip>
          </IconButton>
        </CardActions>
      </Card>
    ) : (
      ''
    );
  });

  const closedOrders = order.map((order) => {
    const date = new Date(order.orderDate);
    return !order.activeOrder ? (
      <Card key={order._id} className={classes.card}>
        <CardContent>
          <div className={classes.cardHeading}>
            <Typography variant="h5" component="h2">
              {order.description}
            </Typography>
            <Typography variant="h5" component="h2">
              {`${order.price} €`}
            </Typography>
          </div>
          <div className={classes.cardSubHeading}>
            <div className={classes.cardSubHeading}>
              <Typography variant="body2">CN: </Typography>
              <Typography variant="body2">{order.cn}</Typography>
            </div>
            <Typography variant="body2">{`${order.qty} und`}</Typography>
          </div>
          <Typography variant="body2">{`${date.getDate()} - ${
            text.ca.MONTHS[date.getMonth() + 1]
          } - ${date.getFullYear()}`}</Typography>
          <div className={classes.clientDetails}>
            <Typography variant="body1">{order.firstName}</Typography>
            <Typography variant="body1" className={classes.lastName}>
              {order.lastName}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <IconButton>
            <Tooltip title="Repeat Order">
              <RepeatIcon />
            </Tooltip>
          </IconButton>
        </CardActions>
      </Card>
    ) : (
      <Typography variant="subtitle1">
        There are no historical Orders in our database!
      </Typography>
    );
  });

  // 3. Display orders in screen
  return (
    // a. if length of order context is 0, place your first order

    // b. if length of order os > 0 display orders
    <main className={classes.root}>
      <Typography variant="h3" component="h1" className={classes.heading}>
        Your Orders:
      </Typography>
      <Paper className={classes.paper}>
        <Typography variant="h4" component="h2">
          Open Orders:{' '}
        </Typography>
        {activeOrders}
      </Paper>
      <Paper className={classes.paperClosed}>
        <Typography variant="h4" component="h2">
          Historical Orders:{' '}
        </Typography>
        {closedOrders}
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
