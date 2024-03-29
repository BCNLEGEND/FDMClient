import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';

import PersonIcon from '@mui/icons-material/Person';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import { LanguageContext } from '@/context/language';
import AuthContext from '@/context/AuthContext';
import useStyles from './LoginFormStyles';
import text from './LoginFormText';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

export default function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [forgot, setForgot] = useState(false);
  const { language } = useContext(LanguageContext);
  const { loggedIn, login, error, success, passwordResetRequest } = useContext(
    AuthContext
  );

  const classes = useStyles();

  useEffect(
    () => (error && toast.error(error)) || (success && toast.success(success)),
    [error, success]
  );

  // @todo - check if this function will stay or that I will take it out
  // const toggleLoading = () => {
  //   setIsLoading(!isLoading);
  // };

  const handleChange = (e) => {
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {forgot && (
        <ForgotPassword
          setForgot={setForgot}
          handleChange={handleChange}
          email={email}
          passwordResetRequest={passwordResetRequest}
        />
      )}
      <Paper elevation={3} className={classes.container}>
        {loggedIn ? (
          <CircularProgress />
        ) : (
          <div className={classes.formContainer}>
            <ToastContainer />
            {isLoading && <CircularProgress />}
            <div className={classes.authContainer}>
              {!isLoading && (
                <form className={classes.form} onSubmit={handleSubmit}>
                  <div className={classes.headingBox}>
                    <PersonIcon />
                    <h2 className={classes.heading}>{text[language].title}</h2>
                  </div>
                  <TextField
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    label={text[language].email}
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
                    label={text[language].pass}
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
                    {text[language].login}
                  </Button>
                  {/* @TODO develop this so that this goes to Password reset page */}
                  <p className={classes.forgot}>
                    {text[language].forgot}{' '}
                    <Button
                      className={classes.link}
                      onClick={() => setForgot(true)}
                      size="small"
                      style={{ color: '#ccc' }}
                    >
                      {text[language].click}
                    </Button>
                  </p>
                  <Link href="/account/register" passHref>
                    <p className={classes.register}>
                      {text[language].register}{' '}
                      <a className={classes.link}>{text[language].click}</a>
                    </p>
                  </Link>
                </form>
              )}
            </div>
          </div>
        )}
      </Paper>
    </>
  );
}
