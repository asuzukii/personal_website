import { createTheme } from '@mui/material/'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f5767',
    },
    secondary: {
      main: '#87acc5',
    },
    background: {
      paper: '#efe2d3',
      default: '#ffffff',
    },
    error: {
      main: '#f72f20',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      // 'Roboto',
      '"Helvetica Neue"',
      // 'Arial',
      'sans-serif',
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;