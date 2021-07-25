import { useContext } from 'react';
import Link from 'next/link';
import PersonIcon from '@material-ui/icons/Person';
import UserProfileMenu from './UserProfileMenu/UserProfileMenu';
import useStyles from './NavUserProfileMenuStyles';

import AuthContext from '@/context/AuthContext';

export default function NavUserProfileMenu() {
  const classes = useStyles();
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className={classes.root}>
      {!loggedIn ? (
        <div>
          <Link href="/account/login" passHref>
            <PersonIcon className={classes.iconBtn} />
          </Link>
        </div>
      ) : (
        <UserProfileMenu />
      )}
    </div>
  );
}
