import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import useStyles from './OrderStyles';
import { MenuItem } from '@mui/material';

import OrderContext from '@/context/OrderContext';

const CreateNewOrder = () => {
  const {error, success, createNewOrder} = useContext(OrderContext)
  const [products, setProducts] = useState([]);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  const [encarrec, setEncarrec] = useState(null);
  const [mayorista, setMayorista] = useState(null);
  const [cn, setCN] = useState(null);
  const [description, setDescription] = useState(null);
  const [qty, setQty] = useState(1);
  const [payed, setPayed] = useState(false);
  const [coupon, setCoupon] = useState(false);

  const [submit, setSubmit] = useState(false)

  const router = useRouter()

  const classes = useStyles();

// Check if order is correctly passed

useEffect(
  () => (error && toast.error(error)) || (success && toast.success(success)),
  [error, success]
);

// FORM FUNCTIONALITIES

  const handleDelete = (i) => {
    const newProducts = products.filter((product, index) => index != i);
    setProducts(newProducts);
  };

  const handleAddProduct = () => {

    if (!encarrec || !cn) {
      toast.error('Please fill-in "encarrec" or "Còdigo Nacional!');
      return;
    }
    if (!submit) {
      setSubmit(true)
    }
    const newProductsList = [
      ...products,
      { encarrec, mayorista, cn, qty, description, payed, coupon },
    ];
    setProducts(newProductsList);
    setEncarrec('');
    setMayorista('');
    setCN('');
    setDescription('');
    setQty(1);
    setPayed(false);
    setCoupon(false);
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      case 'payed':
        setPayed(e.target.value);
        break;
      case 'encarrec':
        setEncarrec(e.target.value);
        break;
      case 'mayorista':
        setMayorista(e.target.value);
        break;
      case 'cn':
        setCN(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
        break;
      case 'qty':
        setQty(e.target.value);
        break;
      case 'coupon':
        setCoupon(e.target.value);
        break;
    }
  };

  const handleSearch = async () => {
    const res = await axios.get(
      `https://cima.aemps.es/cima/rest/medicamento?cn=${cn}`
    );
    if (res.status === 200) {
      setDescription(res.data.nombre);
    } else {
      toast.error('No product found with that CN number!');
    }
  };

// @TODO - API PUT REQUEST IMPLEMENTATION

  const handleSubmit = () => {
    const client = {firstName, lastName, email, phone}
    const newOrder = {client, products}
    createNewOrder(newOrder)
  }

  return (
    <section className={classes.section}>
      <ToastContainer />
      <Paper className={classes.paper}>
        <Typography variant="h3" component="h1" color="primary">
          Crea nou encarrec:
        </Typography>
        <form>
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={2}
          >
            <Grid container item spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h5" component="h3" color="primary">
                  Detalls Client:
                </Typography>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={6}>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="Nom"
                  type="text"
                  variant="standard"
                  value={firstName}
                  required
                  style={{ width: '75%' }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Cognom"
                  type="text"
                  variant="standard"
                  value={lastName}
                  required
                  style={{ width: '75%' }}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={6}>
                <TextField
                  id="phone"
                  name="phone"
                  label="Nº Movìl"
                  type="text"
                  variant="standard"
                  value={phone}
                  required
                  style={{ width: '75%' }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  type="mail"
                  variant="standard"
                  value={email}
                  style={{ width: '75%' }}
                  onChange={handleChange}
                ></TextField>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={4}>
                <Typography
                  variant="body2"
                  color="#757575"
                  style={{ marginTop: 'var(--size-xxs)', width: '75%' }}
                >
                  Total Productos:
                </Typography>
                <Typography className="fw-bold" variant="body1" color="primary">
                  {products.length}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="body2"
                  color="#757575"
                  style={{ marginTop: 'var(--size-xxs)', width: '75%' }}
                >
                  Productos Pagats:
                </Typography>
                <Typography
                  className="fw-bold"
                  variant="body1"
                  color="secondary"
                >
                  {products.filter((prd) => prd.payed).length}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="body2"
                  color="#757575"
                  style={{ marginTop: 'var(--size-xxs)', width: '75%' }}
                >
                  Products No Pagats :
                </Typography>
                <Typography className="fw-bold" variant="body1" color="error">
                  {products.filter((prd) => !prd.payed).length}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={12} spacing={4}>
                <Typography variant="h5" component="h3" color="primary">
                  Add Product:
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="encarrec"
                  name="encarrec"
                  label="Nº de Encarrec"
                  type="number"
                  variant="standard"
                  value={encarrec}
                  onChange={handleChange}
                  style={{ marginTop: 'var(--size-xxs)', width: '75%' }}
                ></TextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="cn"
                  name="cn"
                  label="Còdig Nacional"
                  type="text"
                  variant="standard"
                  value={cn}
                  onChange={handleChange}
                  style={{ marginTop: 'var(--size-xxs)', width: '75%' }}
                ></TextField>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                style={{ marginTop: 'var(--size-xxs)', width: '75%' }}
              >
                <IconButton onClick={handleSearch} size="large">
                  <SearchIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="mayorista"
                  name="mayorista"
                  label="Mayorista"
                  select
                  variant="standard"
                  value={mayorista}
                  onChange={handleChange}
                  style={{ marginTop: 'var(--size-xxs)', width: '75%' }}
                >
                  <MenuItem key="1" value="Alliance">
                    Alliance
                  </MenuItem>
                  <MenuItem key="2" value="Hefame">
                    Hefame
                  </MenuItem>
                  <MenuItem key="3" value="Boiron">
                    Boiron
                  </MenuItem>
                  <MenuItem key="4" value="Actibios">
                    Actibios
                  </MenuItem>
                  <MenuItem key="5" value="Feliu Badalo">
                    Feliu Badalo
                  </MenuItem>
                  <MenuItem key="6" value="Formula">
                    Formula Magistral
                  </MenuItem>
                  <MenuItem key="7" value="Vacunas">
                    Vacunas
                  </MenuItem>
                  <MenuItem key="8" value="Otros">
                    Altre
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="description"
                  name="description"
                  type="text"
                  label="Descripciò de producte"
                  value={description}
                  variant="standard"
                  required
                  style={{ marginTop: 'var(--size-xxs)', width: '90%' }}
                  onChange={handleChange}
                ></TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id="qty"
                  name="qty"
                  type="number"
                  label="Qty"
                  value={qty}
                  variant="standard"
                  required
                  onChange={handleChange}
                  style={{ marginTop: 'var(--size-xxs)', width: '75%' }}
                ></TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  id="payed"
                  name="payed"
                  label="Pagat"
                  required
                  variant="standard"
                  style={{ width: '25%' }}
                  onChange={handleChange}
                  style={{ marginTop: 'var(--size-xxs)', width: '75%' }}
                >
                  <MenuItem key="1" value={true}>
                    Si
                  </MenuItem>
                  <MenuItem key="2" value={false}>
                    No
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  id="coupon"
                  name="coupon"
                  label="Retallar Coupo?"
                  variant="standard"
                  required
                  style={{ marginTop: 'var(--size-xxs)', width: '75%' }}
                  onChange={handleChange}
                >
                  <MenuItem key="1" value={true}>
                    Si
                  </MenuItem>
                  <MenuItem key="2" value={false}>
                    No
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid
                container
                item
                spacing={2}
                justifyContent="center"
                style={{ marginTop: 'var(--size-xxs)' }}
              >
                <Grid item xs={12}>
                  <IconButton onClick={handleAddProduct} size="large">
                    <AddCircleOutlineIcon color="secondary" size="large" />
                    <Typography variant="button" color="secondary">
                      {' '}
                      Add product
                    </Typography>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {products.length > 0 && (
        <Paper className={classes.paper}>
          <Typography variant="h4" component="h2" color="primary">
            Ordered products:
          </Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="body2" color="primary">
                      nº de Encarrec
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="primary">
                      Còd. Nacional
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="primary">
                      Description
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="primary">
                      Qty
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="primary">
                      Payed
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="primary">
                      Retallar
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="primary">
                      Mayorista
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, i) => (
                  <TableRow key={i}>
                    <TableCell>{product.encarrec}</TableCell>
                    <TableCell>{product.cn}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>{product.qty}</TableCell>
                    <TableCell>
                      {product.payed ? (
                        <DoneAllIcon color="secondary" />
                      ) : (
                        <CloseIcon color="error" />
                      )}
                    </TableCell>
                    <TableCell>
                      {product.coupon ? (
                        <DoneAllIcon color="error" />
                      ) : (
                        <CloseIcon color="secondary" />
                      )}
                    </TableCell>
                    <TableCell>{product.mayorista}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDelete(i)} size="large">
                        <DeleteIcon color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {submit && 
            (<IconButton onClick={handleSubmit} size="large">
                <AddCircleOutlineIcon color="secondary" size="large" />
                <Typography variant="button" color="secondary">
                  {' '}
                  Save Order
                </Typography>
              </IconButton>)}
        </Paper>
      )}
    </section>
  );
};

export default CreateNewOrder;
