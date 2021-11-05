import EmergenciesPage from '@/components/EmergenciesPage/EmergenciesPage';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';

export default function Emergencies() {
  return (
    <>
      <Head>
        <title>Guàrdies » Farmàcia del mar » Arenys de Mar</title>
        <meta
          name="description"
          content={`La Farmàcia del Mar està dins la roda de torns de Guàrdia d’Arenys de Mar. Durant el mes de ${Date().getMonth()} ens pertoquen els següents dies de Guàrdia`}
        />
        <meta
          property="og:description"
          content={`La Farmàcia del Mar està dins la roda de torns de Guàrdia d’Arenys de Mar. Durant el mes de ${Date().getMonth()} ens pertoquen els següents dies de Guàrdia`}
        />
      </Head>
      <main>
        <EmergenciesPage />
      </main>
      <Footer />
    </>
  );
}
