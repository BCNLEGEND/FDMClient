import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './NavUserProfileMenuStyles';
import Link from 'next/link';

import PersonIcon from '@material-ui/icons/Person';

import { UserContext } from '../../../context/user';
import UserProfileMenu from './UserProfileMenu/UserProfileMenu';

function ProfileMenu(props) {
  const { classes } = props;
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

export default withStyles(styles)(ProfileMenu);
