import React, { useState, useContext } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { UserContext } from '../../../context/user';
import styles from './LoginFormStyles';

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { changeUser, toggleLoggedIn } = useContext(UserContext);
  const router = useRouter();
  const { classes } = props;

  const handleChange = (e) => {
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'username') {
      setUsername(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      props.toggleLoading();
      const res = await axios.post('/api/v1/users/login', {
        email: username,
        password: password,
      });
      setUsername('');
      setPassword('');
      localStorage.setItem('jwt', res.data.token);
      changeUser(res.data.data.user);
      toggleLoggedIn(true);
      props.toggleLoading();
      router.push('/user/profile');
    } catch (err) {
      console.log(err);
      // router.push('/login/error');
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h2 className={classes.heading}>Already regitered? Please login:</h2>
      <TextField
        value={username}
        type="email"
        name="username"
        id="username"
        label="User Email"
        variant="outlined"
        onChange={handleChange}
        className={classes.text}
        autoFocus={false}
      />
      <TextField
        value={password}
        type="password"
        name="password"
        id="password"
        label="Password"
        variant="outlined"
        onChange={handleChange}
        className={classes.text}
        autoFocus={false}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.btn}
      >
        Login
      </Button>
      <Link href="/">
        <p className={classes.forgot}>Forgot your password? click here</p>
      </Link>
    </form>
  );
}

export default withStyles(styles)(LoginForm);
