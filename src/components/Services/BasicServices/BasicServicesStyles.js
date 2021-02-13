import sizes from '../../../utils/mediaSizes';

const styles = {
  root: {
    padding: '0 var(--size-s)',
    paddingTop: 'var(--size-m)',
    width: '100%',
    color: 'var(--primary-color)',
  },
  cardContainer: {
    marginTop: 'var(--size-xs)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    [sizes.up('lg')]: {
      flexDirection: 'row',
      alignItems: 'stretch',
    },
  },
  singleCard: {
    marginTop: 'var(--size-xs)',
    width: '90%',
    color: 'var(--primary-color)',
    [sizes.up('lg')]: {
      width: '45%',
    },
  },
  singleServiceContainer: {
    marginTop: 'var(--size-xxs)',
    marginBottom: 'var(--size-xxs)',
    display: 'flex',
    flexDirection: 'column',
  },
  singleService: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    fill: 'var(--primary-color)',
    height: 'var(--size-xs)',
    width: 'var(--size-xs)',
  },
};

export default styles;
