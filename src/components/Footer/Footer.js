import Copy from './Copy';
import FooterContent from './FooterContent';
import useStyles from './FooterStyles';

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <FooterContent />
      <Copy />
    </footer>
  );
}

export default Footer;
