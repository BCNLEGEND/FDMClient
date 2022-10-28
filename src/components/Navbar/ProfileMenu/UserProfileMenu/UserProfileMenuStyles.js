import makeStyles from '@mui/styles/makeStyles';
const useStyles = makeStyles({
  link: {
    textTransform: 'uppercase',
    '& > a': {
      textDecoration: 'none',
      color: 'var(--primary-color)',
    },
  },
});

export default useStyles;
