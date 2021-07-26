import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Dashboard from '@/components/User/Dashboard/Dashboard';
import AuthContext from '@/context/AuthContext';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function userDashboard() {
  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      router.push('/account/login');
    }
  }, []);

  return (
    <>
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
        <Dashboard />
      )}
    </>
  );
}
