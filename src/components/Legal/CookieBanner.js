import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './LegalStyles';

export default function CookieBanner({ setCookies }) {
  const classes = useStyles();

  return (
    <div className={classes.cookie}>
      <Paper className={classes.cookieContainer}>
        <Typography variant="body2" style={{ margin: '.25rem 0' }}>
          Utilizamos cookies para mejorar su experiencia de navegación.
          <br />
          Asumiremos implícitamente que acepta su uso y está de acuerdo si sigue
          navegando, pero puede optar siempre por no participar y salir de la
          página web.
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() => setCookies()}
        >
          Acceptar
        </Button>
        <Link href="/legal/cookies">
          <Button color="primary" size="small">
            Màs info
          </Button>
        </Link>
      </Paper>
    </div>
  );
}
