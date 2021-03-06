import React, { useContext } from 'react';
import useStyles from './OrdersStyles';

import Paper from '@material-ui/core/Paper';

import { UserContext } from '../../../context/user';

export default function Orders() {
  const { user, loggedIn } = useContext(UserContext);
  const classes = useStyles();
  return <Paper className={classes.root}></Paper>;
}
