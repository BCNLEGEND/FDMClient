import Intro from '../Intro/Intro';
import Services from '../Services/Services/Services';
import Team from '../Team/Team';
import GuardiesCalendar from '../Calendar/Calendar';
import useStyles from './HomepageStyles';

export default function Homepage() {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <section>
        <Intro />
        <Services />
        <Team />
        <GuardiesCalendar />
      </section>
    </main>
  );
}
