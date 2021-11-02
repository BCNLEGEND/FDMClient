import ServicesPage from '@/components/Services/ServicesPage';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';

export default function Services() {
  return (
    <>
      <Head>
        <title>Serveis Integratius » Farmàcia del mar » Arenys de Mar</title>
      </Head>
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
