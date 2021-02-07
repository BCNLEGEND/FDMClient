import React from 'react';
import Head from 'next/head';
import Auth from '../src/components/Auth/Auth';
import styles from '../styles/Home.module.css';

function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <title>Farmàcia del mar » Login</title>
        <link rel="icon" href="/media/img/FDM_favicon.png" />
      </Head>
      <section>
        <Auth />
      </section>
    </div>
  );
}

export default Login;
