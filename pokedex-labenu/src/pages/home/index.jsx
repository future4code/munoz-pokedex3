import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { HeaderAppBar, HeaderLogo } from "./style";
import { HeaderToolbar } from "./style";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Logo from "../../img/pokebola-logo2.png";


const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const PokemonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #353D51;
  margin: 25px;
  max-width: 15vw;
  height: 550px;
  color: white;
`

export function Home(props) {
  const history = useHistory();
  const irParaPokedex = () => history.push("pokedex");
  const detalhes = () => history.push("details");

  const addPokedex = (pokemon) => {
    const newPokedex = [...props.pokedex, pokemon]
    props.setPokedex(newPokedex)
  }

  return (
    <div>
      <HeaderAppBar position={"sticky"}>
        <HeaderToolbar component={Container}>
          <HeaderLogo src={Logo} alt="Logo" />
          <Button variant="contained" color="secondary" onClick={irParaPokedex}>
            Pokedex
          </Button>
        </HeaderToolbar>
      </HeaderAppBar>
      <button onClick={detalhes}>Detalhes</button>
      <button onClick={props.goToPreviousPage}>Página Anterior</button>
      <button onClick={props.goToNextPage}>Próxima Página</button>

      <CardsContainer>
        {props.pokemons.map(pokemon => {
          return (
            <PokemonContainer>
              <img src={pokemon.url} />
              <h2>{pokemon.nome}</h2>
              <p>{pokemon.tipo}</p>
              <button onClick={() => addPokedex(pokemon)}>Adicionar Pokedex</button>
            </PokemonContainer>
          )
        })}
      </CardsContainer>
    </div>
  );
}

export default Home;
