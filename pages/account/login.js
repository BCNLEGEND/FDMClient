import React from 'react';
import LoginForm from '@/components/Auth/Login/LoginForm';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext';

function Login() {
  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    loggedIn && router.push('/user/dashboard');
  }, [loggedIn]);

  return (
    <main>
      <section>{!loggedIn && <LoginForm />}</section>
    </main>
  );
}

export default Login;
