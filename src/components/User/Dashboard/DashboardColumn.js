import ProfileHeader from '../Profile/ProfileHeader';
import Button from '@material-ui/core/Button';
import useStyles from './DashboardStyles';

export default function DashboardColumn(props) {
  const classes = useStyles();

  const onClick = (e) => {
    props.clickHandler(e.target.innerText.toLowerCase());
  };

  return (
    <div className={classes.column}>
      <ProfileHeader />
      <div className={classes.btnGroup}>
        <Button
          onClick={onClick}
          className={classes.btn}
          variant="contained"
          color="primary"
        >
          Profile
        </Button>
        <Button
          onClick={onClick}
          className={classes.btn}
          variant="contained"
          color="primary"
        >
          Health
        </Button>
        <Button
          onClick={onClick}
          className={classes.btn}
          variant="contained"
          color="primary"
        >
          Services
        </Button>
        <Button
          onClick={onClick}
          className={classes.btn}
          variant="contained"
          color="primary"
        >
          Orders
        </Button>
        <Button
          onClick={onClick}
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
