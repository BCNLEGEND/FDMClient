import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../utils/mediaSizes';

const useStyles = makeStyles({
  hidden: {
    display: 'none',
  },
  root: {
    width: '100vw',
  },
  container: {
    padding: 'var(--size-xxs) var(--size-xxs)',
    backgroundColor: 'var(--white-color)',
    color: 'var(--primary-color)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('lg')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
  },
  heading: {
    width: 'fit-content',
    margin: '0 var(--size-xxs)',
    textTransform: 'uppercase',
    // textAlign: 'center',
  },
  text: {
    width: 'fit-content',
    margin: '0 var(--size-xxs)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('lg')]: {
      justifyContent: 'space-between',
    },
  },
  textwa: {
    textDecoration: 'none',
    '&:visited': {
      color: 'var(--primary-color)',
    },
  },
  icon: {
    fill: 'var(--primary-color)',
    height: 'var(--size-xs)',
    width: 'var(--size-xs)',
    marginRight: 'var(--size-xs)',
    textAlign: 'center',
  },
});

export default useStyles;
