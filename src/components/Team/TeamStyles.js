import sizes from '../../utils/mediaSizes';

const styles = {
  root: {
    paddingTop: 'var(--size-m)',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    color: 'var(--primary-color)',
    alignSelf: 'flex-start',
  },

  sectionContainer: {
    display: 'flex',
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    [sizes.up('sm')]: {
      width: ' 80%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },

  container: {
    paddingTop: 'var(--size-xs)',
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [sizes.up('sm')]: {
      width: '45%',
      margin: 'var(--size-xxs)',
    },
  },
  imgContainer: {
    position: 'relative',
    width: '60%',
    [sizes.up('sm')]: {
      width: '100%',
    },
  },

  nameContainer: {
    padding: 'var(--size-xxs) var(--size-xxs)',
    borderRadius: '3px',
    color: 'var(--primary-color)',
    backgroundColor: 'rgba(255,255,255,0.6)',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: '50%',
    zIndex: 25,
  },
  name: {
    fontSize: 'var(--size-xs)',
  },
  title: {
    fontSize: 'var(--size-xxs)',
    color: 'var(--primary-color-ligth)',
  },
};

export default styles;
