import React, { useContext, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ProfilePrimary from './ProfilePrimary';
import ProfileMenu from './ProfileMenu';

import { UserContext } from '../../../context/user';

import { styles } from './ProfileStyles';

function Profile(props) {
  const { user, loggedIn } = useContext(UserContext);
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.paper}>
        <h1>Your Saved Profile:</h1>
        <ProfilePrimary />
        <ProfileMenu />
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Profile);

// firstName;
// lastName;
// email;
// birthday;
// gender;
// tel;
// mobile;
// dni;
// cip;
// streetName;
// streetNumber;
// postalcode;
// city;

// photo;
