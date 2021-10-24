import { useContext } from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import useStyles from './ServicePageStyles';
import Services from './Services/Services';
import ServiceTabs from './ServicesDetails/ServiceMenu';
import BasicServices from './BasicServices/BasicServices';

import { useMediaQuery } from '@/utils/useMediaQuery';
import { bp } from '@/utils/breakpoints';
import { LanguageContext } from '@/context/language';

import { title } from './ServicesText';

function ServicesPage() {
  const classes = useStyles();
  const isBreakPoint = useMediaQuery(bp.lg);
  const { language } = useContext(LanguageContext);
  return (
    <section className={classes.root}>
      <Typography variant="h3" component="h1" className={classes.heading}>
        {title[language]}
      </Typography>
      <Services />
      <ServiceTabs />
      {!isBreakPoint ? (
        <Image
          layout="responsive"
          objectFit="contain"
          width="100"
          height="45"
          src="/media/img/services01.png"
          alt="Farmàcia del Mar foto"
          className={classes.image}
          priority="true"
        />
      ) : (
        ''
      )}
      <BasicServices />
      <div className={classes.image}>
        <Image
          layout="responsive"
          objectFit="contain"
          width="67"
          height="100"
          src="/media/img/services02.png"
          alt="Farmàcia del Mar foto"
          priority="true"
        />
      </div>
    </section>
  );
}

export default ServicesPage;
