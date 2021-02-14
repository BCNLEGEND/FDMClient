import React from 'react';
import Homepage from '../src/components/Homepage/Homepage';
import GuardiaPopUp from '../src/components/GuardiaPopUp/GuardiaPopUp';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

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
