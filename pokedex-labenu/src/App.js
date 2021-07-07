import { Route, Switch, BrowserRouter } from "react-router-dom";
import React from "react";
import Pokedex from "./pages/pokedex";
import Details from "./pages/details";
import Home from "./pages/home";
import GlobalStyle from "./globals/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./themes";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route path={"/pokedex"}>
                <Pokedex />
              </Route>
              <Route path={"/details"}>
                <Details />
              </Route>
              <Route path={"/"}>
                <Home />
              </Route>
            </Switch>
          </BrowserRouter>
        </StyledThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
