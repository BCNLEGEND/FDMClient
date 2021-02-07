const styles = {
  root: {},
  form: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'var(--size-m)',
    marginBottom: 'var(--size-m)',
  },
  header: {
    color: 'var(--primary-color)',
  },
  nameContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    marginTop: '2rem',
    width: '100%',
  },
  text: {
    marginTop: '2rem',
    width: '100%',
  },
  btn: {
    marginTop: '2rem',
    backgroundColor: 'var(--primary-color-light)',
    width: '50%',
    alignSelf: 'center',
    '&:hover': {
      backgroundColor: 'var(--secondary-color)',
    },
  },
};

export default styles;
