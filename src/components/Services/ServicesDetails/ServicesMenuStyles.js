import makeStyles from '@mui/styles/makeStyles';
import sizes from '@/utils/mediaSizes';

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
    width: '35%',
    [sizes.up('lg')]: {
      width: 'fit-content',
    },
  },
  title: {
    color: 'var(--secondary-color)',
    fontFamily: 'var(--secondary-font)',
    fontSize: 'var(--size-xs)',
    alignSelf: 'flex-start',
  },
  tabContainer: {
    margin: 'var(--size-xxs)',
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
      width: '80%',
      margin: 'auto',
      flexDirection: 'row',
    },
  },
  img: {
    marginTop: 'var(--size-s)',
    margin: '0 auto',
    width: '50%',
    borderRadius: '30px',
    overflow: 'hidden',
  },
  tabPanelContainer: {
    width: '100%',
  },
  list: {
    '& > li': {
      display: 'flex',
      justifyContent: 'flex-start',
      [sizes.up('lg')]: {
        marginLeft: 'var(--size-s)',
      },
    },
    '& li:before': {
      content: "'👍'",
      width: 'var(--size-xxs)',
      marginRight: 'var(--size-xxs)',
    },
  },
});

export default useStyles;
