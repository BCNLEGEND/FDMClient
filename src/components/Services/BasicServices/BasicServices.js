import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import GroupIcon from '@material-ui/icons/Group';
import AccessibleIcon from '@material-ui/icons/Accessible';
import SpeedIcon from '@material-ui/icons/Speed';
import HearingIcon from '@material-ui/icons/Hearing';
import HealingIcon from '@material-ui/icons/Healing';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import FaceIcon from '@material-ui/icons/Face';

import { useMediaQuery } from '../../../utils/useMediaQuery';
import { bp } from '../../../utils/breakpoints';

import useStyles from './BasicServicesStyles';
import text from './BasicServicesText';

function BasicServices() {
  const classes = useStyles();
  const isBreakpoint = useMediaQuery(bp.lg);
  return (
    <section className={classes.root}>
      <Typography variant="h5" component="h2">
        Nostres serveis basics:
      </Typography>
      {isBreakpoint ? (
        <div className={classes.cardContainer}>
          <Card className={classes.singleCard}>
            <CardContent>
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].tabac.title}
                  </Typography>
                  <SmokeFreeIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].tabac.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].spd.title}
                  </Typography>
                  <LocalHospitalIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].spd.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].sessions.title}
                  </Typography>
                  <GroupIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].sessions.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].ortho.title}
                  </Typography>
                  <HealingIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].ortho.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].rent.title}
                  </Typography>
                  <AccessibleIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].rent.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].formulas.title}
                  </Typography>
                  <LocalPharmacyIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].formulas.subtitle}
                </Typography>
              </div>
            </CardContent>
          </Card>
          <Card className={classes.singleCard}>
            <CardContent>
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].measure.title}
                  </Typography>
                  <SpeedIcon className={classes.icon} />
                </div>
                <ul>
                  {text['ca'].measure.listItems.map((el, i) => (
                    <Typography key={i} variant="body1">
                      {el}
                    </Typography>
                  ))}
                </ul>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].forats.title}
                  </Typography>
                  <HearingIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].forats.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].regals.title}
                  </Typography>
                  <CardGiftcardIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].regals.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].babies.title}
                  </Typography>
                  <ChildFriendlyIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].babies.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].cosmetics.title}
                  </Typography>
                  <FaceIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].cosmetics.subtitle}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className={classes.cardContainer}>
          <Card className={classes.singleCard}>
            <CardContent>
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].tabac.title}
                  </Typography>
                  <SmokeFreeIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].tabac.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].spd.title}
                  </Typography>
                  <LocalHospitalIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].spd.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].sessions.title}
                  </Typography>
                  <GroupIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].sessions.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].ortho.title}
                  </Typography>
                  <HealingIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].ortho.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].rent.title}
                  </Typography>
                  <AccessibleIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].rent.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].formulas.title}
                  </Typography>
                  <LocalPharmacyIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].formulas.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].measure.title}
                  </Typography>
                  <SpeedIcon className={classes.icon} />
                </div>
                <ul>
                  {text['ca'].measure.listItems.map((el, i) => (
                    <Typography key={i} variant="body1">
                      {el}
                    </Typography>
                  ))}
                </ul>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].forats.title}
                  </Typography>
                  <HearingIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].forats.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].regals.title}
                  </Typography>
                  <CardGiftcardIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].regals.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].babies.title}
                  </Typography>
                  <ChildFriendlyIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].babies.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text['ca'].cosmetics.title}
                  </Typography>
                  <FaceIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text['ca'].cosmetics.subtitle}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
}

export default BasicServices;
