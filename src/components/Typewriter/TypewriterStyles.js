import sizes from '../../utils/mediaSizes';
const styles = {
  typeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'var(--primary-color)',
    margin: '0 auto',
    width: '50%',
    marginTop: '-1rem',
    [sizes.up('sm')]: {
      width: '33%',
    },
    [sizes.up('md')]: {
      width: '45%',
    },
    [sizes.up('lg')]: {
      width: '53%',
    },
    [sizes.up('xl')]: {
      width: '48%',
    },
    [sizes.up('xxl')]: {
      width: '50%',
    },
  },
  heading: {
    tranform: 'translate(-50%, -50%)',
    textTransform: 'lowercase',
    fontSize: 'var(--size-xs)',
    font: 'var(--primary-font-light)',
  },
  typingText: {
    fontStyle: 'italic',
    fontFamily: 'var(--primary-font-light)',
    '&:after': {
      content: '""',
      borderRight: '0.2rem solid var(--primary-color)',
      height: '3%',
      animation: '0.5s type infinite',
    },
    // },
  },
  '@keyframes type': {
    '0%': {
      opacity: '0',
    },
    '100%': {
      opacity: '1',
    },
  },
};

export default styles;
