import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import NewOrders from '@/components/Orders/NewOrders';

import AuthContext from '@/context/AuthContext';

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { loggedIn, staff, admin } = useContext(AuthContext);
  console.log(staff, admin);

  useEffect(() => {
    if (!loggedIn) {
      router.push('/account/login');
    } else {
      if (staff || admin) {
        setLoading(false);
      } else {
        router.push('/user/profile');
      }
    }
  }, [loggedIn]);

  return loading ? (
    <CircularProgress
      style={{ position: 'absolute', top: '50%', left: '50%' }}
    />
  ) : (
    <main style={{ width: '90%', margin: '1rem auto' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography color="primary" variant="h6" component="h2">
            New Orders:
          </Typography>
          <NewOrders />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography color="primary" variant="h6" component="h2">
            ToDo's:
          </Typography>
        </Grid>
      </Grid>
    </main>
  );
};

export default Admin;
