import Image from 'next/image';
import Link from 'next/link';
import useStyles from './LogoStyles';

export default function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link href="/">
        <Image
          src="/media/img/FDM_logo_white.webp"
          alt="Logo Farmàcia del Mar"
          width={200}
          height={28}
          priority
        />
      </Link>
    </div>
  );
}
