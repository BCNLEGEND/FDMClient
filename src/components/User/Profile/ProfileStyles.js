import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    height: '80vh',
    width: '80%',
    margin: '0 auto',
    marginTop: 'var(--size-s)',
    color: 'var(--primary-color)',
  },
  root: {
    paddingTop: 'var(--size-xs)',
    width: '90%',
    margin: '0 auto',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  name: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 'var(--size-xxs)',
  },
  mail: {
    marginTop: 'var(--size-xxs)',
    marginBottom: 'var(--size-xxs)',
    width: '100%',
  },
  menu: {
    marginTop: 'var(--size-xs)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDefault: {
    marginTop: 'var(--size-xxs)',
    width: '60%',
  },
  btn: {
    marginTop: 'var(--size-xxs)',
    width: '60%',
    backgroundColor: 'var(--primary-color)',
  },
  btnDelete: {
    marginTop: 'var(--size-xxs)',
    width: '60%',
  },
  btnShop: {
    marginTop: 'var(--size-xxs)',
    width: '60%',
    backgroundColor: 'var(--secondary-color)',
  },
});

export default useStyles;
