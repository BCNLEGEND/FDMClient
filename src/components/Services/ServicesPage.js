import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './ServicePageStyles';
import Services from './Services/Services';
import ServiceTabs from './ServicesDetails/ServiceMenu';
import BasicServices from './BasicServices/BasicServices';

function ServicesPage() {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Typography variant="h3" component="h1" className={classes.heading}>
        Els nostres serveis:
      </Typography>
      <Services />
      <ServiceTabs />
      <BasicServices />
    </section>
  );
}

export default ServicesPage;
