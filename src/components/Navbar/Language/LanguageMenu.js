import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TranslateIcon from '@material-ui/icons/Translate';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import { bp } from '../../../utils/breakpoints';

import { LanguageContext } from '../../../context/language';

import styles from './LanguageMenuStyles';

function LanguageMenu(props) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { classes } = props;
  const isBreakPoint = useMediaQuery(bp.lg);

  const handleChange = (e) => {
    changeLanguage(e);
  };

  return (
    <FormControl className={classes.form}>
      <Select
        labelId="language menu"
        id="Language Menu"
        value=""
        onChange={handleChange}
        displayEmpty
        className={classes.select}
      >
        <MenuItem value="" disabled className={classes.item}>
          {isBreakPoint ? (
            <div className={classes.item}>
              <TranslateIcon /> <p>Language</p>
            </div>
          ) : (
            <TranslateIcon />
          )}
        </MenuItem>
        <MenuItem value="ca" className={classes.item}>
          Cat
        </MenuItem>
        <MenuItem value="es" className={classes.item}>
          Esp
        </MenuItem>
        <MenuItem value="en" className={classes.item}>
          Eng
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default withStyles(styles)(LanguageMenu);
