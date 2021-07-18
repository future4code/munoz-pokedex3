// import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import {
  Arrows,
  ButtonCard,
  Card,
  CardsContainer,
  ContainerButton,
  ContainerTitle,
  FlipContainer,
  FrontFlipper,
  PokemonContainer,
  PokemonImage,
  BackFlipper
} from "./style";

import { Container } from "@material-ui/core";
import ArrowLeft from "../../assets/arrowLeft.png";
import ArrowRight from "../../assets/arrowRight.png";
import ComponentFooter from "../Footer";
import Header from "../../Components/Header";

export function Home(props) {
  // const history = useHistory();
  // const changePage = (path) => history.push(path);

  const [flippedCardId, setFlippedCardId] = useState('')

  const flipCard = (id) => {
    if (flippedCardId === id) {
      return setFlippedCardId('')
    }
    setFlippedCardId(id)
  }

  const addPokedex = (pokemon, index) => {
    const newPokedex = [...props.pokedex, pokemon];
    props.setPokedex(newPokedex);

    if (filteredPokemons.length === 1) {
      props.goToNextPage();
    }
  };

  const filteredPokemons = props.pokemons.filter((pokemon) => {
    const isAddedPokedex = props.pokedex.includes(pokemon)
    if (isAddedPokedex) {
      return false
    }
    return true
  }).map((pokemon, index) => {
    return (
      <Card>
        <FlipContainer
          className="flip-container"
        >
          <PokemonContainer
            flippedCardId={flippedCardId}
            pokemonId={pokemon.id}
            onClick={() => flipCard(pokemon.id)}
            className="flipper"
            backgroundColor={pokemon.tipo}
            key={index}
          >
            <FrontFlipper className="front">
              <PokemonImage
                src={pokemon.url}
                alt="pokemon"
                width="110px"
                height="110px"
              />
              <ContainerTitle>
                <h2>{pokemon.nome}</h2>
                <p>{pokemon.tipo}</p>
                <ButtonCard onClick={() => addPokedex(pokemon)}>
                  {/* {adicionou ? "Remover" : "Adicionar"} */}
                  Adicionar à Pokedex
                </ButtonCard>
              </ContainerTitle>
            </FrontFlipper>
            <BackFlipper className="back">
              <p>Pokémon nº: {pokemon.id}</p>
              <p>Habilidade Principal:</p>
              <p>{pokemon.habilidade}</p>
              <p>hp: {pokemon.hp}</p>
              <p>ataque: {pokemon.ataque}</p>
              <p>defesa: {pokemon.defesa}</p>
              <p>ataque especial: {pokemon.ataqueS}</p>
              <p>defesa especial: {pokemon.defesaS}</p>
              <p>velocidade: {pokemon.velocidade}</p>
            </BackFlipper>
          </PokemonContainer>
        </FlipContainer>
      </Card>
    );
  })


  return (
    <div>
      <Header />
      <ContainerButton>
        <Arrows src={ArrowLeft} onClick={props.goToPreviousPage} />
        <Arrows src={ArrowRight} onClick={props.goToNextPage} />
      </ContainerButton>
      <Container>
        <CardsContainer>{filteredPokemons}</CardsContainer>
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
