import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import EditProfile from '@/components/User/EditProfile/EditProfile';
import AuthContext from '@/context/AuthContext';

export default function editprofile({ user }) {
  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    !loggedIn && router.push('/account/login');
  }, [loggedIn]);

  return <EditProfile user={user} />;
}

export async function getServerSideProps(context) {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    router.push('/account/login');
  }
  return {
    props: { user }, // will be passed to the page component as props
  };
}
