import { useContext } from 'react';
import EditProfile from '@/components/User/EditProfile/EditProfile';
import AuthContext from '@/context/AuthContext';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function editProfile() {
  const { loggedIn } = useContext(AuthContext);

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
        <EditProfile />
      )}
    </>
  );
}
