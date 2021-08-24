import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    color: 'var(--primary-color)',
    margin: 'var(--size-xs) auto',
    padding: 'var(--size-m)',
    width: '85%',
  },
  cookie: {
    width: '100%',
    padding: '1rem',
    position: 'absolute',
    bottom: '0',
    left: '0',
    zIndex: '100',
  },
  cookieContainer: {
    backgroundColor: 'rgba(255,255,255, .4)',
    color: 'var(--primary-color)',
    width: '90%',
    padding: '1rem',
    margin: '0 auto',
  },
});

export default useStyles;
