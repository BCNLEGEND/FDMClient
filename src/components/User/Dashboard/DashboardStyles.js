import { makeStyles } from '@material-ui/core/styles';
import sizes from '@/utils/mediaSizes';

const useStyles = makeStyles({
  page: {
    marginTop: '4rem',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'var(--size-xxs) auto',
    padding: '0 var(--size-xxs)',
    width: '90%',
    height: '85vh',
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
    margin: '.25rem 0',
  },
  btnReset: {
    fontSize: '.75rem',
    backgroundColor: 'var(--tertiary-color)',
  },
});

export default useStyles;
