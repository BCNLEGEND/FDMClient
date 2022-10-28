import PhotoContest from '@/components/PhotoContest/PhotoContest';
import Head from 'next/head';

const calendar = () => {
  return (
    <>
      <Head>
        <title>Concurs Fotogràfic » Farmàcia del mar » Arenys de Mar</title>
      </Head>
      <main>
        <PhotoContest />
      </main>
    </>
  );
};

export default calendar;
