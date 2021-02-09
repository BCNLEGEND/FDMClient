import React from 'react';
import Auth from '../src/components/Auth/Auth';
import styles from '../styles/Home.module.css';

function Login() {
  return (
    <main className={styles.container}>
      <section>
        <Auth />
      </section>
    </main>
  );
}

export default Login;
