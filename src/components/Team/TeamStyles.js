import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../utils/mediaSizes';

const useStyles = makeStyles({
  root: {
    padding: '0 var(--size-s)',
    paddingTop: 'var(--size-m)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    color: 'var(--primary-color)',
    alignSelf: 'flex-start',
  },

  sectionContainer: {
    display: 'flex',
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    [sizes.up('sm')]: {
      width: ' 100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },

  container: {
    width: '90%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('sm')]: {
      width: '40%',
      margin: 'var(--size-xxs)',
    },
    [sizes.up('lg')]: {
      width: '30%',
    },
    [sizes.up('xl')]: {
      width: '20%',
    },
  },
  imgContainer: {
    position: 'relative',
    padding: 'var(--size-xs)',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    [sizes.up('sm')]: {
      width: '100%',
    },
  },

  nameContainer: {
    padding: 'var(--size-xxs) var(--size-xxs)',
    borderRadius: '3px',
    color: 'var(--primary-color)',
    backgroundColor: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(.2rem)',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: '50%',
    zIndex: 25,
  },
  title: {
    color: 'var(--primary-color)',
  },
  aprop: {
    paddingTop: 'var(--size-xs)',
    fontFamily: 'var(--secondary-font)',
    fontSize: 'var(--size-s)',
    color: 'var(--secondary-color)',
    [sizes.up('sm')]: {
      fontSize: 'var(--size-m)',
    },
  },
});

export default useStyles;
