import React from 'react';
import Image from 'next/image';
import { withStyles } from '@material-ui/core/styles';
import styles from './ServicesStyles';

function Services(props) {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <div className={classes.imgContainer}>
        <Image
          src="/media/img/FDM_service.png"
          width={200}
          height={200}
          layout="responsive"
          alt="Servicios Farmàcia"
        />
      </div>
      <div className={classes.text}>
        <h2 className={classes.heading}>
          Els nostres serveis i teràpies integratives:
        </h2>
        <p className={classes.paragraph}>
          La nostra Naturòpata Integrativa et pot ajudar i acompanyar a millorar
          la teva salut amb un projecta de vida per aconseguir que et sentis be
          amb el teu cos, la teva ment i l’entorn que te envolta:
        </p>
        <ul className={classes.list}>
          <li className={classes.listItem}>a estimular la teva energia,</li>
          <li className={classes.listItem}>
            a reconduir el teu diagnòstic mèdic,
          </li>
          <li className={classes.listItem}>
            a estabilitzar els nivells de sucre,
          </li>
          <li className={classes.listItem}>
            a canviar d’hàbits per equilibrar el teu pes,
          </li>
          <li className={classes.listItem}>
            a marcar noves pautes d’estil de vida,
          </li>
          <li className={classes.listItem}>
            a fer un detox (desintoxicació) al teus cos,
          </li>
          <li className={classes.listItem}>
            i altres necessitats personals...
          </li>
        </ul>
      </div>
    </section>
  );
}
export default withStyles(styles)(Services);
