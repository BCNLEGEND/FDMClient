import React, { useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'pages/2021/node_modules/react-toastify/dist/ReactToastify.css';

import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import useStyles from './OrderStyles';
import Image from 'next/image';
import { MenuItem } from '@material-ui/core';

const CreateNewOrder = () => {
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

  const classes = useStyles();

  const handleDelete = (i) => {
    const newProducts = products.filter((product, index) => index != i);
    setProducts(newProducts);
  };

  const handleAddProduct = () => {
    if (!encarrec || !cn) {
      toast.error('Please fill-in "encarrec" or "Còdigo Nacional!');
      return;
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
            <Grid container item>
              <Grid item xs={12} spacing={4}>
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
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="mayorista"
                  name="mayorista"
                  label="Mayorista"
                  select
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
                  <IconButton onClick={handleAddProduct}>
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
                      <IconButton onClick={() => handleDelete(i)}>
                        <DeleteIcon color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </section>
  );
};

export default CreateNewOrder;
