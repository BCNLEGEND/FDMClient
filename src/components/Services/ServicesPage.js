import React from 'react';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import useStyles from './ServicePageStyles';
import Services from './Services/Services';
import ServiceTabs from './ServicesDetails/ServiceMenu';
import BasicServices from './BasicServices/BasicServices';

import { useMediaQuery } from '../../utils/useMediaQuery';
import { bp } from '../../utils/breakpoints';

function ServicesPage() {
  const classes = useStyles();
  const isBreakPoint = useMediaQuery(bp.lg);
  return (
    <section className={classes.root}>
      <Typography variant="h3" component="h1" className={classes.heading}>
        Els nostres serveis:
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
      <Image
        layout="responsive"
        objectFit="contain"
        width="67"
        height="100"
        src="/media/img/services02.png"
        alt="Farmàcia del Mar foto"
        className={classes.image}
        priority="true"
      />
    </section>
  );
}

export default ServicesPage;
