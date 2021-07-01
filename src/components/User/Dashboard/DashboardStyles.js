import { makeStyles } from '@material-ui/core/styles';
import sizes from '@/utils/mediaSizes';

const useStyles = makeStyles({
  page: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '15%',
    height: '93vh',
    backgroundColor: 'rgba(93, 137, 218,0.1)',
  },
  mainContent: {
    margin: 'var(--size-xxs) auto',
    width: '90%',
  },
  paper: {
    margin: '0 auto',
    width: '90%',
    height: '87vh',
  },
  btnGroup: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    margin: 'var(--size-xs) auto',
    width: '65%',
  },
  btnReset: {
    margin: 'var(--size-xs) auto',
    width: '65%',
    backgroundColor: 'var(--tertiary-color)',
  },
});

export default useStyles;
