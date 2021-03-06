import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: 'var(--size-m) var(--size-xxs)',
    color: 'var(--primary-color)',
  },
  paper: {
    minHeight: 'fit-content',
    margin: 'var(--size-xs) 0',
    padding: 'var(--size-xs) var(--size-xxs)',
    color: 'inherit',
  },
  paperClosed: {
    minHeight: 'fit-content',
    margin: 'var(--size-xs) 0',
    padding: 'var(--size-xs) var(--size-xxs)',
    color: '#999',
  },
  losed: {
    minHeight: 'fit-content',
    margin: 'var(--size-xs) 0',
    padding: 'var(--size-xs) var(--size-xxs)',
    color: '#999',
  },
  card: {
    margin: 'var(--size-xxs) 0',
    color: 'inherit',
  },
  cardHeading: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardSubHeading: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#aaa',
  },
  clientDetails: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  lastName: {
    marginLeft: 'var(--size-xs)',
  },
});

export default useStyles;
