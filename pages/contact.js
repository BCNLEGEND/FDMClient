import React from 'react';
import Head from 'next/head';
import Map from '../src/components/Map/Map';
import Footer from '../src/components/Footer/Footer';
import styles from '../styles/Contact.module.css';

export default function contact() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <title>Farmàcia del mar » contact</title>
        <link rel="icon" href="/media/img/FDM_favicon.png" />

        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Map />
      </main>
      <Footer />
      <div />
    </>
  );
}
