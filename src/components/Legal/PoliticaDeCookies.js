import Paper from '@material-ui/core/Paper';
import useStyles from './LegalStyles';

export default function PoliticaDeCookies() {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <div>
        <h3>Política de cookies</h3>
        <h6>¿Qué son las cookies?</h6>
        <p>
          Una cookie es un fichero que se descarga en su ordenador al acceder a
          determinadas páginas web. Las cookies permiten a una página web, entre
          otras cosas, almacenar y recuperar información sobre los hábitos de
          navegación de un usuario o de su equipo y, dependiendo de la
          información que contengan y de la forma en que utilice su equipo,
          pueden utilizarse para reconocer al usuario. Se utilizan para recordar
          las preferencias del usuario, como el idioma seleccionado, datos de
          acceso o personalización de la página. Las cookies también pueden ser
          utilizadas para registrar información anónima acerca de cómo un
          visitante utiliza un sitio, como interactúa con nuestra web. Por
          ejemplo, desde qué página Web ha accedido, o si ha utilizado un
          “banner” publicitario para llegar.
        </p>
        <h6>¿Por qué www.farmaciadelmar.com utiliza cookies?</h6>
        <p>
          Nuestro sitio web utiliza cookies para identificar tu navegación
          frente a la de otros usuarios. Esto nos ayuda para proporcionarte una
          mejor experiencia cuando navegas por nuestro sitio web y nos ayuda a
          mejorar nuestro sitio web. Navegando por él aceptas el uso de cookies.
          Una cookie es un pequeño archivo de calores alfanuméricos que se
          guarda en tu navegador o en el disco duro de tu
          ordenador/smartphone/etc. Puedes encontrar más información acerca de
          las cookies presentes a continuación:
        </p>
        <p>
          Cookie Información y propósito de la cookie Duración
          wordpress_test_cookie Cookie de sesión para chequear si las cookies
          están activadas o no. Esta cookie desaparece cuando se cierra el
          navegador. Sesión wp-settings-[UID]wp-settings-time-[UID] Para
          administradores y no administradores del sitio. Estas cookies
          almacenan información geográfica y temporal de inicio de sesión. El
          número UID es tu identificador en la base de datos del sitio. Se usa
          para customizar tu vista de la interfaz de administración. Estas
          cookies son estrictamente necesarias para el funcionamiento del sitio
          web. 1 año wordpress_[hash]wordpress_logged_in_[hash] Solo para
          administradores y editores de contenidos del sitio. Se usa para
          recordar que estás logado (con sesión iniciada). Esta cookie
          desaparece al cerrar el navegador. Sesión __utma Cookie de Google
          Analytics que almacena información sobre la primera visita, número de
          visitas y la última visita. 2 años __utmb Cookie de Google Analytics
          que almacena la duración de las visitas 30 minutos __utmc Cookie de
          Google Analytics que almacena la duración de las visitas Sesión __utmz
          Cookie de Google Analytics que identifica si el visitante viene de un
          buscador, de un link o sin link (ej. marcador) 6 meses ¿Y si no quiero
          tener estas cookies o no hago nada al respecto? Para cumplir con la
          legislación vigente, tenemos que pedir su permiso para gestionar
          cookies. Si decide no autorizar el tratamiento indicándonos su no
          conformidad, sólo usaríamos las cookies técnicas, puesto que son
          imprescindibles para la navegación por nuestra Web. En este caso, no
          almacenaríamos ninguna cookie que exija su consentimiento. En el caso
          de seguir navegando por nuestro sitio Web sin denegar su autorización
          implica que acepta su uso. Tenga en cuenta que si rechaza o borra las
          cookies de navegación por la Web de Farmacia Colldeforn, no podremos
          mantener sus preferencias, algunas características de las páginas no
          estarán operativas, no podremos ofrecerle servicios personalizados y
          cada vez que vaya a navegar por nuestra Web tendremos que solicitarle
          de nuevo su autorización para el uso de cookies. Si rechaza todas las
          cookies, es posible que no pueda utilizar productos o servicios de los
          sitios Web de Farmacia Colldeforn que requieran “iniciar sesión” ni
          aprovechar por completo todo lo que ofrece. Si utiliza Microsoft
          Internet Explorer, en la opción de menú Herramientas > Opciones de
          Internet > Privacidad > Avanzadas. Si utiliza Firefox, en la opción de
          menú Herramientas > Opciones > Privacidad > Cookies. Si utiliza
          Chrome, pulsar botón de herramientas, a continuación configuración, y
          por último configuraciones avanzas, Configuración del proxy,
          Privacidad “usar configuración personalizada para el historial” Si
          utiliza Safari como navegador, pulsar botón de acceso al menú de
          ajustes generales, a continuación preferencia, y seleccione la opción
          de Privacidad. Estos navegadores están sometidos a actualizaciones o
          modificaciones, por lo que no podemos garantizar que se ajusten
          completamente a la versión de su navegador. También puede ser que
          utilice otro navegador no contemplado en estos enlaces como Konqueror,
          Arora, Flock, etc. Para evitar estos desajustes, puede acceder
          directamente desde las opciones de su navegador que se encuentra
          generalmente en el menú de Opciones, en la sección de “Privacidad”.
          (Por favor, consulte la ayuda de su navegador para más información.)
          Los datos recogidos en las cookies pueden ser usados en webs distintas
          Las cookies utilizadas son para nuestro uso exclusivo y en ningún caso
          comercializamos con ellas. Esta política se revisa periódicamente para
          asegurar su vigencia, por lo que puede ser modificada. Le recomendamos
          que visite la página con regularidad donde le informaremos de
          cualquier actualización al respecto.
        </p>
      </div>
    </Paper>
  );
}
