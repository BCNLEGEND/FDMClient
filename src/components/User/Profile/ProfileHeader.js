import { useContext } from 'react';

import Image from 'next/image';

import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import EditIcon from '@material-ui/icons/Edit';

import AuthContext from '@/context/AuthContext';

import useStyles from './ProfileHeaderStyles';

export default function ProfileHeader() {
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      {user && (
        <>
          <div className={classes.imgContainer}>
            <Badge
              color="primary"
              className={classes.badge}
              // @TODO Define Edit profile photo Onclick event
              onClick={() => console.log('Edit btn Clicked')}
              badgeContent={<EditIcon />}
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <Image
                src={`/media/users/${user.photo}`}
                height={100}
                width={100}
              />
            </Badge>
          </div>
          <div className={classes.profileContainer}>
            <Typography variant="body1">{user.firstName}</Typography>
            <Typography variant="body1">{user.lastName}</Typography>
          </div>
        </>
      )}
    </div>
  );
}
