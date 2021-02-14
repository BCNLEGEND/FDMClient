import { makeStyles } from '@material-ui/core/styles';
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
});

export default useStyles;
