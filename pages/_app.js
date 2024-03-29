import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import Navbar from '@/components/Navbar/Navbar';
import CookieConsent from 'react-cookie-consent';
import CookieBanner from '@/components/Legal/CookieBanner';

import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme/theme';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import '@/styles/globals.css';

// Context imports
import { AuthProvider } from '@/context/AuthContext';
import { LanguageProvider } from '@/context/language';
import { OrderProvider } from '@/context/OrderContext';

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
    <AuthProvider>
      <LanguageProvider>
        <OrderProvider>
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
              onLoad="if(media!=='all')media='all'"
            ></link>
            <link
              rel="preload"
              href="/media/fonts/lovetime_clean-webfont.woff2"
              as="font"
              crossOrigin="anonymous"
            />
          </Head>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Navbar />
              <Component {...pageProps} />

              <CookieConsent
                location="bottom"
                style={{
                  margin: 'var(--size-m) auto',
                  background: '',
                }}
                buttonStyle={{ display: 'none' }}
                expires={150}
                children={<CookieBanner />}
                acceptOnScroll={true}
                acceptOnScrollPercentage={10}
              ></CookieConsent>
              <CrispWithNoSSR />
            </ThemeProvider>
          </StyledEngineProvider>
        </OrderProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
