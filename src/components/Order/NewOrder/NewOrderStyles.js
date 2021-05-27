import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: 'var(--size-m) var(--size-xxs)',
    height: '80vh',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numGroup: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  numField: {
    width: '45%',
  },
  textField: {
    width: '90%',
  },
  actionBox: {
    margin: 'var(--size-xs) 0',
    display: 'flex',
  },
  btnText: {
    marginLeft: 'var(--size-xxs)',
  },
});

export default useStyles;
