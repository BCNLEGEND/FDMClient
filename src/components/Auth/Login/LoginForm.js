import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import PersonIcon from '@material-ui/icons/Person';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { LanguageContext } from '@/context/language';
import AuthContext from '@/context/AuthContext';
import useStyles from './LoginFormStyles';
import text from './LoginFormText';

export default function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useContext(LanguageContext);
  const { login, error } = useContext(AuthContext);

  const router = useRouter();
  const classes = useStyles();

  useEffect(() => error && toast.error(error));

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
    // @todo - clean up the below code
    try {
      // toggleLoading();
      login({
        email,
        password,
      });

      setEmail('');
      setPassword('');
      // toggleLoading();
      // changeUser(res.data.data.user);
      // toggleLoggedIn(true);
    } catch (err) {
      // toggleLoading();
      // router.push('/login/error');
    }
  };

  return (
    <Paper elevation={3} className={classes.container}>
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
              <Link href="/" passHref>
                <p className={classes.forgot}>
                  {text[language].forgot}{' '}
                  <a className={classes.link}>{text[language].click}</a>
                </p>
              </Link>
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
    </Paper>
  );
}
