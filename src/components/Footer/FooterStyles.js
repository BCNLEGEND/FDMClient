import sizes from '../../utils/mediaSizes';
import { makeStyles } from '@material-ui/core/styles';
const currentHour = new Date().getHours();
const currentDay = new Date().getDay();
const openHour = currentHour > 9 && currentHour < 21;
const open = currentDay !== 0 && openHour;

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '90%',
    borderTop: '.1px solid var(--primary-color)',
    marginTop: 'var(--size-m)',
    color: 'var(--primary-color)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 'var(--size-xs) 0',
    borderBottom: '.1px solid var(--primary-color)',
    [sizes.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  },
  copy: {
    paddingTop: 'var(--size-xs)',
    color: 'var(--primary-color)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: '0 var(--size-xxs)',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerSocial: {
    padding: '0 var(--size-xxs)',
    marginTop: 'var(--size-xxs)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fill: 'var(--primary-color)',
    height: 'var(--size-xs)',
    width: 'var(--size-xs)',
    marginRight: 'var(--size-xxs)',
    [sizes.up('sm')]: {
      marginLeft: 'var(--size-xxs)',
    },
  },
  iconSocial: {
    fill: 'var(--primary-color)',
    height: 'var(--size-s)',
    width: 'var(--size-s)',
    marginRight: 'var(--size-xxs)',
    [sizes.up('sm')]: {
      marginLeft: 'var(--size-xxs)',
    },
  },
  icon2: {
    fill: open ? 'var(--secondary-color)' : 'var(--primary-color)',
    height: 'var(--size-xs)',
    width: 'var(--size-xs)',
    marginRight: 'var(--size-xxs)',
    [sizes.up('sm')]: {
      marginLeft: 'var(--size-xxs)',
    },
  },
  address: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
  },
  text: {
    textDecoration: 'none',
    '&:visited': {
      color: 'var(--primary-color)',
    },
  },
  text2: {
    color: open ? 'var(--secondary-color)' : 'var(--primary-color)',
  },
  map: {
    width: '45%',
    height: '100%',
  },
});

export default useStyles;
