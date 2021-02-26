import React, { useContext } from 'react';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import IconButton from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import EditIcon from '@material-ui/icons/Edit';

import { UserContext } from '../../../context/user';

import useStyles from './ProfileStyles';

function ProfilePrimary() {
  const { user } = useContext(UserContext);
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <Badge
            color="primary"
            badgeContent={<EditIcon />}
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Image
              src={`/media/users/${user.photo}`}
              height={100}
              width={100}
            />
          </Badge>
        </div>
        <div className={classes.profileContainer}>
          <div className={classes.name}>
            <Typography variant="body2">First Name: </Typography>
            <Typography variant="h5" component="h2">
              {user.firstName}
            </Typography>
          </div>
          <div className={classes.name}>
            <Typography variant="body2">Last Name: </Typography>
            <Typography variant="h5" component="h2">
              {user.lastName}
            </Typography>
          </div>
          <div className={classes.name}>
            <Typography variant="body2">email: </Typography>
            <Typography variant="h5" component="h2">
              {user.email}
            </Typography>
          </div>
        </div>
      </div>
      <Divider />
      <div className={classes.personalData}>
        {user.dni ? (
          <div className={classes.name}>
            <Typography variant="body2">DNI/ NIE: </Typography>
            <Typography variant="h5" component="h2">
              {user.dni}
            </Typography>
          </div>
        ) : (
          ''
        )}
        {user.cip ? (
          <div className={classes.name}>
            <Typography variant="body2">CIP: </Typography>
            <Typography variant="h5" component="h2">
              {user.cip}
            </Typography>
          </div>
        ) : (
          ''
        )}
        {user.birthday ? (
          <div className={classes.name}>
            <Typography variant="body2">Birthday: </Typography>
            <Typography variant="h5" component="h2">
              {new Date(user.birthday).getDate()} -{' '}
              {new Date(user.birthday).getMonth() + 1} -{' '}
              {new Date(user.birthday).getFullYear()}
            </Typography>
          </div>
        ) : (
          ''
        )}
        {user.gender ? (
          <div className={classes.name}>
            <Typography variant="body2">Gender:</Typography>
            <Typography variant="h5" component="h2">
              {user.gender}
            </Typography>
          </div>
        ) : (
          ''
        )}
        <Divider />
        {user.tel ? (
          <div className={classes.name}>
            <Typography variant="body2">Telephone:</Typography>
            <Typography variant="h5" component="h2">
              {user.tel}
            </Typography>
          </div>
        ) : (
          ''
        )}
        {user.mobile ? (
          <div className={classes.name}>
            <Typography variant="body2">Mobile:</Typography>
            <Typography variant="h5" component="h2">
              {user.mobile}
            </Typography>
          </div>
        ) : (
          ''
        )}
        <Divider />
        {user.streetName ? (
          <div className={classes.name}>
            <Typography variant="body2">Address:</Typography>
            <div className={classes.address}>
              <Typography variant="h5" component="h2">
                {user.streetName} {user.streetNumber}
              </Typography>
              <Typography variant="h5" component="h2">
                {user.postalCode}
              </Typography>
              <Typography variant="h5" component="h2">
                {user.city}
              </Typography>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={classes.additionalMenu}>
        <IconButton aria-label="add order" className={classes.iconbtn}>
          <LocalHospitalIcon className={classes.icon} />
          <Typography variant="body1">Health Profile</Typography>
        </IconButton>
        <IconButton aria-label="add order" className={classes.iconbtn}>
          <AllInboxIcon className={classes.icon} />
          <Typography variant="body1">My Orders</Typography>
        </IconButton>
        <IconButton aria-label="add order" className={classes.iconbtn}>
          <AddShoppingCartIcon className={classes.icon} />
          <Typography variant="body1">Place an order</Typography>
        </IconButton>
      </div>
    </section>
  );
}

export default ProfilePrimary;

// tel
// mobile
// dni
// cip
// photo
// position
// streetName
// streetNumber
// postalcode
// city
