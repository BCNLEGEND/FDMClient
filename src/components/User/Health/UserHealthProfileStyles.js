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
  additionalData: {
    width: '75%',
    margin: 'var(--size-s) auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  graphContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  weightGraph: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  additionalContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  BMIGraphContainer: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    textAlign: 'left',
  },
  BMITitle: {
    position: 'absolure',
    top: '0',
    left: '0',
  },
  bmiGraph: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  BMICircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15rem',
    height: '15rem',
    color: 'white',
    fontSize: 'var(--size-m)',
    backgroundColor: 'var(--primary-color)',
    borderRadius: '50rem',
  },
});

export default useStyles;
