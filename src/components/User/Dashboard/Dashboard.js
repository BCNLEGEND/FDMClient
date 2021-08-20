import { useState } from 'react';

import DashboardColumn from './DashboardColumn';
import UserProfile from '../Profile/UserProfile';
import UserHealthProfile from '../Health/UserHealthProfile';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './DashboardStyles';

export default function Dashboard() {
  const classes = useStyles();
  const [content, setContent] = useState('profile');

  return (
    <main className={classes.page}>
      <Grid container justifyContent="center" alignItems="center">
        <DashboardColumn clickHandler={setContent} />
      </Grid>
    </main>
  );
}
