import { useContext } from 'react';
import { IMG_API } from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';
import useStyles from './PhotoContestStyles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { LanguageContext } from '../../context/language';

import text from './PhotoContestText';

const PhotoContest = () => {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);

  return (
    <section className={classes.root}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
              <Typography
                className={classes.heading}
                variant="h4"
                component="h2"
              >
                {text[language].contest} 2020
              </Typography>
              <Image
                src={`${IMG_API}/uploads/photos/2020/a3156850-9a9e-4fb1-9d0e-6f59ae40e7ca.JPG`}
                width="50"
                height="50"
                layout="responsive"
              />
            </CardContent>
            <CardActions>
              <Link href="/photocontests/2020">
                <Button size="large">{text[language].all}</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
              <Typography
                className={classes.heading}
                variant="h4"
                component="h2"
              >
                {text[language].contest} 2019
              </Typography>
              <Image
                src={`${IMG_API}/uploads/photos/2019/photocontest2019.jpeg`}
                width="50"
                height="50"
                layout="responsive"
              />
            </CardContent>
            <CardActions>
              <Link href="/photocontests/2019">
                <Button size="large">{text[language].all}</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default PhotoContest;
