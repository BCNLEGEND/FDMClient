import makeStyles from '@mui/styles/makeStyles';
import sizes from '@/utils/mediaSizes';

const useStyles = makeStyles({
  root: {
    padding: '0 var(--size-s)',
    paddingTop: 'var(--size-m)',
    width: ' 100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('lg')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  text: {
    color: 'var(--primary-color)',
    [sizes.up('lg')]: {
      width: '55%',
    },
  },
  headerMain: {
    display: 'block',
  },
  headerSub: {
    display: 'block',
    marginTop: 'var(--size-xxs)',
  },
  textContent: {
    marginTop: 'var(--size-xxs)',
    textAlign: 'justify',
  },
  callout: {
    color: 'var(--secondary-color)',
  },
  qoute: {
    fontStyle: 'italic',
    marginTop: 'var(--size-xs)',
    padding: 'var(--size-xxs) var(--size-xs)',
    paddingBottom: 'var(--size-xxs)',
    textAlign: 'justify',
    borderTop: '.2px solid var(--primary-color)',
    borderBottom: '.2px solid var(--primary-color)',
  },
  img: {
    width: '60%',
    margin: 'var(--size-s) auto',
    [sizes.up('lg')]: {
      width: '40%',
    },
  },
});

export default useStyles;
