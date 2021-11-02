import EmergenciesPage from '@/components/EmergenciesPage/EmergenciesPage';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';

export default function Emergencies() {
  return (
    <>
      <Head>
        <title>Guàrdies » Farmàcia del mar » Arenys de Mar</title>
      </Head>
      <main>
        <EmergenciesPage />
      </main>
      <Footer />
    </>
  );
}
