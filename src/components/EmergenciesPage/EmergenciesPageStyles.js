import makeStyles from '@mui/styles/makeStyles';
import sizes from '../../utils/mediaSizes';

const useStyles = makeStyles({
  root: {
    color: 'var(--primary-color)',
    width: '90%',
    margin: '0 auto',
  },
  primaryHeading: {
    marginTop: 'var(--size-m)',
  },
  secondaryHeading: {
    marginTop: 'var(--size-s)',
  },

  paragraph: {
    width: '80%',
    margin: '0 auto',
    textAlign: 'justify',
    marginTop: 'var(--size-xs)',
  },
  span: {
    textAlign: 'center',
    paddingTop: 'var(--size-xs)',
    fontFamily: 'var(--secondary-font)',
    fontSize: 'var(--size-s)',
    color: 'var(--secondary-color)',
    [sizes.up('sm')]: {
      fontSize: 'var(--size-m)',
    },
  },
  listItem: {
    listStyle: 'none',
    '&:before': {
      content: "'🚑'",
      height: 'var(--size-xxs)',
      width: 'var(--size-xxs)',
      marginRight: 'var(--size-xxs)',
      marginLeft: 'var(--size-s)',
    },
    [sizes.up('md')]: {
      paddingLeft: 'var(--size-s)',
    },
    [sizes.up('lg')]: {
      paddingLeft: 'var(--size-m)',
    },
  },
  img: {
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    marginTop: 'var(--size-m)',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('md')]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'var(--primary-color)',
    margin: 'var(--size-xs)',
    width: '90%',
    [sizes.up('md')]: {
      width: '40%',
    },
  },
  icon: {
    height: 'var(--size-xs)',
    width: 'var(--size-xs)',
    color: 'var(--primary-color)',
  },
});
export default useStyles;
