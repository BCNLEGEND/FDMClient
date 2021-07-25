import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { API_URL } from '@/utils/api';
import AuthContext from '@/context/AuthContext';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import useStyles from './AddOrderStyles';

export default function AddOrder() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [encarrec, setEncarrec] = useState();
  const [cn, setCN] = useState('');
  const [description, setDescription] = useState('');
  const [qty, setQty] = useState(1);
  const [payed, setPayed] = useState(false);
  const [coupon, setCoupon] = useState(false);
  const [status, setStatus] = useState('confirmed');
  const [comments, setComments] = useState('');

  const { user, loggedIn } = useContext(AuthContext);

  const router = useRouter();
  const api = API_URL;

  user.role === 'admin' || user.role === 'staff'
    ? useEffect(() => router.push('/admin/addOrder'), [])
    : useEffect(() => !loggedIn && router.push('/login'), []);

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'contact':
        setContact(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
        break;
      case 'cn':
        setCN(e.target.value);
        break;
      case 'qty':
        setQty(e.target.value);
        break;
      case 'encarrec':
        setEncarrec(e.target.value);
        break;
      case 'comments':
        setComments(e.target.value);
        break;
      case 'payed':
        setPayed(e.target.value);
        break;
      case 'coupon':
        setCoupon(e.target.value);
        break;
      case 'status':
        setStatus(e.target.value);
        break;
    }
  };

  const resetState = () => {
    setDescription('');
    setEncarrec();
    setCN('');
    setQty();
    setComments();
    setFirstName('');
    setLastName('');
    setContact('');
    setPayed(false);
    setCoupon(false);
    setStatus('confirmed');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwt');
    try {
      const res = await axios.post(
        `${api}orders/addorder`,
        {
          firstName,
          lastName,
          contact,
          description,
          encarrec,
          cn,
          qty,
          payed,
          coupon,
          status,
          comments,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      toggleLoggedIn();
      resetState();
      router.push('/admin/dashboard');
    } catch (e) {
      console.log(e);
      router.push('/');
    }
  };

  const handleSearch = async (e) => {
    try {
      const res = await axios.get(
        `https://cima.aemps.es/cima/rest/medicamento?cn=${cn}`
      );
      console.log(res.data);
      setDescription(res.data.nombre);
    } catch (e) {
      // @todo - handle error and insert toastify allert box
      console.log(e);
    }
  };

  const boolean = [
    {
      value: true,
      label: 'Yes',
    },
    {
      value: false,
      label: 'No',
    },
  ];
  const statusOptions = [
    {
      value: 'new',
      label: 'new',
    },
    {
      value: 'pending',
      label: 'pending',
    },
    {
      value: 'confirmed',
      label: 'confirmed',
    },
    {
      value: 'ordered',
      label: 'ordered',
    },
    {
      value: 'reception',
      label: 'reception',
    },
    {
      value: 'informed',
      label: 'informed',
    },
  ];

  return (
    <Paper
      style={{
        width: '95%',
        padding: 'var(--size-xs)',
        margin: 'var(--size-xxs) auto',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className={classes.nameGroup}>
          <TextField
            value={firstName}
            type="string"
            name="firstName"
            id="firstName"
            label="First Name"
            onChange={handleChange}
            className={classes.nameField}
          ></TextField>
          <TextField
            value={lastName}
            type="string"
            name="lastName"
            id="lastName"
            label="Last Name"
            onChange={handleChange}
            className={classes.nameField}
          ></TextField>
          <TextField
            value={contact}
            type="string"
            name="contact"
            id="contact"
            label="Contact Details"
            onChange={handleChange}
            className={classes.nameField}
          ></TextField>
        </div>
        <div className={classes.nameGroup}>
          <TextField
            required
            value={encarrec}
            type="number"
            name="encarrec"
            id="encarrec"
            label="No. Encarrec"
            onChange={handleChange}
            className={classes.numField}
          ></TextField>
          <TextField
            required
            value={cn}
            type="number"
            name="cn"
            id="cn"
            label="Cod. Nacional"
            onChange={handleChange}
            className={classes.numField}
          ></TextField>
          <Button onClick={handleSearch}>search</Button>
        </div>
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
            required
            value={qty}
            type="number"
            name="qty"
            id="qty"
            label="Qty"
            onChange={handleChange}
            className={classes.optionsField}
          ></TextField>
          <TextField
            id="payed"
            select
            name="payed"
            label="Payed"
            value={payed}
            onChange={handleChange}
            className={classes.optionsField}
          >
            {boolean.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            value={coupon}
            select
            name="coupon"
            id="coupon"
            label="Coupon"
            onChange={handleChange}
            className={classes.optionsField}
          >
            {boolean.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            value={status}
            select
            name="status"
            id="status"
            label="Order Status"
            onChange={handleChange}
            className={classes.optionsField}
          >
            {statusOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
        <div className={classes.btn}>
          <Button type="submit" variant="contained" color="primary">
            Add Order
          </Button>
        </div>
      </form>
    </Paper>
  );
}
