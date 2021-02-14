import { makeStyles } from '@material-ui/core/styles';

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
  },
});
export default useStyles;
