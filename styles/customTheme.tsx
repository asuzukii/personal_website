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
      'Raleway',
      'Oxygen',
      '"Helvetica Neue"',
      'sans-serif'
    ].join(','),
  },
});

export default theme;