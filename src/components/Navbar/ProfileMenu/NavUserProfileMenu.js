import React, { useContext } from 'react';
import Link from 'next/link';
import PersonIcon from '@material-ui/icons/Person';
import { UserContext } from '../../../context/user';
import UserProfileMenu from './UserProfileMenu/UserProfileMenu';
import useStyles from './NavUserProfileMenuStyles';

function NavUserProfileMenu() {
  const classes = useStyles();
  const { loggedIn } = useContext(UserContext);

  return (
    <div className={classes.root}>
      {loggedIn ? (
        <UserProfileMenu />
      ) : (
        <div>
          <Link href="/login" passHref>
            <PersonIcon className={classes.iconBtn} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavUserProfileMenu;
