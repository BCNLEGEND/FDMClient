import Head from 'next/head';
import Header from '../src/components/Header/Header';
import Intro from '../src/components/Intro/Intro';
import Services from '../src/components/Services/Services';
import GuardiesCalendar from '../src/components/Calendar/Calendar';
import Team from '../src/components/Team/Team';
import Footer from '../src/components/Footer/Footer';

import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <meta
          name="Description"
          content="A la Farmàcia del Mar, també coneguda com Farmàcia Sílvia Ametlla Pallí en Arenys de Mar, el nostre principal objectiu és estar Sempre a prop teu"
        ></meta>
        <meta
          property="og:description"
          content="A la Farmàcia del Mar, també coneguda com Farmàcia Sílvia Ametlla Pallí en Arenys de Mar, el nostre principal objectiu és estar Sempre a prop teu"
        />
        <meta name="theme-color" content="#0047ba" />
        <title>Farmàcia del mar » Arenys de Mar » Sempre a prop teu</title>
        <link rel="icon" href="/favivon.ico" />
        <link rel="canonical" href="https://farmaciadelmar.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Farmàcia del mar &raquo; Arenys de Mar &raquo; Sempre a prop teu"
        />
        <meta
          property="og:description"
          content='A la Farmàcia del Mar, també coneguda com Farmàcia Sílvia Ametlla Pallí, el nostre principal objectiu és estar "Sempre a prop teu"'
        />
        <meta property="og:url" content="https://farmaciadelmar.com/" />
        <meta property="og:site_name" content="Farmàcia del Mar" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/FarmaciadelmarArenys/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Sílvia Ametlla Pallí" />
        <meta name="twitter:label2" content="Est. reading time" />
        <meta name="twitter:data2" content="1 minute"></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/media/img/maskable_icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/media/img/maskable_icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/media/img/maskable_icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/farmaciadelmar.webmanifest"></link>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <Intro />
        <Services />
        <Team />
        <GuardiesCalendar />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
