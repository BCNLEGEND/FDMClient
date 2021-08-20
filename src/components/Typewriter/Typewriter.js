import React, { useContext } from 'react';
import { withStyles } from '@material-ui/styles';
import { LanguageContext } from '@/context/language';
import styles from './TypewriterStyles';
import Typer from './Typer';
import text from './text';

function Typewriter(props) {
  const { language } = useContext(LanguageContext);
  const { classes } = props;
  return (
    <span className={classes.span}>
      <Typer
        heading={text[language].heading}
        dataText={text[language].dataText}
      />
    </span>
  );
}

export default withStyles(styles)(Typewriter);
