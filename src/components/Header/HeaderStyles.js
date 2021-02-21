import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../utils/mediaSizes';

const useStyles = makeStyles({
  header: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  headingContainer: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [sizes.up('md')]: {
      width: '65%',
    },
    [sizes.up('lg')]: {
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      padding: 'var(--size-s)',
      backgroundColor: 'rgba(255,255,255, .1)',
      backdropFilter: 'blur(.5rem)',
      borderRadius: '30px',
    },
    [sizes.up('xl')]: {
      width: '40%',
    },
    [sizes.up('xxl')]: {
      width: '35%',
    },
  },
  primaryHeading: {
    width: 'fit-content',
    margin: '0 auto',
    fontSize: 'var(--size-s)',
    display: 'block',
    color: 'var(--primary-color)',
    textTransform: 'uppercase',
    animation: 'all 0.2s ease-in-out',
  },
  secondaryHeading: {
    width: 'fit-content',
    margin: '0 auto',
    marginTop: '-1.5rem',
    fontSize: 'var(--size-s)',
    display: 'block',
    color: 'var(--secondary-color)',
    fontFamily: 'var(--secondary-font)',
    zIndex: '-1',
  },
  background: {
    width: '100vw',
    height: '100%',
    overflow: 'hidden',
    zIndex: -10,
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 90%);',
  },
});

export default useStyles;
