import makeStyles from '@mui/styles/makeStyles';
import sizes from '../../../utils/mediaSizes';

const useStyles = makeStyles({
  root: {
    padding: '0 var(--size-s)',
    paddingTop: 'var(--size-m)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('sm')]: {
      width: ' 90%',
    },
    [sizes.up('lg')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  },
  text: {
    color: 'var(--primary-color)',
    [sizes.up('lg')]: {
      width: '60%',
    },
  },
  paragraph: {
    textAlign: 'justify',
    marginTop: 'var(--size-xxs)',
    marginBottom: 'var(--size-xxs)',
  },
  list: {
    '& > li': {
      display: 'flex',
      justifyContent: 'flex-start',
      marginLeft: 'var(--size-s)',
    },
    '& li:before': {
      content: "'👉'",
      width: 'var(--size-xxs)',
    },
  },
  listItem: {
    paddingLeft: 'var(--size-xxs)',
  },
  imgContainer: {
    // paddingTop: 'var(--size-m)',
    width: '100vw',
    [sizes.up('lg')]: {
      width: '50%',
      padding: '0 var(--size-xxs)',
    },
  },
});

export default useStyles;
