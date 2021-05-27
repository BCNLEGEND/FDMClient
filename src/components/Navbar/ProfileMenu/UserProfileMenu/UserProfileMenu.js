import React, { useContext } from 'react';
import Link from 'next/link';

import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import useStyles from './UserProfileMenuStyles';
import text from './UserProfileText';
import { LanguageContext } from '../../../../context/language';
import { UserContext } from '../../../../context/user';

function UserProfileMenu() {
  const classes = useStyles();
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
      {user.role === 'user' ? (
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} className={classes.link}>
            <Link href="/user/profile" passHref>
              {text[language].profile}
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.link}>
            <Link href="/orders/my-orders" passHref>
              {text[language].orders}
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.link}>
            <Link href="/orders/new-order" passHref>
              {text[language].neworder}
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.link}>
            <ExitToAppIcon className={classes.icon} />
            <Link href="/" passHref>
              {text[language].logout}
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.link}>
            <Link href="/user/profile" passHref>
              {text[language].profile}
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.link}>
            <Link href="/orders/my-orders" passHref>
              {text[language].orders}
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.link}>
            <Link href="/orders/new-order" passHref>
              {text[language].neworder}
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.link}>
            <ExitToAppIcon className={classes.icon} />
            <Link href="/" passHref>
              {text[language].logout}
            </Link>
          </MenuItem>
        </Menu>
      ) : (
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} className={classes.link}>
            <Link href="/admin/dashboard" passHref>
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.link}>
            <Link href="/admin/addOrder" passHref>
              Add Order
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.link}>
            <Link href="/admin/editOrder" passHref>
              Edit Order
            </Link>
          </MenuItem>
        </Menu>
      )}
    </div>
  );
}

export default UserProfileMenu;
