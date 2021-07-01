import { useContext } from 'react';

import Image from 'next/image';

import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';

import AuthContext from '@/context/AuthContext';

import useStyles from './ProfileHeaderStyles';

export default function ProfileHeader() {
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <div className={classes.imgContainer}>
        <Badge
          color="primary"
          className={classes.badge}
          onClick={() => console.log('Edit btn Clicked')}
          badgeContent={<EditIcon />}
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Image src={`/media/users/${user.photo}`} height={100} width={100} />
        </Badge>
      </div>
      <div className={classes.profileContainer}>
        <Typography variant="body1">{user.firstName}</Typography>
        <Typography variant="body1">{user.lastName}</Typography>
        <Typography variant="body2">{user.email}</Typography>
        {user.tel && <Typography variant="body2">{user.tel}</Typography>}
        {user.mobile && <Typography variant="body2">{user.mobile}</Typography>}
      </div>
    </div>
  );
}
