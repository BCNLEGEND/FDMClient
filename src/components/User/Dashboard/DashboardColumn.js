import ProfileHeader from '../Profile/ProfileHeader';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import useStyles from './DashboardStyles';

import Link from 'next/link';

import Grid from '@mui/material/Grid';

export default function DashboardColumn(props) {
  const classes = useStyles();

  const onClick = (e) => {
    props.clickHandler(e.target.innerText.toLowerCase());
  };

  return (
    <Grid container spacing={4} direction="column" alignItems="center">
      <ProfileHeader />
      <Grid item xs={12}>
        <ButtonGroup
          orientation="vertical"
          aria-label="User profile button group"
        >
          <Link href="/user/profile">
            <Button className={classes.btn} variant="contained" color="primary">
              Profile
            </Button>
          </Link>
          <Link href="/user/healthprofile">
            <Button
              onClick={onClick}
              className={classes.btn}
              variant="contained"
              color="primary"
            >
              Health
            </Button>
          </Link>
          <Link href="/user/healthprofile">
            <Button
              onClick={onClick}
              className={classes.btn}
              variant="contained"
              color="primary"
            >
              Book a Service
            </Button>
          </Link>
          <Link href="/user/healthprofile">
            <Button
              onClick={onClick}
              className={classes.btn}
              variant="contained"
              color="primary"
            >
              My Services
            </Button>
          </Link>
          <Link href="/user/healthprofile">
            <Button
              onClick={onClick}
              className={classes.btn}
              variant="contained"
              color="primary"
            >
              My Prescribtions
            </Button>
          </Link>
          <Link href="/user/healthprofile">
            <Button
              onClick={onClick}
              className={classes.btn}
              variant="contained"
              color="primary"
            >
              Orders
            </Button>
          </Link>
          <Link href="/user/healthprofile">
            <Button
              onClick={onClick}
              className={classes.btnReset}
              variant="contained"
              color="secondary"
            >
              Reset Password
            </Button>
          </Link>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
