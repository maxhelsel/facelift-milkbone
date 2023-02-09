import { Noto_Sans } from '@next/font/google';
import { createTheme } from '@mui/material/styles';

export const noto = Noto_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});


// proxy
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      medium: 960,
      large: 1280,
      custom: 1520
    },
  }
});

theme = createTheme(theme, {
  palette: {
    primary: {
      main: '#536dfe',
      black: '#234',
      white: '#fff'
    },
    secondary: {
      main: '#3d5afe',
    },
    error: {
      main: '#f44336',
    },
    styleOverrides: {
      MuiTypography: {
        fontFamily: noto.style.fontFamily
      }
    },
    transitions: {
      all200: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      all300: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      border300: 'borderColor 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    },
    content: {
      paper: '#FFFFFF',
      border: '1px solid rgba(0, 0, 0, .08)',
      borderHover: '1px solid rgba(0, 0, 255, .3)',
      text: '#234',
      subtext: '#567',
      shadow: '0px 1px 3px 0px rgba(0, 0, 0, .25)',
      shadowHover: '0px 2px 6px 0px rgba(0, 0, 0, .35)'
    }
  },
  typography: {
    fontFamily: noto.style.fontFamily,
    h1: {
      fontSize: '4.25rem',
      lineHeight: '5.5rem',
      fontFamily: noto.style.fontFamily,
      fontFamily: 'cubano',
      color: '#db232e',
      fontWeight: 500,
      textAlign: 'center',
      [theme.breakpoints.down('md')]: {
        fontSize: '3rem',
        lineHeight: '4rem',
        textAlign: 'left'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
        lineHeight: '3.5rem'
      }
    },
    h2: {
      fontSize: '2.25rem',
      lineHeight: '3.5rem',
      fontFamily: noto.style.fontFamily,
      fontFamily: 'cubano',
      color: '#db232e',
      fontWeight: 500,
      [theme.breakpoints.down('md')]: {
        fontSize: '1.75rem',
        lineHeight: '2.5rem',
        textAlign: 'left'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
        lineHeight: '2.5rem'
      }
    },
    h4: {
      fontSize: '1rem',
      lineHeight: '2rem',
      fontFamily: noto.style.fontFamily,
      color: '#234',
      fontWeight: 500
    },
    h5: {
      fontSize: '.875rem',
      lineHeight: '1.25rem',
      fontFamily: noto.style.fontFamily,
      color: '#234',
      fontWeight: 500
    },
    h6: {
      fontSize: '.875rem',
      lineHeight: '1.25rem',
      fontFamily: noto.style.fontFamily,
      color: '#567',
      fontWeight: 'normal'
    },
    b1: {
      fontSize: '.75rem',
      lineHeight: '1.25rem',
      fontFamily: noto.style.fontFamily,
      color: '#234',
      fontWeight: 500
    },
    b2: {
      fontSize: '.75rem',
      lineHeight: '1.25rem',
      fontFamily: noto.style.fontFamily,
      color: '#567',
      fontWeight: 'normal'
    },
    fine: {
      fontSize: '.75rem',
      lineHeight: '1rem',
      fontFamily: noto.style.fontFamily,
      color: '#456',
      fontWeight: 'normal'
    }
  },
});

export default theme;
