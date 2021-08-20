import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserProfile from '@/components/User/Profile/UserProfile';
import AuthContext from '@/context/AuthContext';

const profile = () => {
  const router = useRouter();
  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!loggedIn) {
      router.push('/account/login');
    }
  }, [loggedIn]);

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
        <main>
          <UserProfile />
        </main>
      )}
    </>
  );
};

export default profile;
