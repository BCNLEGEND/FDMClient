import Header from '../src/components/Header/Header';
import Intro from '../src/components/Intro/Intro';
import Services from '../src/components/Services/Services';
import GuardiesCalendar from '../src/components/Calendar/Calendar';
import Team from '../src/components/Team/Team';
import GuardiaPopUp from '../src/components/GuardiaPopUp/GuardiaPopUp';

import styles from '../styles/Home.module.css';

function Home({ now }) {
  return (
    <div className={styles.container}>
      <GuardiaPopUp />
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
