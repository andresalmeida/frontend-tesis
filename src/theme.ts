import { createTheme } from '@mui/material/styles';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#CFFF4F',
      contrastText: '#1D2331',
    },
    secondary: {
      main: '#2B443C',
    },
    background: {
      default: '#1D2331',
      paper: 'rgba(43, 68, 60, 0.95)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CFFF4F',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-1px',
      color: '#1D2331',
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: 'background 0.3s',
          '&:hover': {
            background: '#CFFF4F',
            color: '#1D2331',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)',
        },
      },
    },
  },
});

export default theme; 