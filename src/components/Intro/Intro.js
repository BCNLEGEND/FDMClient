import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import useStyles from './IntroStyles';
import text from './IntroText';
import { LanguageContext } from '../../context/language';

function Intro() {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);
  return (
    <section className={classes.root}>
      <div className={classes.text}>
        <Typography variant="h5" component="h2" className={classes.header}>
          <span className={classes.headerMain}>{text[language].title}</span>
          <span className={classes.headerSub}>{text[language].question}</span>
        </Typography>
        <Typography variant="body1" className={classes.textContent}>
          {text[language].text01}{' '}
          <span className={classes.callout}>{text[language].callout01}</span>{' '}
          {text[language].text02}{' '}
          <span className={classes.callout}>{text[language].callout02}</span>{' '}
          {text[language].text03}{' '}
          <span className={classes.callout}>{text[language].callout03}</span>{' '}
          {text[language].text04}
        </Typography>

        <Typography variant="body1" className={classes.qoute} gutterBottom>
          {text[language].quote01}{' '}
          <span className={classes.callout}>{text[language].callout04}</span>{' '}
          {text[language].quote02}
        </Typography>
      </div>
      <div className={classes.img}>
        <Image
          layout="responsive"
          width="102"
          height="100"
          src="/media/img/ETI_round.png"
          alt="Terapias Integrativa"
          className={classes.image}
        />
      </div>
    </section>
  );
}

export default Intro;
