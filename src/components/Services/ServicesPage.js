import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './ServicePageStyles';
import Services from './Services/Services';
import ServiceTabs from './ServicesDetails/ServiceMenu';
import BasicServices from './BasicServices/BasicServices';

function ServicesPage(props) {
  const { classes } = props;
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

export default withStyles(styles)(ServicesPage);
