import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: '#0047ba',
    },
    secondary: {
      main: '#3fae2a',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Nexa bold',
  },
}));

export default theme;
