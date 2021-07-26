import { useState } from 'react';

import DashboardColumn from './DashboardColumn';
import UserProfile from '../Profile/UserProfile';
import UserHealthProfile from '../Health/UserHealthProfile';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './DashboardStyles';
import AuthContext from '@/context/AuthContext';

export default function Dashboard() {
  const classes = useStyles();
  const [content, setContent] = useState('profile');

  return (
    <main className={classes.page}>
      <DashboardColumn clickHandler={setContent} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {content === 'profile' && <UserProfile />}
            {content === 'health' && <UserHealthProfile />}
          </Paper>
        </Grid>
      </Grid>
    </main>
  );
}
