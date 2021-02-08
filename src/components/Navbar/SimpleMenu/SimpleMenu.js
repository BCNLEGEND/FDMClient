import React, { useContext } from 'react';
import Link from 'next/link';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/styles';

import { LanguageContext } from '../../../context/language';
import styles from '../NavbarStyles';
import text from './text';

function SimpleMenu(props) {
  const { language } = useContext(LanguageContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { classes } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <MenuIcon className={classes.iconBtn} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/">
            <a className={classes.menuLink}>{text[language].home}</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/services">
            <a className={classes.menuLink}>{text[language].service}</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/team">
            <a className={classes.menuLink}>{text[language].team}</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/contact">
            <a className={classes.menuLink}>{text[language].contact}</a>
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link href="/emergencies">
            <a className={classes.menuLink}>{text[language].emergencies}</a>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default withStyles(styles)(SimpleMenu);
