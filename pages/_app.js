import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/globals.css';
import theme from '../src/theme/theme';

import Navbar from '../src/components/Navbar/Navbar';
import { UserProvider } from '../src/context/user';
import { LanguageProvider } from '../src/context/language';

const CrispWithNoSSR = dynamic(
  () => import('../src/components/CrispChat/Crisp'),
  {
    ssr: false,
  }
);

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <LanguageProvider>
      <UserProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          ></meta>
          <meta
            name="Description"
            content="A la Farmàcia del Mar en Arenys de Mar, també coneguda com Farmàcia Sílvia Ametlla Pallí, el nostre principal objectiu és estar Sempre a prop teu"
          ></meta>
          <meta
            property="og:description"
            content="A la Farmàcia del Mar en Arenys de Mar, també coneguda com Farmàcia Sílvia Ametlla Pallí, el nostre principal objectiu és estar Sempre a prop teu"
          />
          <title>Farmàcia del mar » Arenys de Mar » Sempre a prop teu</title>
          <link rel="icon" href="/favivon.ico" />
          <link rel="canonical" href="https://www.farmaciadelmar.com" />
          <meta property="og:locale" content="ca_ES" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Farmàcia del mar en Arenys de Mar - Sempre a prop teu"
          />
          <meta
            property="og:description"
            content='A la Farmàcia del Mar en Arenys de Mar, també coneguda com Farmàcia Sílvia Ametlla Pallí, el nostre principal objectiu és estar Sempre a prop teu"'
          />
          <meta property="og:url" content="https://www.farmaciadelmar.com" />
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
            rel="stylesheet"
            href="https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css"
            media="none"
            onload="if(media!=='all')media='all'"
          ></link>
          <link
            rel="preload"
            href="/media/fonts/lovetime_clean-webfont.woff2"
            as="font"
            crossorigin="anonymous"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
          <CrispWithNoSSR />
        </ThemeProvider>
      </UserProvider>
    </LanguageProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
