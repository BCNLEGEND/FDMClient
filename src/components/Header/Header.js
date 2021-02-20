import React, { useContext } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { bp } from '../../utils/breakpoints';
import useStyles from './HeaderStyles';
import Typewriter from '../Typewriter/Typewriter';
import { LanguageContext } from '../../context/language';
import text from './HeaderText';

function header() {
  const { language } = useContext(LanguageContext);
  const classes = useStyles();
  const isBreakPoint = useMediaQuery(bp.lg);
  return (
    <header className={classes.header}>
      {!isBreakPoint ? (
        <div className={classes.background}>
          <Image
            layout="responsive"
            objectFit="contain"
            width="100"
            height="67"
            src="/media/img/FDM_header_01.png"
            alt="Farmàcia del Mar foto"
            className={classes.image}
            priority="true"
          />
        </div>
      ) : (
        <div className={classes.background}>
          <video
            className={classes.bgVideo__content}
            autoPlay
            loop
            muted
            width="100%"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-sea-waves-hitting-the-sandy-seashore-1953-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}
      <h1>
        <span className={classes.primaryHeading}>Farmàcia del Mar</span>
        <span className={classes.secondaryHeading}>
          {text[language].subtitle}
        </span>
        <Typewriter />
      </h1>
    </header>
  );
}

export default header;
