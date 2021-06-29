import React, { useContext } from 'react';
import useStyles from './MyOrdersStyles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import RepeatIcon from '@material-ui/icons/Repeat';

import { OrderContext } from '@/context/order';
import text from '../../Calendar/CalendarText';

export default function ClosedOrders() {
  const { order } = useContext(OrderContext);
  const classes = useStyles();
  const closedOrders = order.filter((order) => !order.activeOrder);

  const html = closedOrders.map((order) => {
    const date = new Date(order.orderDate);
    if (!order.activeOrder) {
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
            <IconButton>
              <Tooltip title="Repeat Order">
                <RepeatIcon />
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
        Historical Orders:{' '}
      </Typography>
      {closedOrders.length > 0 ? (
        html
      ) : (
        <Typography variant="subtitle1">
          There are no historical Orders in our database!
        </Typography>
      )}
    </section>
  );
}
