import makeStyles from '@mui/styles/makeStyles';
const useStyles = makeStyles({
  container: {
    width: '85%',
    heigth: '85%',
    margin: '0 auto',
    padding: '1rem auto',
  },
  form: {
    width: '90%',
    margin: '0 auto',
    marginTop: 'var(--size-xxs)',
    height: '88vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: 'var(--primary-color)',
  },
  nameContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'var(--size-s)',
  },
  name: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: '2rem',
    width: '100%',
  },
  btn: {
    marginTop: '2rem',
    backgroundColor: 'var(--primary-color-light)',
    width: '25%',
    alignSelf: 'center',
    '&:hover': {
      backgroundColor: 'var(--secondary-color)',
    },
  },
});

export default useStyles;
