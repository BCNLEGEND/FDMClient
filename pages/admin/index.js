import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NewOrders from '@/components/Admin/NewOrders';

const Admin = () => {
  return (
    <main style={{ width: '90%', margin: '1rem auto' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" component="h2">
              New Orders:
            </Typography>
            <NewOrders />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
              Notifications:
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2">
            ToDo's:
          </Typography>
        </Grid>
      </Grid>
    </main>
  );
};

export default Admin;
