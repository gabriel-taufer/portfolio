import './App.scss';

import * as React from 'react';

import { ThemeProvider, createTheme } from "@mui/material/styles";

import MainPage from './components/MainPage/MainPage';


const theme = createTheme({
  pallete: {
    primary: {
      main: '#000'
    },
    info: {
      dark: '#000'
    },
  },
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }

});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
