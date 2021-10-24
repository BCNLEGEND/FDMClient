import React from 'react';
import Paper from '@mui/material/Paper';
import ProfilePrimary from './ProfilePrimary';
import ProfileMenu from './ProfileMenu';

import useStyles from './ProfileStyles';

function Profile() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <h1 className={classes.heading}>Your Saved Profile:</h1>
        <ProfilePrimary />
        <ProfileMenu />
      </Paper>
    </div>
  );
}

export default Profile;
