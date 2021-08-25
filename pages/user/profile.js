import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
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
        <CircularProgress
          style={{ position: 'absolute', top: '50%', left: '50%' }}
        />
      ) : (
        <main>
          <UserProfile />
        </main>
      )}
    </>
  );
};

export default profile;
