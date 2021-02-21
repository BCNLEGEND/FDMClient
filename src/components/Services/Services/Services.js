import React, { useContext } from 'react';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import useStyles from './ServicesStyles';

import text from '../ServicesText';
import { LanguageContext } from '../../../context/language';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import { bp } from '../../../utils/breakpoints';

function Services() {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);
  const isBreakPoint = useMediaQuery(bp.lg);
  return (
    <section className={classes.root}>
      <div className={classes.imgContainer}>
        {isBreakPoint ? (
          <Image
            src="/media/img/services_lg.png"
            width={208}
            height={100}
            layout="responsive"
            alt="Servicios Farmàcia"
          />
        ) : (
          <Image
            src="/media/img/services.png"
            width={265}
            height={100}
            layout="responsive"
            alt="Servicios Farmàcia"
          />
        )}
      </div>
      <div className={classes.text}>
        <Typography variant="h5" component="h2" className={classes.heading}>
          {text[language].title}
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          {text[language].text}
        </Typography>
        <ul className={classes.list}>
          {text[language].bulletpoints.map((el, i) => (
            <li key={i} className={classes.li}>
              <Typography variant="body1" className={classes.listItem}>
                {el}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Services;
