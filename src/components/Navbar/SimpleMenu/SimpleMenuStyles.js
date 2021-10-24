import makeStyles from '@mui/styles/makeStyles';
const useStyles = makeStyles({
  iconBtn: {
    color: 'var(--white-color)',
    height: 'var(--size-xs)',
    width: 'var(--size-xs)',
  },
  link: {
    textTransform: 'uppercase',
    '& > a': {
      textDecoration: 'none',
      color: 'var(--primary-color)',
    },
  },
  linkGlow: {
    textTransform: 'uppercase',
    '& > a': {
      textDecoration: 'none',
      color: 'var(--secondary-color)',
    },
  },
});

export default useStyles;
