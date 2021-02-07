import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './FooterStyles';

function Copy(props) {
  const { classes } = props;
  return (
    <div className={classes.copy}>
      <div>© 2021 Farmàcia del Mar</div>
      <div>fet amb ❤️ ❤️ ❤️ en Arenys de Mar</div>
    </div>
  );
}

export default withStyles(styles)(Copy);
