import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { HeaderAppBar, HeaderLogo } from "./style";
import { HeaderToolbar } from "./style";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Logo from "../../img/pokebola-logo3.png";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 20px 20px 0 50px;
`;

const PokemonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #353d51;
  margin: 25px;
  padding-top: 30px;
  max-width: 20vw;
  height: 50vh;
  color: white;
  border-radius: 10px;
  box-shadow: 1em 1em 1em 1em rgba(36, 36, 36, 0.404);
`;
const ContainerNomeBotão = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #2b3042;
  box-shadow: 0em 0em 0em 0em rgba(36, 36, 36, 0.144);
  width: 20vw;
  margin-top: 20px;
  padding-bottom: 38px;
  padding-top: 25px;
  border-radius: 10px;
`;

const PokemonImage = styled.img`
  width: 10vw;
`;

const ButtonCard = styled.button`
  width: 8vw;
  font-size: 12px;
  height: 6vh;
  background-color: #a4bdfb;
  :hover {
    background-color: rgb(109, 125, 166);
  }
  margin-top: 10px;
  border-radius: 8px;
  border: none;
  font-family: Poppins;
`;

export function Home(props) {
  const history = useHistory();
  const irParaPokedex = () => history.push("pokedex");
  const detalhes = () => history.push("details");

  const addPokedex = (pokemon) => {

    const newPokedex = [...props.pokedex, pokemon];
    props.setPokedex(newPokedex);
  };


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

      <Container>
        <CardsContainer>
          {props.pokemons.map((pokemon) => {
            return (
              <PokemonContainer>
                <PokemonImage src={pokemon.url} alt="pokemon" />
                <ContainerNomeBotão>
                  <h2>{pokemon.nome}</h2>
                  <p>{pokemon.tipo}</p>
                  <ButtonCard onClick={() => addPokedex(pokemon)}>
                    Adicionar Pokedex
                  </ButtonCard>
                </ContainerNomeBotão>
              </PokemonContainer>
            );
          })}
        </CardsContainer>
      </Container>
    </div>
  );
}

export default Home;
