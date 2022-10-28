import Map from '@/components/Map/Map';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us » Farmàcia del mar » Arenys de Mar</title>
        <meta
          name="description"
          content="Si necessites saber alguna cosa, només has de contactar amb nosaltres"
        />
        <meta
          property="og:description"
          content="Si necessites saber alguna cosa, només has de contactar amb nosaltres"
        />
      </Head>
      <main>
        <Map />
      </main>
      <Footer />
    </>
  );
}
