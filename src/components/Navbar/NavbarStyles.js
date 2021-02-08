import sizes from '../../utils/mediaSizes';

const styles = {
  root: {
    width: '100vw',
    backgroundColor: 'var(--primary-color)',
  },
  appBar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  logo: {
    width: '60%',
    height: '90%',
    flexGrow: 1,
    textAlign: 'center',
    textDecoration: 'uppercase',
    padding: 'var(--size-xxs) var(--size-s)',
    [sizes.up('sm')]: {
      padding: '0 var(--size-m)',
    },
  },
  img: {
    height: 'var(--size-s)',
    width: 'var(--size-s)',
  },
  iconBtn: {
    height: 'var(--size-s)',
    width: 'var(--size-s)',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  menuLink: {
    textDecoration: 'none',
    color: 'var(--primary-color)',
  },
};

export default styles;
