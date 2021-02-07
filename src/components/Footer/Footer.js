import React from 'react';
import Copy from './Copy';
import FooterContent from './FooterContent';
import { withStyles } from '@material-ui/core/styles';
import styles from './FooterStyles';

function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.root}>
      <FooterContent />
      <Copy />
    </footer>
  );
}

export default withStyles(styles)(Footer);
