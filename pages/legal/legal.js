import Legal from '@/components/Legal/Legal';
import Head from 'next/head';

export default function legal() {
  return (
    <>
      <Head>
        <title>legal » Farmàcia del mar » Arenys de Mar</title>
        <meta
          name="description"
          content="Detalles Legales legales Fàrmacia del Mar"
        />
        <meta
          property="og:description"
          content="Detalles legales Fàrmacia del Mar"
        />
      </Head>
      <main>
        <Legal />
      </main>
    </>
  );
}
