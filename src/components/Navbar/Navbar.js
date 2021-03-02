import React from 'react';
import SimpleMenu from './SimpleMenu/SimpleMenu';
import Logo from './Logo/Logo';
import LanguageMenu from './Language/LanguageMenu';
import NavUserProfileMenu from './ProfileMenu/NavUserProfileMenu';

import useStyles from './NavbarStyles';

function Navbar() {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <SimpleMenu />
      <Logo />
      <LanguageMenu />
      {/* <NavUserProfileMenu /> */}
    </nav>
  );
}

export default Navbar;
