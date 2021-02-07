import sizes from '../../utils/mediaSizes';
const styles = {
  root: {
    width: '90%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    borderTop: '.1px solid var(--primary-color)',
    marginTop: 'var(--size-m)',
    color: 'var(--primary-color)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 'var(--size-xs) 0',
    borderBottom: '.1px solid var(--primary-color)',
  },
  copy: {
    paddingTop: 'var(--size-xs)',
    color: 'var(--primary-color)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: '0 var(--size-xxs)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fill: 'var(--primary-color)',
    height: 'var(--size-xs)',
    width: 'var(--size-xs)',
    marginRight: 'var(--size-xxs)',
    marginLeft: 'var(--size-s)',
    [sizes.up('sm')]: {
      marginLeft: 'var(--size-xxs)',
    },
  },
};

export default styles;
