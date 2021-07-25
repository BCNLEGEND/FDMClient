import { makeStyles } from '@material-ui/core/styles';

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
  noProfile: {
    margin: 'var(--size-l) auto',
  },
  name: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '.25rem 0',
  },
  address: {
    textAlign: 'right',
  },
  checkboxGroup: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switch: {},
  profileEdit: {
    marginTop: 'var(--size-s)',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {},
});

export default useStyles;
