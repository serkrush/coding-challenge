import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from './styles/Styles';
import AppRouter from "./components/AppRouter"
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
