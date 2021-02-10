import React, { useContext } from 'react';
import Image from 'next/image';
import { withStyles } from '@material-ui/core/styles';
import styles from './ServicesStyles';

import text from './ServicesText';
import { LanguageContext } from '../../context/language';

function Services(props) {
  const { classes } = props;
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
        <h2 className={classes.heading}>{text[language].title}</h2>
        <p className={classes.paragraph}>{text[language].text}</p>
        <ul className={classes.list}>
          {text[language].bulletpoints.map((el, i) => (
            <li key={i} className={classes.listItem}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default withStyles(styles)(Services);
