import { Route, Switch, BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Pokedex from "./pages/pokedex";
import Details from "./pages/details";
import Home from "./pages/home";
import Game from "./pages/game";
import GlobalStyle from "./globals/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./themes";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { getPokemonList } from "./requests/pokemonAPI";
import ComponentFooter from "./pages/Footer";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [nextPageURL, setNextPageURL] = useState(null);
  const [previousPageURL, setPreviousPageURL] = useState(null);

  useEffect(() => {
    getPokemonList("/pokemon", setPokemons, setPreviousPageURL, setNextPageURL);
  }, []);

  const goToNextPage = () => {
    let path = nextPageURL.split("v2");
    path = path[1];

    getPokemonList(path, setPokemons, setPreviousPageURL, setNextPageURL);
  };

  const goToPreviousPage = () => {
    if (previousPageURL) {


      let path = previousPageURL.split("v2");
      path = path[1];

      getPokemonList(path, setPokemons, setPreviousPageURL, setNextPageURL);

    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route exact path={"/pokedex"}>
                <Pokedex
                  pokedex={pokedex}
                  pokemons={pokemons}
                  setPokedex={setPokedex}
                />
              </Route>
              <Route exact path={"/details"}>
                <Details />
              </Route>
              <Route exact path={"/"}>
                <Home
                  pokemons={pokemons}
                  setPokemons={setPokemons}
                  pokedex={pokedex}
                  setPokedex={setPokedex}
                  goToPreviousPage={goToPreviousPage}
                  goToNextPage={goToNextPage}
                />
              </Route>
              <Route exact path={"/game"}>
                <Game />
              </Route>
            </Switch>
          </BrowserRouter>
        </StyledThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
