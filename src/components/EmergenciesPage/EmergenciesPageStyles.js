import { makeStyles } from '@material-ui/core/styles';
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
    display: 'block',
    textAlign: 'center',
    fontFamily: 'var(--secondary-font)',
    color: 'var(--secondary-color)',
    fontSize: 'var(--size-xs)',
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
});
export default useStyles;
