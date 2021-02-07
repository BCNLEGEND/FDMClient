import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import styles from './IntroStyles';

function Intro(props) {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <div className={classes.text}>
        <h2 className={classes.header}>
          <span className={classes.headerMain}>FARMÀCIA INTEGRATIVA,</span>
          <span className={classes.headerSub}>
            "I que vol dir això d'Integrativa"?
          </span>
        </h2>
        <p className={classes.textContent}>
          A la Farmàcia del Mar d'Arenys de Mar, tractem la salut de les
          persones de manera global. Es a dir, ens interessem per totes les
          causes que originen el seu malestar i aconsellem la solucio mès
          apropiada i <span className={classes.callout}>personalitzada</span>{' '}
          per aquesta persona, donant prioritat, sempre que sigui possible, als{' '}
          <span className={classes.callout}>productes naturals</span> ja sigui
          mitjansant suplementacio ortomolucular, fitoteràpia, olis essencials,
          etc. que combinats o no amb els{' '}
          <span className={classes.callout}>medicaments tradicionals</span>,
          milloren i estitueixen la salut del pacient.
        </p>

        <p className={classes.qoute}>
          "En definitiva, <span className={classes.callout}>fusionem</span>{' '}
          ambdues eines per donar sempre el millor consell fent emfasi a la
          prevenciò de les malalties."
        </p>
      </div>
      <div className={classes.img}>
        <Image
          layout="responsive"
          width="100"
          height="100"
          src="/media/img/ETI_round.jpg"
          alt="Terapias Integrativa"
          className={classes.image}
        />
      </div>
    </section>
  );
}

export default withStyles(styles)(Intro);
