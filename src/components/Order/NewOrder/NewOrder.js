import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BackspaceIcon from '@material-ui/icons/Backspace';

import useStyles from './NewOrderStyles';
import { Typography, Link } from '@material-ui/core';
import { API_URL } from '@/utils/api';

export default function NewOrder() {
  const classes = useStyles();
  const [description, setDescription] = useState('');
  const [cn, setCN] = useState('');
  const [qty, setQty] = useState();
  const [comments, setComments] = useState('');
  const router = useRouter();
  const api = API_URL;

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'description':
        setDescription(e.target.value);
        break;
      case 'cn':
        setCN(e.target.value);
        break;
      case 'qty':
        setQty(e.target.value);
        break;
      case 'comments':
        setComments(e.target.value);
        break;
    }
  };

  const resetState = () => {
    setDescription('');
    setCN('');
    setQty();
    setComments();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwt');
    try {
      const res = await axios.post(
        `${api}orders/`,
        {
          description,
          cn,
          qty,
          comments,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      toggleLoggedIn();
      resetState();
      router.push('/orders/my-orders');
    } catch (e) {
      console.log(e);
      router.push('/');
    }
  };

  return (
    <section>
      <Paper className={classes.root}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            required
            value={description}
            type="text"
            name="description"
            id="description"
            label="Product Description"
            onChange={handleChange}
            validators={['required']}
            className={classes.textField}
          />
          <div className={classes.numGroup}>
            <TextField
              value={cn}
              type="number"
              name="cn"
              id="cn"
              label="Cod. Nacional"
              onChange={handleChange}
              className={classes.numField}
            ></TextField>
            <TextField
              required
              value={qty}
              type="number"
              name="qty"
              id="qty"
              label="Qty"
              onChange={handleChange}
              className={classes.numField}
            ></TextField>
          </div>
          <TextField
            multiline
            rows={3}
            value={comments}
            type="text"
            name="comments"
            id="comments"
            label="Comentarios"
            onChange={handleChange}
            className={classes.textField}
          ></TextField>
          <div className={classes.actionBox}>
            <Link href="/user/profile">
              <IconButton color="primary">
                <BackspaceIcon />
                <Typography className={classes.btnText} variant="subtitle1">
                  Go back
                </Typography>
              </IconButton>
            </Link>
            <IconButton color="secondary" type="submit">
              <AddShoppingCartIcon />
              <Typography className={classes.btnText} variant="subtitle1">
                Place order
              </Typography>
            </IconButton>
          </div>
        </form>
      </Paper>
    </section>
  );
}
