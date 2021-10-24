import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  root: {
    // paddingTop: 'var(--size-xs)',
    color: 'var(--primary-color)',
    width: '75%',
    margin: '0 auto',
  },
  paper: {
    width: '95%',
    margin: 'var(--size-xs) 0',
    padding: 'var(--size-xxs) var(--size-xs)',
  },
  gridContainer: {
    margin: '.2rem 0',
  },
});

export default useStyles;
