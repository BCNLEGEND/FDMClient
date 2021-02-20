import sizes from '../../utils/mediaSizes';
import { bp } from '../../utils/breakpoints';

const styles = {
  typeContainer: {
    display: 'flex',
    position: 'absolute',
    top: '32%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    color: 'var(--primary-color)',
    [sizes.up('sm')]: {
      top: '30%',
      left: '77%',
    },
    [sizes.up('lg')]: {
      left: '79%',
    },
    [sizes.up('xl')]: {
      left: '80%',
    },
    [sizes.up('xxl')]: {
      top: '28%',
      left: '81%',
    },
  },
  heading: {
    position: 'absolute',
    top: '40%',
    left: '33%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'lowercase',
    fontSize: 'var(--size-xs)',
    font: 'var(--primary-font-light)',
  },
  typingText: {
    position: 'absolute',
    top: '40%',
    left: '90%',
    transform: 'translate(-50%, -50%)',
    fontStyle: 'italic',
    fontFamily: 'var(--primary-font-light)',
    width: '100%',
    [sizes.up('sm')]: {
      left: '87%',
    },
    [sizes.up(bp.lg)]: {
      '&:after': {
        content: '""',
        borderRight: '0.2rem solid var(--primary-color)',
        height: '5%',
        animation: '0.5s type infinite',
      },
    },
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
