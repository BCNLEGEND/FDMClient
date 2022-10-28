// React Imports
import { useState, useContext } from 'react';
// Nextjs Imports
import Link from 'next/link';

// Material UI Imports
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

//  Context Imports
import { LanguageContext } from '@/context/language';

// Styles Imports
import useStyles from './SimpleMenuStyles';

// Text Imports
import text from './SimpleMenuText';
import { Typography } from '@mui/material';

export default function SimpleMenu() {
  const { language } = useContext(LanguageContext);
  const [anchorEl, setAnchorEl] = useState(null);
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
        aria-label="navigation-menu"
        onClick={handleClick}
        color="inherit"
        size="large"
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
        <MenuItem onClick={handleClose} className={classes.link}>
          <Link href="/photocontests" passHref>
            {text[language].photocontest}
          </Link>
        </MenuItem>
        {/* <MenuItem onClick={handleClose} className={classes.linkGlow}>
          <Link href="/2021/vote" passHref>
            {text[language].vote}
          </Link>
        </MenuItem> */}
        <MenuItem onClick={handleClose} className={classes.linkGlow}>
          <Link href="/2021/winners" passHref>
            {text[language].winners}
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
