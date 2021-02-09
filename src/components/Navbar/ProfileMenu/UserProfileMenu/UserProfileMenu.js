import React, { useContext } from 'react';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import styles from './UserProfileMenuStyles';
import { LanguageContext } from '../../../../context/language';
import { UserContext } from '../../../../context/user';

function UserProfileMenu(props) {
  const { classes } = props;
  const { language } = useContext(LanguageContext);
  const { user } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Avatar
          src={`/media/users/${user.photo}`}
          className={classes.iconBtn}
        />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className={classes.link}>
          <Link href="/user/profile" passHref>
            Mi Perfil
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.link}>
          <Link href="/" passHref>
            Mis Encargos
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.link}>
          <ExitToAppIcon className={classes.icon} />
          <Link href="/" passHref>
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default withStyles(styles)(UserProfileMenu);
