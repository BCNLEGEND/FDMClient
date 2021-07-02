import { useState, useContext } from 'react';
import DashboardColumn from './DashboardColumn';
import UserProfile from '../Profile/UserProfile';
import Paper from '@material-ui/core/Paper';
import useStyles from './DashboardStyles';

export default function Dashboard() {
  const classes = useStyles();
  const [content, setContent] = useState('profile');

  return (
    <main className={classes.page}>
      <DashboardColumn clickHandler={setContent} />
      <section className={classes.mainContent}>
        <Paper className={classes.paper}>
          {content === 'profile' && <UserProfile />}
        </Paper>
      </section>
    </main>
  );
}
