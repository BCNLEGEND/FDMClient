import Paper from '@material-ui/core/Paper';
import useStyles from './LegalStyles';

export default function CookieBanner() {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <div>
        <p>
          Utilizamos cookies para mejorar tu experiencia de navegación.
          Asumiremos implícitamente que aceptas su uso y estás de acuerdo si
          sigues navegando, pero puedes optar siempre por no participar y salir
          de la página web.
        </p>
        <Button>Acceptar</Button>
      </div>
    </Paper>
  );
}
