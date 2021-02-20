import React from 'react';
import IconButton from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Tooltip from '@material-ui/core/Tooltip';

import useStyles from './ProfileStyles';

function ProfileMenu() {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      {/* <IconButton className={classes.iconbtn}>
        <AccountBoxIcon className={classes.icon} />
      </IconButton> */}
      <Tooltip title="Full Profile">
        <IconButton className={classes.iconbtn}>
          <EditIcon className={classes.icon} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Order">
        <IconButton aria-label="add order" className={classes.iconbtn}>
          <AddShoppingCartIcon className={classes.icon} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete Profile">
        <IconButton aria-label="delete" className={classes.iconbtn}>
          <DeleteIcon className={classes.iconDlt} />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default ProfileMenu;
