import React from 'react';
import IconButton from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';

import useStyles from './ProfileStyles';

function ProfileMenu() {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <Tooltip title="Full Profile">
        <IconButton className={classes.iconbtn} size="large">
          <EditIcon className={classes.icon} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete Profile">
        <IconButton aria-label="delete" className={classes.iconbtn} size="large">
          <DeleteIcon className={classes.iconDlt} />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default ProfileMenu;
