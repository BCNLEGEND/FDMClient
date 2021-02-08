import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link';
import Image from 'next/image';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/styles';
import styles from './NavbarMobileStyles';
import SimpleMenu from './SimpleMenu';

import { UserContext } from '../../../context/user';

function NavbarMobile(props) {
  const { classes } = props;
  const { user, loggedIn } = useContext(UserContext);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <SimpleMenu />
          <div className={classes.logo}>
            <Image
              layout="responsive"
              width="100"
              height="10"
              src="/media/img/FDM_logo_white.png"
              className={classes.logo}
              alt="Logo Farmàcia del mar"
            ></Image>
          </div>
          {loggedIn ? (
            <Link href="/user/profile">
              <a className={classes.link}>
                <IconButton color="inherit">
                  <Avatar
                    alt={`${user.firstName} ${user.lastName}`}
                    src={`/media/users/${user.photo}`}
                    className={classes.img}
                  />
                </IconButton>
              </a>
            </Link>
          ) : (
            <Link href="/login">
              <a className={classes.link}>
                <IconButton color="inherit">
                  <PersonIcon className={classes.iconBtn} />
                </IconButton>
              </a>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NavbarMobile);
