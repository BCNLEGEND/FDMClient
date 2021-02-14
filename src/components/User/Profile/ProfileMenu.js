import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import useStyles from './ProfileStyles';

function ProfileMenu() {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <Button
        variant="contained"
        className={classes.btnDefault}
        startIcon={<AccountBoxIcon />}
      >
        {' '}
        Perfil completo
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        startIcon={<CloudUploadIcon />}
      >
        {' '}
        Cambiar foto
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        startIcon={<EditIcon />}
      >
        Editar Perfil
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.btnShop}
        startIcon={<AddShoppingCartIcon />}
      >
        {' '}
        Hacer un encargo
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.btnDelete}
        endIcon={<DeleteIcon />}
      >
        Borrar Perfil
      </Button>
    </div>
  );
}

export default ProfileMenu;
