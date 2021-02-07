import sizes from '../../utils/mediaSizes';

const styles = {
  root: {
    padding: '0 var(--size-s)',
    paddingTop: 'var(--size-m)',
    width: '90%',
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('sm')]: {
      width: ' 80%',
    },
  },
  text: {
    color: 'var(--primary-color)',
  },
  paragraph: {
    textAlign: 'justify',
    fontSize: '1.3rem',
    marginTop: 'var(--size-xxs)',
    marginBottom: 'var(--size-xxs)',
  },
  list: {
    '& li:before': {
      content: "'👉'",
      display: 'inline-block',
      width: 'var(--size-xs)',
    },
  },
  listItem: {
    fontSize: '1.1rem',
    paddingLeft: 'var(--size-s)',
  },
  imgContainer: {
    paddingTop: 'var(--size-m)',
    width: '60%',
  },
};

export default styles;
