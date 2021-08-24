import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import useStyles from './LegalStyles';

export default function CookieBanner({ setCookies }) {
  const classes = useStyles();

  return (
    <div className={classes.cookie}>
      <Paper className={classes.cookieContainer}>
        <Typography variant="body2" style={{ margin: '.25rem 0' }}>
          Utilizamos cookies para mejorar su experiencia de navegación.{' '}
          <Link href="/legal/cookies">
            <a>màs info</a>
          </Link>
          <br />
          Asumiremos implícitamente que acepta su uso y está de acuerdo si sigue
          navegando, pero puede optar siempre por no participar y salir de la
          página web.
        </Typography>
      </Paper>
    </div>
  );
}
