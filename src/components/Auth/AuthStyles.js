import sizes from '../../utils/mediaSizes';

const styles = {
  container: {
    width: '90%',
    margin: '0 auto',
    marginTop: 'var(--size-xxs)',
    height: '88vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('md')]: {
      padding: '0 var(--size-m)',
      //   width: ' 80%',
    },
    [sizes.up('xl')]: {
      width: '70%',
    },
  },
  authContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('lg')]: {
      flexDirection: 'row',
    },
  },
};

export default styles;
