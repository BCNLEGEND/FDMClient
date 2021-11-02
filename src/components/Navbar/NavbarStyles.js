import makeStyles from '@mui/styles/makeStyles';
import sizes from '@/utils/mediaSizes';

const useStyles = makeStyles({
  root: {
    padding: ' 0 var(--size-xs)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100vw',
    height: '56px',
    backgroundColor: 'var(--primary-color)',
    overflow: 'hidden',
    [sizes.up('sm')]: {
      height: '64px',
    },
  },
});

export default useStyles;
