import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#e1d1c8',
      paper: '#c2a39a',
    },
    text: {
      primary: '#3e2c23',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#001600',
      paper: '#0a3007',
    },
    text: {
      primary: '#c2f0c2',
    },
  },
});
