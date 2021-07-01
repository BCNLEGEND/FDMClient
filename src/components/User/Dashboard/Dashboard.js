import DashboardColumn from './DashboardColumn';
import SalesGraph from '../../Admin/salesDashboard/SalesGraph';
import Paper from '@material-ui/core/Paper';
import useStyles from './DashboardStyles';

export default function Dashboard() {
  const classes = useStyles();

  return (
    <main className={classes.page}>
      <DashboardColumn />
      <section className={classes.mainContent}>
        <Paper className={classes.paper}>
          <SalesGraph />
        </Paper>
      </section>
    </main>
  );
}
