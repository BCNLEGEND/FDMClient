import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useStyles from './LogoStyles';

const CustomComponent = React.forwardRef(function CustomComponent(props, ref) {
  return (
    <Image
      src="/media/img/FDM_logo_white.webp"
      alt="Logo Farmàcia del Mar"
      width={200}
      height={28}
      priority
    />
  );
});

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link href="/" passHref>
        <CustomComponent />
      </Link>
    </div>
  );
};

export default Logo;
