import { useContext } from 'react';
import Link from 'next/link';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import Switch from '@material-ui/core/Switch';

import AuthContext from '@/context/AuthContext';

import useStyles from './UserProfileStyles';

export default function userProfile() {
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.personalData}>
        {user && (
          <>
            {!user.dni &&
              !user.cip &&
              !user.birthday &&
              !user.gender &&
              !user.tel &&
              !user.mobile &&
              !user.streetName && (
                <div className={classes.noProfile}>
                  <Typography variant="h6" component="h4">
                    Hello {user.firstName},
                  </Typography>
                  <Typography variant="h6" component="h4">
                    Welcome to your personal area!
                  </Typography>
                  <Typography variant="h6" component="h4">
                    Go to Edit profile to add your personal data
                  </Typography>
                </div>
              )}
            {user.dni && (
              <div className={classes.name}>
                <Typography variant="body2">DNI/ NIE: </Typography>
                <Typography variant="h6" component="h2">
                  {user.dni}
                </Typography>
              </div>
            )}
            {user.cip && (
              <div className={classes.name}>
                <Typography variant="body2">CIP: </Typography>
                <Typography variant="h6" component="h2">
                  {user.cip}
                </Typography>
              </div>
            )}
            {user.birthday && (
              <div className={classes.name}>
                <Typography variant="body2">Birthday: </Typography>
                <Typography variant="h6" component="h2">
                  {new Date(user.birthday).getDate()} -{' '}
                  {new Date(user.birthday).getMonth() + 1} -{' '}
                  {new Date(user.birthday).getFullYear()}
                </Typography>
              </div>
            )}
            {user.gender && (
              <div className={classes.name}>
                <Typography variant="body2">Gender:</Typography>
                <Typography variant="h6" component="h2">
                  {user.gender}
                </Typography>
              </div>
            )}
            <Divider />
            {user.tel && (
              <div className={classes.name}>
                <Typography variant="body2">Telephone:</Typography>
                <Typography variant="h6" component="h2">
                  {user.tel}
                </Typography>
              </div>
            )}
            {user.mobile && (
              <div className={classes.name}>
                <Typography variant="body2">Mobile:</Typography>
                <Typography variant="h6" component="h2">
                  {user.mobile}
                </Typography>
              </div>
            )}
            {user.email && (
              <div className={classes.name}>
                <Typography variant="body2">Email:</Typography>
                <Typography variant="h6" component="h2">
                  {user.email}
                </Typography>
              </div>
            )}
            <Divider />
            {user.streetName && (
              <div className={classes.name}>
                <Typography variant="body2">Address:</Typography>
                <div className={classes.address}>
                  <Typography variant="h6" component="h2">
                    {user.streetName} {user.streetNumber}
                  </Typography>
                  <Typography variant="h6" component="h2">
                    {user.postalCode}
                  </Typography>
                  <Typography variant="h6" component="h2">
                    {user.city}
                  </Typography>
                </div>
              </div>
            )}
            <Divider />
            <div classname={classes.checkboxGroup}>
              <FormControlLabel
                className={classes.switch}
                control={<Switch color="primary" checked={user.acceptDatos} />}
                label="Accepts Privacy Policy"
              />
              <FormControlLabel
                className={classes.switch}
                control={<Switch color="primary" checked={user.acceptMKT} />}
                label="Accepts MKT communication"
              />
            </div>
            <div className={classes.profileEdit}>
              <Link href="/user/editprofile" passHref>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<EditIcon />}
                >
                  Edit Profile
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
