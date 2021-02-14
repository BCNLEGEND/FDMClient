import React, { useContext } from 'react';
import Image from 'next/image';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import { UserContext } from '../../../context/user';

import useStyles from './ProfileStyles';

function ProfilePrimary() {
  const { user } = useContext(UserContext);
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <div className={classes.container}>
        <Image src={`/media/users/${user.photo}`} height={100} width={100} />
        <div className={classes.name}>
          <TextField
            disabled
            id="firstName"
            label="First Name"
            defaultValue={user.firstName}
            className={classes.text}
            variant="outlined"
          />
          <TextField
            disabled
            id="lastName"
            label="Last Name"
            defaultValue={user.lastName}
            className={classes.text}
            variant="outlined"
          />
        </div>
      </div>
      <TextField
        disabled
        id="email"
        label="Email Address"
        defaultValue={user.email}
        className={classes.mail}
        variant="outlined"
      />
      <Divider />
    </form>
  );
}

export default ProfilePrimary;
