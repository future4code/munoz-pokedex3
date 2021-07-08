import { useHistory } from "react-router-dom";
import React from "react";
import { HeaderAppBar } from "./style";
import { HeaderToolbar } from "./style";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import styled from "styled-components";

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
  return (
    <div>
      <HeaderAppBar position={"sticky"}>
        <HeaderToolbar component={Container}>
          Pokemóns
          <Button variant="outlined" onClick={irParaPokedex}>
            Pokedex
          </Button>
        </HeaderToolbar>
      </HeaderAppBar>
      <button onClick={detalhes}>Detalhes</button>
      {console.log(props.pokedex)}

      <CardsContainer>
        {props.pokedex.map(pokemon => {
          return (
            <PokemonContainer>
              <img src={pokemon.url} />
              <h2>{pokemon.nome}</h2>
              <p>{pokemon.tipo}</p>
            </PokemonContainer>
          )
        })}
      </CardsContainer>
    </div>
  );
}

export default Home;
