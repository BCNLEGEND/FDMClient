import React, {useEffect, useContext} from 'react';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext';
import { OrderProvider } from '@/context/order';

import Grid from '@material-ui/core/Grid';
import AdminDashboard from '@/components/Admin/AdminDashboard';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function dashboard() {
  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() =>!loggedIn && router.push('/account/login'),[]);


  return (
    <OrderProvider>
      <main>
      {!loggedIn ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          className="loaderContainer"
        >
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <AdminDashboard />
      )}
      </main>
    </OrderProvider>
  );
}
