import sizes from '../../../utils/mediaSizes';
import { bp } from '../../../utils/breakpoints';
const styles = {
  root: {
    width: '100vw',
    flexGrow: 1,
    backgroundColor: 'var(--primary-color)',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    textDecoration: 'uppercase',
    padding: '0 var(--size-s)',
    [sizes.up(bp.sm)]: {
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
