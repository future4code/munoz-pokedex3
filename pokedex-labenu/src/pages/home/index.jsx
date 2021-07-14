import { useHistory } from "react-router-dom";
import React from "react";
import {
  Arrows,
  ButtonCard,
  CardsContainer,
  ContainerButton,
  ContainerNomeBotão,
  PokemonContainer,
  PokemonImage,
} from "./style";

import { Container } from "@material-ui/core";
import ArrowLeft from "../../assets/arrowLeft.png";
import ArrowRight from "../../assets/arrowRight.png";
import ComponentFooter from "../Footer";
import Header from "../../Components/Header";

export function Home(props) {
  const history = useHistory();
  const game = () => history.push("game");
  const changePage = (path) => history.push(path);
  // const detalhes = () => history.push("details");


  const addPokedex = (pokemon) => {
    const newPokedex = [...props.pokedex, pokemon];
    props.setPokedex(newPokedex);
  };

  return (
    <div>

      
      


      <Header />
      <button onClick={game}>Jogue agora!</button>
      <ContainerButton>
        <Arrows src={ArrowLeft} onClick={props.goToPreviousPage} />
        <Arrows src={ArrowRight} onClick={props.goToNextPage} />
      </ContainerButton>

      <Container>
        <CardsContainer>
          {props.pokemons.map((pokemon) => {
            return (
              <PokemonContainer backgroundColor={pokemon.tipo}>
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
        <ContainerButton>
          <Arrows src={ArrowLeft} onClick={props.goToPreviousPage} />
          <Arrows src={ArrowRight} onClick={props.goToNextPage} />
        </ContainerButton>
      </Container>
      <ComponentFooter />
    </div>
  );
}

export default Home;
