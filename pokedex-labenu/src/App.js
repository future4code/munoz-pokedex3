import { Route, Switch, BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Pokedex from "./pages/pokedex";
import Details from "./pages/details";
import Home from "./pages/home";
import GlobalStyle from "./globals/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./themes";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { getPokemonList } from "./requests/pokemonAPI";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [nextPageURL,setNextPageURL] = useState(null);
  const [previousPageURL,setPreviousPageURL] = useState(null);

  useEffect(() => {
    getPokemonList('/pokemon', setPokemons, setPreviousPageURL, setNextPageURL)
  }, [])

  const goToNextPage = () => {
    let path = nextPageURL.split('v2')
    path = path[1]

    getPokemonList(path, setPokemons, setPreviousPageURL, setNextPageURL)
  }

  const goToPreviousPage = () => {
    if (previousPageURL) {
      let path = previousPageURL.split('v2')
      path = path[1]
  
      getPokemonList(path, setPokemons, setPreviousPageURL, setNextPageURL)
    }
  }

  // [
  //   {
  //     nome: "Pikachu",
  //     tipo: "Elétrico",
  //     tamanho: "40cm",
  //     peso: "35kg",
  //     url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  //   },
  //   {
  //     nome: "Charmander",
  //     tipo: "Fogo",
  //     tamanho: "55cm",
  //     peso: "45kg",
  //     url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  //   },
  //   {
  //     nome: "Squirtle",
  //     tipo: "Água",
  //     tamanho: "45cm",
  //     peso: "70kg",
  //     url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  //   },
  //   {
  //     nome: "Bulbassauro",
  //     tipo: "Planta",
  //     tamanho: "30cm",
  //     peso: "50kg",
  //     url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  //   }
  // ]

  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route path={"/pokedex"}>
                <Pokedex
                  pokedex={pokedex}
                  pokemons={pokemons}
                  setPokedex={setPokedex}
                />
              </Route>
              <Route path={"/details"}>
                <Details />
              </Route>
              <Route path={"/"}>
                <Home
                  pokemons={pokemons}
                  setPokemons={setPokemons}
                  pokedex={pokedex}
                  setPokedex={setPokedex}
                  goToPreviousPage={goToPreviousPage}
                  goToNextPage={goToNextPage}
                />
              </Route>
            </Switch>
          </BrowserRouter>
        </StyledThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
