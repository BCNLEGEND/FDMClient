import makeStyles from '@mui/styles/makeStyles';
import { red } from '@mui/material/colors';

const useStyles = makeStyles({
  paper: {
    position: 'relative',
    height: '85vh',
    width: '80%',
    margin: '0 auto',
    marginTop: 'var(--size-s)',
    color: 'var(--primary-color)',
  },
  heading: {
    paddingTop: 'var(--size-s)',
    paddingLeft: 'var(--size-xs)',
  },
  root: {
    paddingTop: 'var(--size-xs)',
    height: '35vh',
    width: '90%',
    margin: '0 auto',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgContainer: {
    width: '35%',
    textAlign: 'center',
  },
  profileContainer: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    marginTop: 'var(--size-xxs)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  personalData: {
    marginTop: 'var(--size-xxs)',
    display: 'flex',
    flexDirection: 'column',
  },
  address: {
    textAlign: 'right',
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
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconbtn: {
    color: 'var(--primary-color)',
  },
  icon: {
    height: 'var(--size-s)',
    width: 'var(--size-s)',
    color: 'var(--primary-color)',
  },
  iconDlt: {
    height: 'var(--size-s)',
    width: 'var(--size-s)',
    color: red.A400,
  },
  additionalMenu: {
    margin: 'var(--size-m) auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

export default useStyles;
