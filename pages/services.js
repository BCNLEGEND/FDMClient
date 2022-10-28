import ServicesPage from '@/components/Services/ServicesPage';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';

export default function Services() {
  return (
    <>
      <Head>
        <title>Serveis Integratius » Farmàcia del mar » Arenys de Mar</title>
        <meta
          name="description"
          content="T'ajudem i acompanyem a millorar la teva salut com a projecte de vida per aconseguir que et sentis bé amb el teu cos, la teva ment i l’entorn que t'envolta. Cada un de nosaltres som únics i tenim unes necessitats individuals"
        />
        <meta
          property="og:description"
          content="T'ajudem i acompanyem a millorar la teva salut com a projecte de vida per aconseguir que et sentis bé amb el teu cos, la teva ment i l’entorn que t'envolta. Cada un de nosaltres som únics i tenim unes necessitats individuals"
        />
      </Head>
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
