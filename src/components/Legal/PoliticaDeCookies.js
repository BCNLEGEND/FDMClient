import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './LegalStyles';

export default function PoliticaDeCookies() {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Typography
        variant="h4"
        component="h1"
        style={{ margin: 'var(--size-xxs) 0' }}
      >
        Política de cookies
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        style={{ margin: 'var(--size-xxs) 0' }}
      >
        ¿Qué son las cookies?
      </Typography>
      <Typography variant="body2" style={{ margin: 'var(--size-xxs) 0' }}>
        Una cookie es un fichero que se descarga en su ordenador al acceder a
        determinadas páginas web. Las cookies permiten a una página web, entre
        otras cosas, almacenar y recuperar información sobre los hábitos de
        navegación de un usuario o de su equipo y, dependiendo de la información
        que contengan y de la forma en que utilice su equipo, pueden utilizarse
        para reconocer al usuario. Se utilizan para recordar las preferencias
        del usuario, como el idioma seleccionado, datos de acceso o
        personalización de la página. Las cookies también pueden ser utilizadas
        para registrar información anónima acerca de cómo un visitante utiliza
        un sitio, como interactúa con nuestra web. Por ejemplo, desde qué página
        Web ha accedido, o si ha utilizado un “banner” publicitario para llegar.
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        style={{ margin: 'var(--size-xxs) 0' }}
      >
        ¿Por qué Farmàcia del mar utiliza cookies?
      </Typography>
      <Typography variant="body2" style={{ margin: 'var(--size-xxs) 0' }}>
        Nuestro sitio web utiliza cookies para identificar tu navegación frente
        a la de otros usuarios. Esto nos ayuda para proporcionarte una mejor
        experiencia cuando navegas por nuestro sitio web y nos ayuda a mejorar
        nuestro sitio web. Navegando por él aceptas el uso de cookies. Una
        cookie es un pequeño archivo de calores alfanuméricos que se guarda en
        tu navegador o en el disco duro de tu ordenador/smartphone/etc. Puedes
        encontrar más información acerca de las cookies presentes a
        continuación:
      </Typography>
      <Typography
        variant="h6"
        component="h4"
        style={{ margin: 'var(--size-xxs) 0' }}
      >
        Cookie Información y propósito de la cookie Duración{' '}
      </Typography>
      <Typography variant="body2" style={{ margin: 'var(--size-xxs) 0' }}>
        Cookie de Google Analytics que almacena información sobre la primera
        visita, número de visitas y la última visita. 2 años <br /> Cookie de
        Google Analytics que almacena la duración de las visitas 30 minutos
        <br /> Cookie de Google Analytics que almacena la duración de las
        visitas Sesión
        <br /> Cookie de Google Analytics que identifica si el visitante viene
        de un buscador, de un link o sin link (ej. marcador) 6 meses
        <Typography
          variant="h6"
          component="h4"
          style={{ margin: 'var(--size-xxs) 0' }}
        >
          ¿Y si no quiero tener estas cookies o no hago nada al respecto?
        </Typography>
        Para cumplir con la legislación vigente, tenemos que pedir su permiso
        para gestionar cookies. Si decide no autorizar el tratamiento
        indicándonos su no conformidad, sólo usaríamos las cookies técnicas,
        puesto que son imprescindibles para la navegación por nuestra Web. En
        este caso, no almacenaríamos ninguna cookie que exija su consentimiento.
        En el caso de seguir navegando por nuestro sitio Web sin denegar su
        autorización implica que acepta su uso. Tenga en cuenta que si rechaza o
        borra las cookies de navegación por la Web de Farmàcia del Mar, no
        podremos mantener sus preferencias, algunas características de las
        páginas no estarán operativas, no podremos ofrecerle servicios
        personalizados y cada vez que vaya a navegar por nuestra Web tendremos
        que solicitarle de nuevo su autorización para el uso de cookies.
        <Typography variant="body2" style={{ margin: 'var(--size-xxs) 0' }}>
          Si rechaza todas las cookies, es posible que no pueda utilizar
          productos o servicios de los sitios Web de Farmàcia del Mar que
          requieran “iniciar sesión” ni aprovechar por completo todo lo que
          ofrece.
        </Typography>
        <Typography variant="body2">
          Si utiliza Microsoft Internet Explorer, en la opción de menú
          Herramientas > Opciones de Internet > Privacidad > Avanzadas. <br />
          Si utiliza Firefox, en la opción de menú Herramientas > Opciones >
          Privacidad > Cookies.
          <br /> Si utiliza Chrome, pulsar botón de herramientas, a continuación
          configuración, y por último configuraciones avanzas, Configuración del
          proxy, Privacidad “usar configuración personalizada para el historial”
          <br /> Si utiliza Safari como navegador, pulsar botón de acceso al
          menú de ajustes generales, a continuación preferencia, y seleccione la
          opción de Privacidad.
          <br /> Estos navegadores están sometidos a actualizaciones o
          modificaciones, por lo que no podemos garantizar que se ajusten
          completamente a la versión de su navegador. También puede ser que
          utilice otro navegador no contemplado en estos enlaces como Konqueror,
          Arora, Flock, etc. Para evitar estos desajustes, puede acceder
          directamente desde las opciones de su navegador que se encuentra
          generalmente en el menú de Opciones, en la sección de “Privacidad”.
          (Por favor, consulte la ayuda de su navegador para más información.)
        </Typography>
        <Typography variant="body2" style={{ margin: 'var(--size-xxs) 0' }}>
          Los datos recogidos en las cookies pueden ser usados en webs distintas
          Las cookies utilizadas son para nuestro uso exclusivo y en ningún caso
          comercializamos con ellas. Esta política se revisa periódicamente para
          asegurar su vigencia, por lo que puede ser modificada. Le recomendamos
          que visite la página con regularidad donde le informaremos de
          cualquier actualización al respecto.
        </Typography>
      </Typography>
    </Paper>
  );
}
