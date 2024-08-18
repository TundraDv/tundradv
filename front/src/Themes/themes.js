import { createTheme } from '@mui/material/styles';
import { green, orange, blue, red } from '@mui/material/colors';

const primaryFontFamily = 'Arial, sans-serif';
const secondaryFontFamily = 'Roboto, Arial, sans-serif';

const primaryColor = '#C57680';
const secondaryColor = '#a41050';

export const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
  typography: {
    fontFamily: secondaryColor,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained', 
        color: secondaryFontFamily,
      },
      styleOverrides: {
        root: {
          borderRadius: 8, 
          textTransform: 'none',
          padding: '8px 16px', 
        },
        contained: {
          boxShadow: 'none', 
          '&:hover': {
            boxShadow: 'none', 
          },
        },
      },
    },
  },
});

// primary - for primary interface elements.
// secondary - for secondary interface elements.
// error - for elements that the user should be made aware of.
// warning - for potentially dangerous actions or important messages.
// info - for highlighting neutral information.
// success - for indicating the successful completion of an action that the user triggered.

export const innerTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
  typography: {
    fontFamily: fontFamily,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        color: 'primary',
      },
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'uppercase', 
          padding: '6px 12px',
        },
      },
    },
  },
});
