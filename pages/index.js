import { useEffect, useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import Homepage from '@/components/Homepage/Homepage';
import GuardiaPopUp from '@/components/GuardiaPopUp/GuardiaPopUp';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import CookieBanner from '@/components/Legal/CookieBanner';

function Home() {
  const { cookies, acceptCookies } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (e.path[1].pageYOffset > 100) {
        acceptCookies(true);
      }
    });
  }, []);

  return (
    <>
      <main>
        <header>
          <GuardiaPopUp />
          {/* {!cookies && <CookieBanner setCookies={acceptCookies} />} */}
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
