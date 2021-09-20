// React Imports
import React, { useContext } from 'react';
import { IMG_API } from '@/utils/api';
// Nextjs Imports
import Link from 'next/link';
// Material UI Imports
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// Styles imports
import useStyles from './UserProfileMenuStyles';
// Text Imports
import text from './UserProfileText';
// Context imports
import { LanguageContext } from '@/context/language';
import AuthContext from '@/context/AuthContext';

export default function UserProfileMenu() {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);
  const { user, admin, staff, logout, loggedIn } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userLogout = () => {
    logout();
  };

  return (
    <>
      {loggedIn && (
        <div className={classes.root}>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <Avatar
              src={`${IMG_API}${user.photo}`}
              className={classes.iconBtn}
            />
          </IconButton>
          {!admin && !staff ? (
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
              {/* <MenuItem onClick={handleClose} className={classes.link}>
                <Link href="/orders/my-orders" passHref>
                  {text[language].orders}
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.link}>
                <Link href="/orders/new-order" passHref>
                  {text[language].neworder}
                </Link>
              </MenuItem> */}
              <MenuItem onClick={userLogout} className={classes.link}>
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
                <Link href="/admin" passHref>
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.link}>
                <Link href="/admin/allorders" passHref>
                  See All Orders
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.link}>
                <Link href="/admin/createorder" passHref>
                  Place New Order
                </Link>
              </MenuItem>
              <MenuItem onClick={userLogout} className={classes.link}>
                <ExitToAppIcon className={classes.icon} />
                <Link href="#" passHref>
                  {text[language].logout}
                </Link>
              </MenuItem>
            </Menu>
          )}
        </div>
      )}
    </>
  );
}
