import sizes from '../../utils/mediaSizes';
const styles = {
  root: {
    margin: '0 auto',
    paddingTop: 'var(--size-m)',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('sm')]: {
      width: '80%',
    },
  },
  heading: {
    color: 'var(--secondary-color)',
    fontFamily: 'var(--secondary-font)',
    fontSize: 'var(--size-xs)',
    alignSelf: 'flex-start',
    width: '70%',
    textAlign: 'left',
  },
  calendar: {
    color: 'var(--primary-color)',
  },
  '.DayPicker-wrapper': {
    width: '90% !important',
  },
  '.DayPicker': {
    width: '90%',
  },
  '.DayPicker-Month': {
    width: '80%',
    color: 'var(--primary-color)',
  },
  '.DayPicker-NavButton--next, .DayPicker-NavButton--prev': {
    fontSize: '1.5rem',
  },
  '.DayPicker-NavButton': {
    top: '0.5rem',
  },
};

export default styles;
