import React from 'react';
import Image from 'next/image';
import { withStyles } from '@material-ui/core/styles';
import styles from './LogoStyles';

function Logo(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Image
        src="/media/img/FDM_logo_white.png"
        alt="Logo Farmàcia del Mar"
        width={200}
        height={28}
        priority
      />
    </div>
  );
}

export default withStyles(styles)(Logo);
