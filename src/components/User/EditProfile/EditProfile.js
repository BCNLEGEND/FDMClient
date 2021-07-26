import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import AuthContext from '@/context/AuthContext';

import useStyles from './EditProfileStyles';

export default function userProfile() {
  const { user, updateUserDetails, checkUserLoggedIn } = useContext(
    AuthContext
  );
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [birthday, setBirthday] = useState(user.birthday);
  const [gender, setGender] = useState(user.gender);
  const [tel, setTel] = useState(user.tel);
  const [mobile, setMobile] = useState(user.mobile);
  const [dni, setDni] = useState(user.dni);
  const [cip, setCip] = useState(user.cip);
  const [streetName, setStreetName] = useState(user.streetName);
  const [streetNumber, setStreetNumber] = useState(user.streetNumber);
  const [postalCode, setPostalCode] = useState(user.postalCode);
  const [city, setCity] = useState(user.city);
  const [acceptDatos, setAcceptDatos] = useState(user.acceptDatos);
  const [acceptMKT, setAcceptMKT] = useState(user.acceptMKT);

  const classes = useStyles();

  useEffect(() => {
    if (!user) {
      router.push('/account/login');
    }
  }, [user]);

  const handleBirthdayChange = (date) => {
    setBirthday(date);
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
      case 'gender':
        setGender(e.target.value);
        break;
      case 'tel':
        setTel(e.target.value);
        break;
      case 'mobile':
        setMobile(e.target.value);
        break;
      case 'dni':
        setDni(e.target.value);
        break;
      case 'cip':
        setCip(e.target.value);
        break;
      case 'streetName':
        setStreetName(e.target.value);
        break;
      case 'streetNumber':
        setStreetNumber(e.target.value);
        break;
      case 'postalCode':
        setPostalCode(e.target.value);
        break;
      case 'city':
        setCity(e.target.value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      firstName,
      lastName,
      email,
      birthday,
      gender,
      mobile,
      tel,
      dni,
      cip,
      streetName,
      streetNumber,
      postalCode,
      city,
      acceptDatos,
      acceptMKT,
    };
    updateUserDetails(updatedUser);
    //   @TODO DEFINE THE HANDLE SUBMIT FUNCTION FOR THE PROFILE UPDATE FORM
  };

  return (
    <section className={classes.root}>
      <Grid
        className={classes.gridContainer}
        container
        justifyContent="space-evenly"
      >
        <Grid item xs={12}>
          <Link href="/user/dashboard">
            <Button
              variant="outlinned"
              color="primary"
              className={classes.button}
            >
              <ArrowBackIosIcon fontSize="small" /> Go Back
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Paper className={classes.paper}>
        <form className={classes.form}>
          <Grid
            className={classes.gridContainer}
            container
            spacing={4}
            justifyContent="space-evenly"
          >
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="first Name"
                value={firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="last Name"
                value={lastName}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid
            className={classes.gridContainer}
            container
            spacing={4}
            justifyContent="space-evenly"
          >
            <Grid item xs={12} md={4}>
              <TextField
                required
                id="email"
                name="email"
                type="text"
                label="email"
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="tel"
                name="tel"
                type="text"
                label="tel"
                value={tel}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="mobile"
                name="mobile"
                type="text"
                label="mobile"
                value={mobile}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid
            className={classes.gridContainer}
            container
            spacing={4}
            justifyContent="space-evenly"
          >
            <Grid item xs={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  id="birthday"
                  name="birthday"
                  format="dd/MM/yyyy"
                  label="Birthday"
                  value={birthday}
                  onChange={handleBirthdayChange}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                >
                  <MenuItem value={'male'}>Male</MenuItem>
                  <MenuItem value={'female'}>Female</MenuItem>
                  <MenuItem value={'undefined'}>Undefined</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            className={classes.gridContainer}
            container
            spacing={4}
            justifyContent="space-evenly"
          >
            <Grid item xs={12} md={6}>
              <TextField
                id="dni"
                name="dni"
                type="text"
                label="dni"
                value={dni}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="cip"
                name="cip"
                type="text"
                label="cip"
                value={cip}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid
            className={classes.gridContainer}
            container
            spacing={4}
            justifyContent="space-evenly"
          >
            <Grid item xs={12} md={3}>
              <TextField
                id="streetName"
                name="streetName"
                type="text"
                label="streetName"
                value={streetName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                id="streetNumber"
                name="streetNumber"
                type="number"
                label="streetNumber"
                value={streetNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                id="postalCode"
                name="postalCode"
                type="text"
                label="postalCode"
                value={postalCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                id="city"
                name="city"
                type="text"
                label="city"
                value={city}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid
            className={classes.gridContainer}
            container
            spacing={4}
            justifyContent="space-evenly"
          >
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={acceptDatos}
                    onClick={() => setAcceptDatos(!acceptDatos)}
                  />
                }
                label="Accepts Privacy Policy"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={acceptMKT}
                    onClick={() => setAcceptMKT(!acceptMKT)}
                  />
                }
                label="Accepts MKT communication"
              />
            </Grid>
          </Grid>
          <Grid
            className={classes.gridContainer}
            container
            spacing={4}
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<EditIcon />}
                onClick={handleSubmit}
              >
                Update Profile
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </section>
  );
}

export async function getServerSideProps(context) {
  checkUserLoggedIn();
  return {
    props: {}, // will be passed to the page component as props
  };
}
