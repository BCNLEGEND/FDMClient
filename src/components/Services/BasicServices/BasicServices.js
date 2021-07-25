import { useContext } from 'react';

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

import { useMediaQuery } from '@/utils/useMediaQuery';
import { bp } from '@/utils/breakpoints';
import { LanguageContext } from '@/context/language';

import useStyles from './BasicServicesStyles';
import { text, title } from './BasicServicesText';

export default function BasicServices() {
  const classes = useStyles();
  const isBreakpoint = useMediaQuery(bp.lg);
  const { language } = useContext(LanguageContext);
  return (
    <section className={classes.root}>
      <Typography variant="h5" component="h2">
        {title[language]}
      </Typography>
      {isBreakpoint ? (
        <div className={classes.cardContainer}>
          <Card className={classes.singleCard}>
            <CardContent>
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].tabac.title}
                  </Typography>
                  <SmokeFreeIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].tabac.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].spd.title}
                  </Typography>
                  <LocalHospitalIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].spd.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].sessions.title}
                  </Typography>
                  <GroupIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].sessions.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].ortho.title}
                  </Typography>
                  <HealingIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].ortho.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].rent.title}
                  </Typography>
                  <AccessibleIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].rent.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].formulas.title}
                  </Typography>
                  <LocalPharmacyIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].formulas.subtitle}
                </Typography>
              </div>
            </CardContent>
          </Card>
          <Card className={classes.singleCard}>
            <CardContent>
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].measure.title}
                  </Typography>
                  <SpeedIcon className={classes.icon} />
                </div>
                <ul>
                  {text[language].measure.listItems.map((el, i) => (
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
                    {text[language].forats.title}
                  </Typography>
                  <HearingIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].forats.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].regals.title}
                  </Typography>
                  <CardGiftcardIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].regals.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].babies.title}
                  </Typography>
                  <ChildFriendlyIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].babies.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].cosmetics.title}
                  </Typography>
                  <FaceIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].cosmetics.subtitle}
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
                    {text[language].tabac.title}
                  </Typography>
                  <SmokeFreeIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].tabac.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].spd.title}
                  </Typography>
                  <LocalHospitalIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].spd.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].sessions.title}
                  </Typography>
                  <GroupIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].sessions.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].ortho.title}
                  </Typography>
                  <HealingIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].ortho.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].rent.title}
                  </Typography>
                  <AccessibleIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].rent.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].formulas.title}
                  </Typography>
                  <LocalPharmacyIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].formulas.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].measure.title}
                  </Typography>
                  <SpeedIcon className={classes.icon} />
                </div>
                <ul>
                  {text[language].measure.listItems.map((el, i) => (
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
                    {text[language].forats.title}
                  </Typography>
                  <HearingIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].forats.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].regals.title}
                  </Typography>
                  <CardGiftcardIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].regals.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].babies.title}
                  </Typography>
                  <ChildFriendlyIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].babies.subtitle}
                </Typography>
              </div>
              <Divider />
              <div className={classes.singleServiceContainer}>
                <div className={classes.singleService}>
                  <Typography variant="h6" component="h3">
                    {text[language].cosmetics.title}
                  </Typography>
                  <FaceIcon className={classes.icon} />
                </div>
                <Typography variant="body1">
                  {text[language].cosmetics.subtitle}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
}
