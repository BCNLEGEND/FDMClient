import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import NewOrders from '@/components/Orders/NewOrders';

import AuthContext from '@/context/AuthContext';

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { loggedIn, staff, admin } = useContext(AuthContext);

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
        <Grid item xs={12}>
          <Typography color="primary" variant="h6" component="h2">
            New Orders:
          </Typography>
          <NewOrders />
        </Grid>
      </Grid>
    </main>
  );
};

export default Admin;
