import { makeStyles } from '@material-ui/core/styles';
import sizes from '@/utils/mediaSizes';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    // paddingTop: 'var(--size-xs)',
    color: 'var(--primary-color)',
    width: '50%',
    margin: '0 auto',
  },
  personalData: {
    display: 'flex',
    flexDirection: 'column',
  },
  address: {
    textAlign: 'right',
  },
  text: {
    marginTop: 'var(--size-xxs)',
  },
  mail: {
    marginTop: 'var(--size-xxs)',
    marginBottom: 'var(--size-xxs)',
    width: '100%',
  },
  name: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'var(--size-xxs) 0',
  },
  checkboxGroup: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileEdit: {
    marginTop: 'var(--size-s)',
    display: 'flex',
    justifyContent: 'center',
  },
  noProfile: {
    margin: 'var(--size-l) auto',
  },
});

export default useStyles;
