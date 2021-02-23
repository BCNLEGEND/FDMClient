import React, { useContext } from 'react';
import Link from 'next/link';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { LanguageContext } from '../../../context/language';
import useStyles from './SimpleMenuStyles';
import text from './SimpleMenuText';

function SimpleMenu() {
  const { language } = useContext(LanguageContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

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
        <MenuItem onClick={handleClose} className={classes.link}>
          <Link href="/" passHref>
            {text[language].home}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.link}>
          <Link href="/services" passHref>
            {text[language].service}
          </Link>
        </MenuItem>
        {/* <MenuItem onClick={handleClose} className={classes.link}>
          <Link href="/team" passHref>
            {text[language].team}
          </Link>
        </MenuItem> */}
        <MenuItem onClick={handleClose} className={classes.link}>
          <Link href="/contact" passHref>
            {text[language].contact}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.link}>
          <Link href="/emergencies" passHref>
            {text[language].emergencies}
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SimpleMenu;
