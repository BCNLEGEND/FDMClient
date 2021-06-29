import Paper from '@material-ui/core/Paper';
import ProfilePrimary from './ProfilePrimary';
import ProfileMenu from './ProfileMenu';

import useStyles from './ProfileStyles';

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <h1 className={classes.heading}>Welcome:</h1>
        <ProfilePrimary />
        <ProfileMenu />
      </Paper>
    </div>
  );
}
