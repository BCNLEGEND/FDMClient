import sizes from '../../utils/mediaSizes';

const styles = {
  header: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  primaryHeading: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    margin: '0 auto',
    fontSize: 'var(--size-s)',
    display: 'block',
    color: 'var(--primary-color)',
    textTransform: 'uppercase',
    animation: 'all 0.2s ease-in-out',
    [sizes.up('sm')]: {
      top: '15%',
      left: '70%',
    },
  },
  secondaryHeading: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    margin: '0 auto',
    marginTop: '-1.5rem',
    fontSize: 'var(--size-s)',
    display: 'block',
    color: 'var(--secondary-color)',
    fontFamily: 'var(--secondary-font)',
    [sizes.up('sm')]: {
      top: '26%',
      left: '70%',
    },
  },
  background: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    width: '100vw',
    height: '100%',
    overflow: 'hidden',
    zIndex: -10,
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%);',
  },
};

export default styles;
