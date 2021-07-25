import { makeStyles } from '@material-ui/core/styles';
import sizes from '@/utils/mediaSizes';

const useStyles = makeStyles({
  container: {
    width: '85%',
    heigth: '85%',
    margin: '0 auto',
  },
  formContainer: {
    width: '90%',
    margin: '0 auto',
    marginTop: 'var(--size-xxs)',
    height: '88vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('md')]: {
      padding: '0 var(--size-m)',
      //   width: ' 80%',
    },
    [sizes.up('xl')]: {
      width: '70%',
    },
  },
  authContainer: {
    width: '70%',
  },
  form: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headingBox: {
    width: '100%',
    color: 'var(--primary-color)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  heading: {
    paddingLeft: '1rem',
    color: 'var(--primary-color)',
    alignSelf: 'flex-start',
  },
  text: {
    marginTop: '2rem',
    width: '90%',
  },
  btn: {
    marginTop: '2rem',
    backgroundColor: 'var(--primary-color-light)',
    width: '50%',
    alignSelf: 'center',
    '&:hover': {
      backgroundColor: 'var(--secondary-color)',
    },
  },
  forgot: {
    padding: '1rem',
    color: '#ccc',
    textDecoration: 'none',
    textAlign: 'center',
  },
  register: {
    padding: '0.2rem',
    color: '#ccc',
    textDecoration: 'none',
    textAlign: 'center',
  },
  link: {
    cursor: 'pointer',
  },
});

export default useStyles;
