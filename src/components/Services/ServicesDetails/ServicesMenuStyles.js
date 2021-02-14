import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../../utils/mediaSizes';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 var(--size-s)',
    paddingTop: 'var(--size-m)',
    margin: 'auto auto',
  },

  tabs: {
    width: 'auto',
  },
  title: {
    color: 'var(--secondary-color)',
    fontFamily: 'var(--secondary-font)',
    fontSize: 'var(--size-xs)',
    alignSelf: 'flex-start',
  },
  tabContainer: {
    margin: 'var(--size-xs)',
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    color: 'var(--primary-color)',
    fontFamily: 'var(--primary-font) !important',
    [sizes.up('lg')]: {
      flexDirection: 'column',
    },
  },
  text: {
    width: '100%',
    textAlign: 'justify',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('lg')]: {
      width: '90%',
      margin: 'auto',
    },
  },
  img: {
    marginTop: 'var(--size-s)',
    margin: '0 auto',
    width: '50%',
    borderRadius: 'var(--size-xxs)',
    overflow: 'hidden',
  },
  '.MuiTabs-flexContainer': {
    justifyContent: 'center',
  },
  tabPanelContainer: {
    width: '100%',
  },
});

export default useStyles;
