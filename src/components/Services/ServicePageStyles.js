import makeStyles from '@mui/styles/makeStyles';
import sizes from '@/utils/mediaSizes';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '0 auto',
    [sizes.up('sm')]: {
      width: ' 90%',
    },
    [sizes.up('lg')]: {
      width: '80%',
    },
    [sizes.up('xl')]: {
      width: '70%',
    },
  },
  heading: {
    marginTop: 'var(--size-m)',
    color: 'var(--primary-color)',
    padding: '0 var(--size-s)',
  },
  image: {
    width: '60%',
    margin: '0 auto',
  },
});

export default useStyles;
