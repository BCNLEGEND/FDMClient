import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '@/context/AuthContext';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const ResetPassword = () => {
  const router = useRouter();
  const { passwordReset, success, error } = useContext(AuthContext);
  const { token } = router.query;
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== newPassword) {
        return false;
      }
      return true;
    });
  }, [confirmNewPassword]);

  useEffect(() => {
    ValidatorForm.addValidationRule('passwordRequiredLenght', (value) => {
      if (value.length < 8) {
        return false;
      }
      return true;
    });
  }, [newPassword]);

  useEffect(() => {
    return () => {
      ValidatorForm.removeValidationRule('isPasswordMatch');
      ValidatorForm.removeValidationRule('passwordRequiredLenght');
    };
  }, []);

  useEffect(() => {
    return (error && toast.error(error)) || (success && toast.success(success));
  }, [error, success]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'newPassword':
        setNewPassword(e.target.value);
        break;
      case 'confirmNewPassword':
        setConfirmNewPassword(e.target.value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    passwordReset({
      token,
      password: newPassword,
      passwordConfirm: confirmNewPassword,
    });
  };

  return (
    <main>
      <section
        style={{
          position: 'relative',
          backgroundColor: 'rgba(255,255,255,.7)',
          padding: 'var(--size-s)',
          width: '100vw',
          height: '100vh',
          zIndex: '100',
        }}
      >
        <ToastContainer />
        <Paper
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '50%',
            // margin: '0 auto',
            padding: 'var(--size-xs)',
            backgroundColor: 'rgba(255,255,255)',
          }}
        >
          <Typography
            variant="h4"
            color="primary"
            style={{
              marginBottom: 'var(--size-xxs)',
            }}
          >
            Please enter your new password:
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextValidator
                  value={newPassword}
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  label="Enter new password"
                  variant="outlined"
                  validators={['required']}
                  errorMessages={['this field is required']}
                  onChange={handleChange}
                  autoFocus={false}
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  value={confirmNewPassword}
                  type="password"
                  name="confirmNewPassword"
                  id="confirmNewPassword"
                  label="Please confirm new password"
                  variant="outlined"
                  validators={['isPasswordMatch', 'required']}
                  errorMessages={[
                    'password mismatch',
                    'this field is required',
                  ]}
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
                >
                  Reset Password
                </Button>
              </Grid>
            </Grid>
          </ValidatorForm>
        </Paper>
      </section>
    </main>
  );
};

export default ResetPassword;
