import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  section: { padding: 'var(--size-xs)' },
  paper: {
    width: '75%',
    height: '100%',
    margin: '0 auto',
    padding: 'var(--size-xs)',
    backgroundColor: 'rgba(255,255,255,.8)',
  },
});

export default useStyles;
