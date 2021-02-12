import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SimpleMenu from './SimpleMenu/SimpleMenu';
import Logo from './Logo/Logo';
import LanguageMenu from './Language/LanguageMenu';
import NavUserProfileMenu from './ProfileMenu/NavUserProfileMenu';

import styles from './NavbarStyles';

function Navbar(props) {
  const { classes } = props;

  return (
    <nav className={classes.root}>
      <SimpleMenu />
      <Logo />
      <LanguageMenu />
      {/* <NavUserProfileMenu /> */}
    </nav>
  );
}

export default withStyles(styles)(Navbar);
