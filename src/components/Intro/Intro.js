import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import styles from './IntroStyles';
import text from './IntroText';
import { LanguageContext } from '../../context/language';

function Intro(props) {
  const { classes } = props;
  const { language } = useContext(LanguageContext);
  return (
    <section className={classes.root}>
      <div className={classes.text}>
        <h2 className={classes.header}>
          <span className={classes.headerMain}>{text[language].title}</span>
          <span className={classes.headerSub}>{text[language].question}</span>
        </h2>
        <p className={classes.textContent}>
          {text[language].text01}{' '}
          <span className={classes.callout}>{text[language].callout01}</span>{' '}
          {text[language].text02}{' '}
          <span className={classes.callout}>{text[language].callout02}</span>{' '}
          {text[language].text03}{' '}
          <span className={classes.callout}>{text[language].callout03}</span>{' '}
          {text[language].text04}
        </p>

        <p className={classes.qoute}>
          {text[language].quote01}{' '}
          <span className={classes.callout}>{text[language].callout04}</span>{' '}
          {text[language].quote02}
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
