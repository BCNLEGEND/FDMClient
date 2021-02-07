const styles = {
  form: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    color: 'var(--primary-color)',
  },
  text: {
    marginTop: '2rem',
    width: '90%',
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
  forgot: {
    padding: '1rem',
    color: '#ccc',
    textDecoration: 'none',
    textAlign: 'center',
  },
};

export default styles;
