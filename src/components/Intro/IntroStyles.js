import sizes from '../../utils/mediaSizes';

const styles = {
  root: {
    padding: '0 var(--size-s)',
    paddingTop: 'var(--size-m)',
    width: ' 100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('sm')]: {
      width: ' 90%',
    },
    [sizes.up('lg')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
    [sizes.up('xl')]: {
      width: '70%',
    },
  },
  text: {
    color: 'var(--primary-color)',
    [sizes.up('lg')]: {
      width: '55%',
    },
  },
  headerMain: {
    display: 'block',
  },
  headerSub: {
    display: 'block',
    marginTop: 'var(--size-xxs)',
  },
  textContent: {
    marginTop: 'var(--size-xxs)',
    textAlign: 'justify',
    fontSize: '1.3rem',
  },
  callout: {
    color: 'var(--secondary-color)',
  },
  qoute: {
    fontStyle: 'italic',
    fontSize: '1.3rem',
    marginTop: 'var(--size-xs)',
    padding: 'var(--size-xxs) var(--size-xs)',
    paddingBottom: 'var(--size-xxs)',
    textAlign: 'justify',
    borderTop: '.2px solid var(--primary-color)',
    borderBottom: '.2px solid var(--primary-color)',
  },
  img: {
    width: '60%',
    margin: 'var(--size-s) auto',
    [sizes.up('lg')]: {
      width: '30%',
    },
  },
  image: {},
};

export default styles;
