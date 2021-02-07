import sizes from '../../utils/mediaSizes';
const styles = {
  root: {
    margin: '0 auto',
    paddingTop: 'var(--size-m)',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('sm')]: {
      width: ' 80%',
    },
  },
  heading: {
    color: 'var(--secondary-color)',
    fontFamily: 'var(--secondary-font)',
    fontSize: 'var(--size-xs)',
    alignSelf: 'flex-start',
    width: '70%',
    textAlign: 'left',
  },
};

export default styles;
