import React, { useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import useStyles from './OrderStyles';
import AuthContext from '@/context/AuthContext';

const CreateNewOrder = () => {
  const [products, setProducts] = useState({});
  const [productId, setProductId] = useState(null);
  const [cn, setCN] = useState(null);
  const [description, setDescription] = useState(null);
  const [Qty, setQty] = useState(null);
  const [price, setPrice] = useState(null);
  const [img, setImg] = useState(null);
  const [coupon, setCoupon] = useState(null);
  const [encarrec, setEncarrec] = useState(null);
  const [orderTotal, setOrderTotal] = useState(0);
  const [payed, setPayed] = useState(false);

  const { user } = useContext(AuthContext);

  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Paper className={classes.paper}>
        <Typography variant="h3" component="h1" color="primary">
          Create a New order:
        </Typography>
      </Paper>
    </section>
  );
};

export default CreateNewOrder;
