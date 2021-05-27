import React, { useState, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { OrderContext } from '../../context/order';

const columns = [
  {
    field: 'encarrec',
    headerName: 'No. Encarrec',
    width: 125,
  },
  {
    field: 'cn',
    headerName: 'CN',
    width: 100,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 250,
  },
  { field: 'qty', headerName: 'Qty', width: 85 },
  { field: 'firstName', headerName: 'First name', width: 120 },
  { field: 'lastName', headerName: 'Last name', width: 150 },

  {
    field: 'payed',
    headerName: 'Payed',
    width: 100,
  },
  {
    field: 'coupon',
    headerName: 'Cut Coupon',
    width: 125,
  },
  {
    field: 'newDate',
    headerName: 'Order Date',
    width: 150,
  },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'comments', headerName: 'Comments', width: 250 },
];

export default function ActiveOrders() {
  const { order } = useContext(OrderContext);
  const [editOrder, setEditOrder] = useState(undefined);
  const [dialogOpen, setDialogOpen] = useState(false);
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
  const openOrders = order.filter((order) => order.activeOrder);
  const allOpenOrders = openOrders.map((order, i) => {
    const date = new Date(order.newDate);
    return {
      ...order,
      id: i,
      newDate: `${date.getDate()} - ${
        date.getMonth() + 1
      } - ${date.getFullYear()}`,
    };
  });

  const handleChange = (e) => {
    console.log(e);
    editOrder[0][e.target.name] = e.target.value;
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

  const handleClose = () => {
    setDialogOpen(undefined);
    resetState();
    setDialogOpen(false);
  };

  const handleRowDoubleClick = (e) => {
    setDialogOpen(true);
    const selectedOrder = allOpenOrders.filter(
      (order) => order._id === e.row._id
    );
    setDescription(selectedOrder[0].description);
    setEncarrec(selectedOrder[0].encarrec);
    setCN(selectedOrder[0].cn);
    setQty(selectedOrder[0].qty);
    setComments(selectedOrder[0].comments);
    setFirstName(selectedOrder[0].firstName);
    setLastName(selectedOrder[0].lastName);
    setContact(selectedOrder[0].contact);
    setPayed(selectedOrder[0].payed);
    setCoupon(selectedOrder[0].coupon);
    setStatus(selectedOrder[0].status);
  };

  const handleEdit = () => {};

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
      <Typography variant="h4" component="h1">
        Open Orders:{' '}
      </Typography>
      <DataGrid
        rows={allOpenOrders}
        columns={columns}
        pageSize={10}
        // checkboxSelection
        autoHeight={true}
        onRowDoubleClick={handleRowDoubleClick}
      />
      {editOrder !== undefined ? (
        <Dialog
          open={dialogOpen}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <Typography varient="h5" component="h2">
              No. de Encarrec: {encarrec}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography variant="body1">{firstName}</Typography>
              <Typography variant="body1">{lastName}</Typography>
              <Typography variant="body1">{contact}</Typography>
              <Typography variant="h6" component="h4">
                CN: {cn}
              </Typography>
              <Typography variant="h6" component="h4">
                Descr: {description}
              </Typography>
            </DialogContentText>
            <TextField
              id="status"
              name="status"
              value={status}
              select
              label="Order Status"
              type="string"
            >
              {statusOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="payed"
              select
              name="payed"
              label="Payed"
              value={payed}
              onChange={handleChange}
            >
              {boolean.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="coupon"
              select
              name="coupon"
              label="Coupon"
              value={coupon}
              onChange={handleChange}
            >
              {boolean.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="qty"
              name="qty"
              label="Qty"
              value={qty}
              type="number"
              onChange={handleChange}
            ></TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleEdit} color="primary">
              Edit
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        ''
      )}
    </Paper>
  );
}
