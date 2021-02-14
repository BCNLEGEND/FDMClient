import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  form: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'var(--size-s)',
  },
  header: {
    color: 'var(--primary-color)',
  },
  nameContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    marginTop: '2rem',
    width: '100%',
  },
  text: {
    marginTop: '2rem',
    width: '100%',
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
});

export default useStyles;
