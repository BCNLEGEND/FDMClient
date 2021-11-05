import PoliticaDeCookies from '@/components/Legal/PoliticaDeCookies';
import Head from 'next/head';

export default function cookies() {
  return (
    <>
      <Head>
        <title>
          legal - Politica de Cookies » Farmàcia del mar » Arenys de Mar
        </title>
        <meta name="description" content="Legal - Politica de Cookies" />
        <meta property="og:description" content="Legal - Politica de Cookies" />
      </Head>
      <main>
        <PoliticaDeCookies />
      </main>
    </>
  );
}
