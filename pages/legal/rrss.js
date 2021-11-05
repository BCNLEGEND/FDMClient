import CodigoConductaRRSS from '@/components/Legal/CodigoConductaRRSS';
import Head from 'next/head';

export default function rrss() {
  return (
    <>
      <Head>
        <title>
          Legal - Còdigo de Conducta RRSS » Farmàcia del mar » Arenys de Mar
        </title>
        <meta name="description" content="Legal - Còdigo de Conducta RRSS" />
        <meta
          property="og:description"
          content="Legal - Còdigo de Conducta RRSS"
        />
      </Head>
      <main>
        <CodigoConductaRRSS />
      </main>
    </>
  );
}
