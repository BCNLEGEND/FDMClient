import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headerContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'left',
    width: '90%',
    margin: '0 auto',
    marginTop: 'var(--size-xxs)',
    color: 'var(--primary-color)',
  },
  imgContainer: {
    maxWidth: '350px',
    maxHeight: '350px',
  },
  badge: {
    cursor: 'pointer',
  },
  profileContainer: {
    margin: '0 var(--size-xs)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'left',
  },
});

export default useStyles;
