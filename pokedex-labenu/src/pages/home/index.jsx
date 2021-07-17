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
    if (filteredPokemons.length === 1) {
      props.goToNextPage()
    }
  };

  const filteredPokemons =  props.pokemons.filter((pokemon) => {
    const isAddedPokedex = props.pokedex.includes(pokemon)
    if (isAddedPokedex) {
      return false
    }
    return true
  }).map((pokemon) => {
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
  })

  console.log('props.pokemons: ', props.pokemons);
  console.log('props.pokedex: ', props.pokedex);



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
          {filteredPokemons}
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
