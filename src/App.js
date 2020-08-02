import React from "react";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./theme/globalStyles";
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
    </Provider>
  );
}

export default App;
