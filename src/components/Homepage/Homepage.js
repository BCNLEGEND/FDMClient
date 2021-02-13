import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GuardiaPopUp from '../GuardiaPopUp/GuardiaPopUp';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Services from '../Services/Services/Services';
import Team from '../Team/Team';
import GuardiesCalendar from '../Calendar/Calendar';
import styles from './HomepageStyles';

function Homepage(props) {
  const { classes } = props;
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

export default withStyles(styles)(Homepage);
