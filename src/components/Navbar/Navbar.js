import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SimpleMenu from './SimpleMenu/SimpleMenu';
import Logo from './Logo/Logo';
import LanguageMenu from './Language/LanguageMenu';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import styles from './NavbarStyles';

function Navbar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <SimpleMenu />
      <Logo />
      <LanguageMenu />
      <ProfileMenu />
    </div>
  );
}

export default withStyles(styles)(Navbar);
