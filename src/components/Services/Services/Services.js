import React, { useContext } from 'react';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import useStyles from './ServicesStyles';

import text from '../ServicesText';
import { LanguageContext } from '../../../context/language';

function Services() {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);
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
