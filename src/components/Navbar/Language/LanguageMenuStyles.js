import makeStyles from '@mui/styles/makeStyles';
import sizes from '@/utils/mediaSizes';

const useStyles = makeStyles({
  form: {
    width: '9%',
    margin: '0 var(--size-xxs)',
    [sizes.up('lg')]: {
      width: '14%',
    },
    [sizes.up('xl')]: {
      width: '190px',
    },
  },
  label: {
    display: 'flex',
    color: 'var(--white-color)',
  },
  select: {
    color: 'var(--white-color)',
    '&:before': {
      borderBottom: '1px solid var(--white-color)',
    },
    '&:after': {
      borderBottom: '1px solid var(--white-color)',
    },
  },
  item: {
    display: 'flex',
    textTransform: 'uppercase',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fill: 'var(--white-color)',
  },
});

export default useStyles;
