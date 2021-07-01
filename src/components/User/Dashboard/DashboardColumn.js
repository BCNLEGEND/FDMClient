import ProfileHeader from '../Profile/ProfileHeader';
import Button from '@material-ui/core/Button';
import useStyles from './DashboardStyles';

export default function DashboardColumn() {
  const classes = useStyles();
  return (
    <div className={classes.column}>
      <ProfileHeader />
      <div className={classes.btnGroup}>
        <Button className={classes.btn} variant="contained" color="primary">
          Profile
        </Button>
        <Button className={classes.btn} variant="contained" color="primary">
          Health
        </Button>
        <Button className={classes.btn} variant="contained" color="primary">
          Services
        </Button>
        <Button className={classes.btn} variant="contained" color="primary">
          Orders
        </Button>
        <Button
          className={classes.btnReset}
          variant="contained"
          color="secondary"
        >
          Reset Password
        </Button>
      </div>
    </div>
  );
}
