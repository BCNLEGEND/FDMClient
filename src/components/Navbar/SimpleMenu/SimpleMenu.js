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
        <Link href="/" passHref>
          <MenuItem onClick={handleClose}>{text[language].home}</MenuItem>
        </Link>
        <Link href="/services" passHref>
          <MenuItem onClick={handleClose}>{text[language].service}</MenuItem>
        </Link>
        <Link href="/team" passHref>
          <MenuItem onClick={handleClose}>{text[language].team}</MenuItem>
        </Link>
        <Link href="/contact" passHref>
          <MenuItem onClick={handleClose}>{text[language].contact}</MenuItem>
        </Link>
        <Link href="/emergencies" passHref>
          <MenuItem onClick={handleClose}>
            {text[language].emergencies}
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default withStyles(styles)(SimpleMenu);
