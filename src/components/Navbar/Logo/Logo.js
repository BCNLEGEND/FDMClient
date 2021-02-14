import React from 'react';
import Image from 'next/image';
import useStyles from './LogoStyles';

function Logo() {
  const classes = useStyles();
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

export default Logo;
