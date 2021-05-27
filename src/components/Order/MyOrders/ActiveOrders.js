import React, { useContext } from 'react';
import useStyles from './MyOrdersStyles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentIcon from '@material-ui/icons/Assignment';

import text from '../../Calendar/CalendarText';

import { OrderContext } from '../../../context/order';

export default function ActiveOrders() {
  const { order } = useContext(OrderContext);
  const classes = useStyles();
  const openOrders = order.filter((order) => order.activeOrder);

  const html = openOrders.map((order) => {
    const date = new Date(order.newDate);
    if (order.activeOrder) {
      return (
        <Card key={order._id} className={classes.card}>
          <CardContent>
            <div className={classes.cardHeading}>
              <Typography variant="h5" component="h2">
                {order.description}
              </Typography>
              <Typography variant="h5" component="h2">
                {order.price ? `${order.price} €` : '-'}
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
              text.ca.MONTHS[date.getMonth()]
            } - ${date.getFullYear()}`}</Typography>
            <div className={classes.clientDetails}>
              <Typography variant="body1">{order.firstName}</Typography>
              <Typography variant="body1" className={classes.lastName}>
                {order.lastName}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <IconButton onClick={() => handleDetails(order._id)}>
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
      );
    }
  });

  return (
    <section>
      <Typography variant="h4" component="h2">
        Open Orders:{' '}
      </Typography>
      {openOrders.length > 0 ? (
        html
      ) : (
        <Typography variant="subtitle1">
          There are no Open Orders in our database!
        </Typography>
      )}
    </section>
  );
}
