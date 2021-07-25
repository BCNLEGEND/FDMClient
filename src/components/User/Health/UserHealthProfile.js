// ****************************************************
// @TODO MAKE BACKEND CONNECTION TO GET HEALTH DATA
// DEV DATA IMPORT TO BE DELETED ONES CONECTION MADE WITH SERVER
import { healthData } from './dev_health_data';
// ****************************************************

import React from 'react';
import useStyles from './UserHealthProfileStyles';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import WeightGraph from './WeightGraph';
import BMIGraph from './BMIGraph';

export default function Health() {
  const classes = useStyles();

  // HEALT DATA TO BE DELETED ONES CONECTION IS MADE WITH SERVER
  const { weight, height, bmi, smoker } = healthData;

  return (
    <section className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h2">
            Desarollo presion arterial:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" component="h2">
            Desarollo de peso:
          </Typography>
          <div className={classes.graphContainer}>
            <div className={classes.weightGraph}>
              <WeightGraph />
              <AddCircleIcon />
            </div>
            <div className={classes.additionalContainer}>
              <Typography variant="h5" component="h4">
                BMI:
              </Typography>
              <div className={classes.bmiGraph}>
                <BMIGraph bmi={bmi} />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
