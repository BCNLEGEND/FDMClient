import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../utils/mediaSizes';

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    padding: '0 var(--size-s)',
    paddingTop: 'var(--size-m)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'var(--secondary-color)',
    fontFamily: 'var(--secondary-font)',
    fontSize: 'var(--size-xs)',
    fontWeight: 400,
    alignSelf: 'flex-start',
    width: '100%',
  },
  calendar: {
    color: 'var(--primary-color)',
  },
  '.DayPicker-wrapper': {
    width: '90% !important',
    [sizes.up('lg')]: {
      width: '80%',
    },
  },
  '.DayPicker': {
    width: '90%',
  },
  '.DayPicker-Month': {
    width: '80%',
    color: 'var(--primary-color)',
  },
  '.DayPicker-NavButton--next, .DayPicker-NavButton--prev': {
    fontSize: '3rem',
  },
  '.DayPicker-NavButton': {
    top: '0.5rem',
  },
});

export default useStyles;
