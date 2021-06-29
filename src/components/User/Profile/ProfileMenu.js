import IconButton from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

import useStyles from './ProfileStyles';

export default function ProfileMenu() {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <Tooltip title="Full Profile">
        <IconButton className={classes.iconbtn}>
          <EditIcon className={classes.icon} />
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
