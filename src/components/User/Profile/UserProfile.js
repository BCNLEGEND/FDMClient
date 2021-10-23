import { useContext } from 'react';
import Link from 'next/link';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';

import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import AuthContext from '@/context/AuthContext';

import useStyles from './UserProfileStyles';
import ProfileHeader from './ProfileHeader';

import text from './UserProfileText';
import { LanguageContext } from '@/context/language';

export default function userProfile() {
  const { user } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Grid
        className={classes.gridContainer}
        container
        spacing={2}
        justifyContent="space-around"
      >
        <Grid item xs={12}>
          <Link href="/">
            <Button color="primary" className={classes.button}>
              <ArrowBackIosIcon fontSize="small" /> {text[language].back}
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Paper className={classes.paper}>
        <Grid container direction="column" className={classes.personalData}>
          <ProfileHeader />
          {user && (
            <>
              {!user.dni &&
                !user.cip &&
                !user.birthday &&
                !user.gender &&
                !user.tel &&
                !user.mobile &&
                !user.streetName && (
                  <Grid item className={classes.noProfile}>
                    <Typography variant="h6" component="h4">
                      Hello {user.firstName},
                    </Typography>
                    <Typography variant="h6" component="h4">
                      Welcome to your personal area!
                    </Typography>
                    <Typography variant="h6" component="h4">
                      Go to Edit profile to add your personal data
                    </Typography>
                  </Grid>
                )}
              {user.dni && (
                <Grid item className={classes.name}>
                  <Typography variant="body2">{text[language].id}: </Typography>
                  <Typography variant="h6" component="h2">
                    {user.dni}
                  </Typography>
                </Grid>
              )}
              {user.cip && (
                <Grid item className={classes.name}>
                  <Typography variant="body2">
                    {text[language].CIP}:{' '}
                  </Typography>
                  <Typography variant="h6" component="h2">
                    {user.cip}
                  </Typography>
                </Grid>
              )}
              {user.birthday && (
                <Grid item className={classes.name}>
                  <Typography variant="body2">
                    {text[language].bday}:{' '}
                  </Typography>
                  <Typography variant="h6" component="h2">
                    {new Date(user.birthday).getDate()} -{' '}
                    {new Date(user.birthday).getMonth() + 1} -{' '}
                    {new Date(user.birthday).getFullYear()}
                  </Typography>
                </Grid>
              )}
              {user.gender && (
                <Grid item className={classes.name}>
                  <Typography variant="body2">
                    {text[language].gender}:
                  </Typography>
                  <Typography variant="h6" component="h2">
                    {user.gender}
                  </Typography>
                </Grid>
              )}
              <Divider />
              {user.tel && (
                <Grid item className={classes.name}>
                  <Typography variant="body2">{text[language].tel}:</Typography>
                  <Typography variant="h6" component="h2">
                    {user.tel}
                  </Typography>
                </Grid>
              )}
              {user.mobile && (
                <Grid item className={classes.name}>
                  <Typography variant="body2">{text[language].mob}:</Typography>
                  <Typography variant="h6" component="h2">
                    {user.mobile}
                  </Typography>
                </Grid>
              )}
              {user.email && (
                <Grid item className={classes.name}>
                  <Typography variant="body2">
                    {text[language].email}:
                  </Typography>
                  <Typography variant="h6" component="h2">
                    {user.email}
                  </Typography>
                </Grid>
              )}
              <Divider />
              {user.streetName && (
                <Grid item className={classes.name}>
                  <Typography variant="body2">
                    {text[language].address}:
                  </Typography>
                  <div className={classes.address}>
                    <Typography variant="h6" component="h2">
                      {user.streetName} {user.streetNumber}
                    </Typography>
                    <Typography variant="h6" component="h2">
                      {user.postalcode}
                    </Typography>
                    <Typography variant="h6" component="h2">
                      {user.city}
                    </Typography>
                  </div>
                </Grid>
              )}
              <Divider />
              <Grid item className={classes.checkboxGroup}>
                <FormControlLabel
                  className={classes.switch}
                  control={
                    <Switch color="primary" checked={user.acceptDatos} />
                  }
                  label="Accepts Privacy Policy"
                />
                <FormControlLabel
                  className={classes.switch}
                  control={<Switch color="primary" checked={user.acceptMKT} />}
                  label="Accepts MKT communication"
                />
              </Grid>
              <Grid item className={classes.profileEdit}>
                <Link href="/user/editprofile" passHref>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<EditIcon />}
                  >
                    {text[language].editProfile}
                  </Button>
                </Link>
              </Grid>
            </>
          )}
        </Grid>
      </Paper>
    </section>
  );
}
