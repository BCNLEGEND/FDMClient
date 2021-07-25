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
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'var(--size-xxs) auto',
    padding: '0 var(--size-xxs)',
    width: '90%',
    height: '90%',
  },
  btnGroup: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    fontSize: '.75rem',
    margin: 'var(--size-xxs) auto',
    width: '75%',
  },
  btnReset: {
    fontSize: '.75rem',
    margin: 'var(--size-xxs) auto',
    width: '75%',
    backgroundColor: 'var(--tertiary-color)',
  },
});

export default useStyles;
