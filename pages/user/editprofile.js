import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import EditProfile from '@/components/user/EditProfile/EditProfile';
import AuthContext from '@/context/AuthContext';

export default function editprofile() {
  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    !loggedIn && router.push('/account/login');
  }, [loggedIn]);

  return <EditProfile />;
}