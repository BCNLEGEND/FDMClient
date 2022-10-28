import PoliticaPrivacidadDatos from '@/components/Legal/PoliticaPrivacidadDatos';
import Head from 'next/head';

export default function datos() {
  return (
    <>
      <Head>
        <title>
          legal - Politica de Privacidad de Datos » Farmàcia del mar » Arenys de
          Mar
        </title>
        <meta
          name="description"
          content="Legal - Politica de Privacidad de Datos"
        />
        <meta
          property="og:description"
          content="Legal - Politica de Privacidad de Datos"
        />
      </Head>
      <main>
        <PoliticaPrivacidadDatos />
      </main>
    </>
  );
}
