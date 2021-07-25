import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useContext, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import AuthContext from '@/context/AuthContext';
import { LanguageContext } from '@/context/language';

import useStyles from './SignupFormStyles';
import text from './SignupFormText';

export default function SignupForm(props) {
  const { register, error } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [acceptDatos, setAcceptDatos] = useState(false);
  const [acceptMKT, setAcceptMKT] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== password) {
        return false;
      }
      return true;
    });
  }, [passwordConfirm]);

  useEffect(() => {
    ValidatorForm.addValidationRule('passwordRequiredLenght', (value) => {
      if (value.length < 8) {
        return false;
      }
      return true;
    });
  }, [password]);

  useEffect(() => {
    return () => {
      ValidatorForm.removeValidationRule('isPasswordMatch');
      ValidatorForm.removeValidationRule('passwordRequiredLenght');
    };
  }, []);

  useEffect(() => error && toast.error(error));

  const html = (
    <p class="datos">
      He leído y acepto la{' '}
      <a href="legal/datos">política de protección de datos</a>.
    </p>
  );

  const html2 = (
    <p class="datos">
      Acepto recibir communicaciones por parte de Farmacìa del Mar.
    </p>
  );

  const resetState = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
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
      case 'password':
        setPassword(e.target.value);
        break;
      case 'passwordConfirm':
        setPasswordConfirm(e.target.value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (acceptDatos) {
      register({
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
        acceptDatos,
        acceptMKT,
      });
    } else {
      toast.error('Please accept our Privacy Policy!');
    }
  };

  return (
    <Paper elevation={3} className={classes.container}>
      <ToastContainer />
      <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
        <h2 className={classes.header}>{text[language].title}</h2>
        <div className={classes.nameContainer}>
          <TextValidator
            value={firstName}
            type="text"
            name="firstName"
            id="firstName"
            label={text[language].firstName}
            variant="outlined"
            className={classes.name}
            onChange={handleChange}
            validators={['required']}
            errorMessages={['this field is required']}
            autoFocus={false}
          />
          <TextValidator
            value={lastName}
            type="text"
            name="lastName"
            id="lastName"
            label={text[language].lastName}
            variant="outlined"
            className={classes.name}
            onChange={handleChange}
            validators={['required']}
            errorMessages={['this field is required']}
            autoFocus={false}
          />
        </div>
        <div className={classes.inputContainer}>
          <TextValidator
            value={email}
            type="email"
            name="email"
            id="email"
            label={text[language].email}
            variant="outlined"
            className={classes.text}
            onChange={handleChange}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
            autoFocus={false}
          />
          <TextValidator
            value={password}
            type="password"
            name="password"
            id="passwordSignup"
            label={text[language].pass}
            variant="outlined"
            className={classes.text}
            onChange={handleChange}
            validators={['required', 'passwordRequiredLenght']}
            errorMessages={[
              'this field is required',
              'Password needs to be min. 8 char. in length',
            ]}
            autoFocus={false}
          />
          <TextValidator
            value={passwordConfirm}
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            label={text[language].passConfirm}
            variant="outlined"
            className={classes.text}
            onChange={handleChange}
            validators={['isPasswordMatch', 'required']}
            errorMessages={['password mismatch', 'this field is required']}
            autoFocus={false}
          />
        </div>
        <FormControlLabel
          control={
            <Checkbox
              checked={acceptDatos}
              onChange={() => setAcceptDatos(!acceptDatos)}
              name="checkedB"
              color="primary"
            />
          }
          label={html}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={acceptMKT}
              onChange={() => setAcceptMKT(!acceptMKT)}
              name="checkedB"
              color="primary"
            />
          }
          label={html2}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.btn}
        >
          {text[language].signup}
        </Button>
      </ValidatorForm>
    </Paper>
  );
}
