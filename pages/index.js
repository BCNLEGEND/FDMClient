import Homepage from '@/components/Homepage/Homepage';
import GuardiaPopUp from '@/components/GuardiaPopUp/GuardiaPopUp';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

function Home() {
  return (
    <>
      <main>
        <header>
          <GuardiaPopUp />
          <Header />
        </header>
        <section>
          <Homepage />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
