import NavbarMobile from './Mobile/NavbarMobile';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { bp } from '../../utils/breakpoints';

const Navbar = () => {
  const isBreakpoint = useMediaQuery(bp.lg);
  return (
    <div>
      {isBreakpoint ? (
        <>
          <NavbarMobile />
        </>
      ) : (
        <div>{/* <FullMenu /> */}</div>
      )}
    </div>
  );
};

export default Navbar;
