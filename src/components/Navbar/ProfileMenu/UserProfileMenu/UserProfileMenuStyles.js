import { makeStyles } from '@material-ui/core/styles';
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
