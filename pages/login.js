import React from 'react';
import Auth from '../src/components/Auth/Auth';
import styles from '../styles/Home.module.css';

function Login() {
  return (
    <div className={styles.container}>
      <section>
        <Auth />
      </section>
    </div>
  );
}

export default Login;
