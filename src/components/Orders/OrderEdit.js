import React, {useState, useContext}from 'react';
import { Paper, Grid, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CloseIcon from '@mui/icons-material/Close';

import OrderContext from '@/context/OrderContext'

const OrderEdit = ({ order, setOpenOrderEdit }) => {
  const [saveChanges, setSaveChanges] = useState(false);
  const [status, setStatus] = useState(order.status)
  const [payed, setPayed] = useState(order.payed)
  const [qty, setQty] = useState(order.qty)
  const {updateOrder} = useContext(OrderContext)
  
  const handleClose = () => {
    setOpenOrderEdit(false);
  };

  const handleChange = (e) => {
    setSaveChanges(true)
    switch (e.target.name) {
      case 'status':
        setStatus(e.target.value);
        break;
      case 'payed':
        setPayed(e.target.value);
        break;
      case 'qty':
        setQty(e.target.value);
        break;
    }

  }

  const handleSubmit = () => {
    const updatedOrder = {...order, status, payed, qty}
    updateOrder(updatedOrder)
    setOpenOrderEdit(false);
  }
  return (
    <section
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        backgroundColor: 'rgba(255,255,255,.7)',
        padding: 'var(--size-s)',
        width: '100vw',
        height: '100vh',
        zIndex: '100',
      }}
    >
      <Paper
        style={{
          width: '75%',
          margin: '0 auto',
          padding: 'var(--size-xs)',
          backgroundColor: 'rgba(255,255,255,.9)',
        }}
      >
        <Grid container>
          <Grid item xs={9}></Grid> {/* PLACEHOLDER GRID TO POSITION X IN CORRECT PLACE */}
          <Grid item xs={2}>
            <Button 
              disabled={!saveChanges} 
              variant='contained' 
              color='secondary'
              onClick={handleSubmit}>  
                Save Changes
              </Button>
          </Grid>
          <Grid item xs={1}>
            <Button color="primary" size="small" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h5" color="primary">
          {`Edit Order Details for order with ID : ${order.encarrec}`}
        </Typography>
        <Paper
          style={{
            margin: 'var(--size-xs)',
            padding: 'var(--size-xs)',
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={4}>
              Encarrec ID:
            </Grid>
            <Grid item xs={8}>
              {order.encarrec}
            </Grid>
            {order.clientId 
                && (<>
                      <Grid item xs={4}>
                        Client ID:
                      </Grid>
                      <Grid item xs={8}>
                        {order.clientId}
                      </Grid>
                    </>)
            }
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
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                    style={{ width: '60%'}}
                    labelId="status-label"
                    name='status'
                    id="status"
                    value={status}
                    label="status"
                    onChange={handleChange}
                >
                    <MenuItem value={'new'}>New</MenuItem>
                    <MenuItem value={'ordered'}>Ordered</MenuItem>
                    <MenuItem value={'reception'}>Received</MenuItem>
                    <MenuItem value={'informed'}>Informed</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={4}>
              Payed:
            </Grid>
            <Grid
              item
              xs={8}
            >
             <InputLabel id="payed-label">Payed</InputLabel>
                <Select
                    style={{ color: `${payed ? 'var(--secondary-color)' : 'red'}`, width: '60%'}}
                    labelId="payed-label"
                    name='payed'
                    id="payed"
                    value={payed}
                    label="payed"
                    onChange={handleChange}
                >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                </Select>
            </Grid>
          </Grid>
        </Paper>
        <Typography variant="h6" color="primary">
          Ordered Products:
        </Typography>
        <Paper
          style={{
            margin: 'var(--size-xs)',
            padding: 'var(--size-xs)',
          }}
        >
          <TableContainer>
            <Table size="small" aria-label="Order Details Table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="body2" color="primary">
                      Còdigo Nacional:
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body2" color="primary">
                      Description:
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body2" color="primary">
                      Mayorista:
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body2" color="primary">
                      Qty:
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={order._id}>
                  <TableCell component="th" scope="row">
                    {order.cn}
                  </TableCell>
                  <TableCell align="left">{order.description}</TableCell>
                  <TableCell align="left">{order.mayorista}</TableCell>
                  <TableCell align="right">
                  <TextField
                      style={{ width : '15%'}}
                      id="outlined-number"
                      label='qty'
                      name='qty'
                      type="number"
                      value={qty}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={handleChange}
                    />
                    </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Paper>
    </section>
  );
};

export default OrderEdit;