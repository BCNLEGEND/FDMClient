const styles = {
  hidden: {
    display: 'none',
  },
  root: {
    width: '100vw',
  },
  container: {
    padding: 'var(--size-xxs) var(--size-xxs)',
    backgroundColor: 'var(--white-color)',
    color: 'var(--primary-color)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  heading: {
    width: '55%',
    textTransform: 'uppercase',
  },
  text: {
    width: '55%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textDecoration: 'none',
    '&:visited': {
      color: 'var(--primary-color)',
    },
  },
  icon: {
    fill: 'var(--primary-color)',
    height: 'var(--size-xs)',
    width: 'var(--size-xs)',
    marginRight: 'var(--size-xs)',
  },
};

export default styles;
