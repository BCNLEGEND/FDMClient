import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserHealthProfile from '@/components/User/Health/UserHealthProfile';
import AuthContext from '@/context/AuthContext';

const healthprofile = () => {
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
          <UserHealthProfile />
        </main>
      )}
    </>
  );
};

export default healthprofile;
