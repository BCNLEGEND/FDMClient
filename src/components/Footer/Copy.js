import useStyles from './FooterStyles';

function Copy() {
  const classes = useStyles();
  return (
    <div className={classes.copy}>
      <div>© {new Date().getFullYear()} Farmàcia del Mar</div>
      <div>fet amb ❤️ ❤️ ❤️ en Arenys de Mar</div>
    </div>
  );
}

export default Copy;
