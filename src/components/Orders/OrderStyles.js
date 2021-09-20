import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  section: { width: '100%' },
  imgSection: {
    position: 'absolute',
    zIndex: '9',
    width: '100vw',
    height: '87vh',
    backgroundColor: 'rgba(255,255,255,.6)',
  },
  paper: {
    width: '75%',
    height: '100%',
    margin: '1rem auto',
    padding: 'var(--size-xxs)',
    backgroundColor: '#fff',
  },
});

export default useStyles;
