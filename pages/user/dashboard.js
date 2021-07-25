import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Dashboard from '@/components/user/Dashboard/Dashboard';
import AuthContext from '@/context/AuthContext';

export default function userDashboard() {
  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    !loggedIn && router.push('/account/login');
  }, [loggedIn]);

  return <Dashboard />;
}
