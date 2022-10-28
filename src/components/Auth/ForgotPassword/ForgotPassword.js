import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';

const ForgotPassword = ({
  setForgot,
  handleChange,
  email,
  passwordResetRequest,
}) => {
  const handleClose = () => {
    setForgot(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    passwordResetRequest(email);
    setForgot(false);
  };

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
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '50%',
          //   height: '25%',
          margin: '0 auto',
          padding: 'var(--size-xs)',
          backgroundColor: 'rgba(255,255,255)',
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={11}></Grid>
          <Grid item xs={1}>
            <IconButton aria-label="close-popup" onClick={handleClose} size="large">
              <CloseIcon color="primary" />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" color="primary">
              Reset your password?
            </Typography>
            <Typography variant="body2">
              Please enter your email address:{' '}
            </Typography>
          </Grid>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  label="Email"
                  variant="outlined"
                  onChange={handleChange}
                  autoFocus={false}
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Reset Password
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Typography
          variant="body2"
          style={{ color: '#ccc', margin: 'var(--size-xxs)' }}
        >
          We will send you an email with your password reset request.
        </Typography>
      </Paper>
    </section>
  );
};

export default ForgotPassword;
