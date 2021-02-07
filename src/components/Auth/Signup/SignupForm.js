import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { UserContext } from '../../../context/user';
import styles from './SignupFormStyles';

function SignupForm(props) {
  const router = useRouter();
  const { changeUser, toggleLoggedIn } = useContext(UserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

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

  const resetState = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword();
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
    try {
      props.toggleLoading();
      const res = await axios.post(
        'https://api-farmacia-del-mar.herokuapp.com/api/v1/users/signup',
        {
          firstName,
          lastName,
          email,
          password,
          passwordConfirm,
        }
      );
      console.log(res);
      localStorage.setItem('jwt', res.data.token);
      changeUser(res.data.data.user);
      toggleLoggedIn();
      resetState();
      props.toggleLoading();
      router.push('/user/profile');
    } catch (e) {
      console.log(e);
      router.push('/');
    }
  };
  const { classes } = props;
  return (
    <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
      <h2 className={classes.header}>New? Please Signup:</h2>
      <div className={classes.nameContainer}>
        <TextValidator
          value={firstName}
          type="text"
          name="firstName"
          id="firstName"
          label="First Name"
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
          label="Last Name"
          variant="outlined"
          className={classes.name}
          onChange={handleChange}
          validators={['required']}
          errorMessages={['this field is required']}
          autoFocus={false}
        />
      </div>
      <TextValidator
        value={email}
        type="email"
        name="email"
        id="email"
        label="User Email"
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
        label="Password"
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
        label="Confirm Password"
        variant="outlined"
        className={classes.text}
        onChange={handleChange}
        validators={['isPasswordMatch', 'required']}
        errorMessages={['password mismatch', 'this field is required']}
        autoFocus={false}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.btn}
      >
        Signup
      </Button>
    </ValidatorForm>
  );
}

export default withStyles(styles)(SignupForm);
