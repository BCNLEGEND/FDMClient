import { useContext } from 'react';

import Image from 'next/image';

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import useStyles from './ServicesStyles';
import { text } from '../ServicesText';

import { LanguageContext } from '@/context/language';
import { useMediaQuery } from '@/utils/useMediaQuery';

import { bp } from '@/utils/breakpoints';

export default function Services() {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);
  const isBreakPoint = useMediaQuery(bp.lg);
  return (
    <section className={classes.root}>
      <div className={classes.imgContainer}>
        {isBreakPoint ? (
          <Image
            src="/media/img/services_lg.webp"
            width={208}
            height={100}
            layout="responsive"
            alt="Servicios Farmàcia"
          />
        ) : (
          <Image
            src="/media/img/services.webp"
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
        <List className={classes.list}>
          {text[language].bulletpoints.map((el, i) => (
            <ListItem key={i} className={classes.li}>
              <Typography variant="body1" className={classes.listItem}>
                {el}
              </Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </section>
  );
}
