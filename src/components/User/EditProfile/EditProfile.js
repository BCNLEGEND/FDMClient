import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
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
import { LanguageContext } from '@/context/language';

import useStyles from './EditProfileStyles';
import text from './EditProfileText';

export default function EditProfile() {
  const { user, updateUserDetails } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);
  const [firstName, setFirstName] = useState(user.firstName);
  const [photo, setPhoto] = useState(user.photo);
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
  const [postalcode, setPostalcode] = useState(user.postalcode);
  const [city, setCity] = useState(user.city);
  const [acceptDatos, setAcceptDatos] = useState(user.acceptDatos);
  const [acceptMKT, setAcceptMKT] = useState(user.acceptMKT);
  const router = useRouter();

  const classes = useStyles();

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
      case 'postalcode':
        setPostalcode(e.target.value);
        break;
      case 'city':
        setCity(e.target.value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      photo,
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
      postalcode,
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
          <Link href="/user/profile">
            <Button color="primary" className={classes.button}>
              <ArrowBackIosIcon fontSize="small" /> {text[language].back}
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
                label={text[language].firstName}
                value={firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label={text[language].lastName}
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
                label="Email"
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="tel"
                name="tel"
                type="text"
                label="Tel"
                value={tel}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="mobile"
                name="mobile"
                type="text"
                label={text[language].mob}
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
                  label={text[language].bday}
                  value={birthday}
                  onChange={handleBirthdayChange}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="gender">{text[language].gender}</InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                >
                  <MenuItem value={'male'}>{text[language].male}</MenuItem>
                  <MenuItem value={'female'}>{text[language].female}</MenuItem>
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
                label="DNI/ NIE"
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
                label={text[language].streetName}
                value={streetName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                id="streetNumber"
                name="streetNumber"
                type="number"
                label={text[language].streetNumber}
                value={streetNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                id="postalcode"
                name="postalcode"
                type="text"
                label={text[language].pCode}
                value={postalcode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                id="city"
                name="city"
                type="text"
                label={text[language].city}
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
                {text[language].update}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </section>
  );
}
