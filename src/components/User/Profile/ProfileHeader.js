import { useContext, useState } from 'react';
import { IMG_API } from '@/utils/api';

import Image from 'next/image';

import FileUploadDialog from './FileUploadDialog';

import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';

import AuthContext from '@/context/AuthContext';

import useStyles from './ProfileHeaderStyles';

export default function ProfileHeader() {
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Grid
      style={{ marginBottom: '1rem' }}
      container
      item
      xs={12}
      spacing={2}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <FileUploadDialog open={open} onClose={handleClose} />
      {user && (
        <>
          <Grid item xs={4}>
            <Badge
              color="primary"
              className={classes.badge}
              // @TODO Define Edit profile photo Onclick event
              onClick={handleClickOpen}
              badgeContent={<EditIcon />}
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <Image
                src={`${IMG_API}${user.photo}`}
                height={80}
                width={80}
                className={classes.img}
              />
            </Badge>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5">{user.firstName}</Typography>
            <Typography variant="h5">{user.lastName}</Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
}
