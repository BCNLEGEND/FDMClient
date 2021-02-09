import Header from '../src/components/Header/Header';
import Intro from '../src/components/Intro/Intro';
import Services from '../src/components/Services/Services';
import GuardiesCalendar from '../src/components/Calendar/Calendar';
import Team from '../src/components/Team/Team';
import Footer from '../src/components/Footer/Footer';

import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Intro />
        <Services />
        <Team />
        <GuardiesCalendar />
      </main>
    </div>
  );
}

export default Home;
