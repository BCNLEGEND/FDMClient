import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  root: {
    // paddingTop: 'var(--size-xs)',
    color: 'var(--primary-color)',
    width: '75%',
    margin: '0 auto',
  },
  paper: {
    width: '95%',
    margin: 'var(--size-xs) 0',
    padding: 'var(--size-xxs) var(--size-xs)',
  },
  gridContainer: {
    margin: '.2rem 0',
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
