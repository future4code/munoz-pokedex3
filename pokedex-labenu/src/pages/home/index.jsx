import React, { useState } from "react";
import {
  Arrows,
  ButtonCard,
  CardsContainer,
  ContainerButton,
  ContainerTitle,
  FlipContainer,
  FrontFlipper,
  PokemonContainer,
  PokemonImage,
  BackFlipper,
} from "./style";
import { Container } from "@material-ui/core";
import ArrowLeft from "../../assets/arrowLeft.png";
import ArrowRight from "../../assets/arrowRight.png";
import ComponentFooter from "../Footer";
import Header from "../../Components/Header";
import { translateType } from "../../services/formatDataPokemons";

export function Home(props) {
  const [flippedCardId, setFlippedCardId] = useState("");

  const flipCard = (id) => {
    if (flippedCardId === id) {
      return setFlippedCardId("");
    }
    setFlippedCardId(id);
  };

  const addPokedex = (pokemon) => {
    const newPokedex = [...props.pokedex, pokemon];
    props.setPokedex(newPokedex);
    alert(`${pokemon.nome} foi adicionado à pokedex!`);
    if (filteredPokemons.length === 1) {
      props.goToNextPage();
    }
  };

  const filteredPokemons = props.pokemons
    .filter((pokemon) => {
      const isAddedPokedex = props.pokedex.includes(pokemon);
      if (isAddedPokedex) {
        return false;
      }
      return true;
    })
    .map((pokemon, index) => {
      return (
        <>
          <FlipContainer>
            <PokemonContainer
              flippedCardId={flippedCardId}
              pokemonId={pokemon.id}
              onClick={() => flipCard(pokemon.id)}
              backgroundColor={translateType(pokemon.tipo[0].type.name)}
              key={index}
            >
              <FrontFlipper>
                <PokemonImage
                  src={pokemon.url.gif_front_default}
                  alt="pokemon"
                  width="110px"
                  height="110px"
                />
                <ContainerTitle>
                  <h2>{pokemon.nome}</h2>

                  <p>{translateType(pokemon.tipo[0].type.name)}</p>
                  <ButtonCard onClick={() => addPokedex(pokemon)}>
                    Adicionar à Pokedex
                  </ButtonCard>
                </ContainerTitle>
              </FrontFlipper>
              <BackFlipper>
                <h2>Pokémon nº: {pokemon.id}</h2>
                <div>
                  <p>
                    <strong>{pokemon.nome}</strong>
                  </p>
                  <p>
                    <strong>Tipo:</strong>{" "}
                    {translateType(pokemon.tipo[0].type.name)}
                  </p>
                  <p>
                    <strong>Habilidade:</strong> {pokemon.habilidade}
                  </p>
                  <p>
                    <strong>HP: </strong>
                    {pokemon.hp}
                  </p>
                  <p>
                    <strong>Ataque: </strong> {pokemon.ataque}
                  </p>
                  <p>
                    <strong>Defesa: </strong>
                    {pokemon.defesa}
                  </p>
                </div>
              </BackFlipper>
            </PokemonContainer>
          </FlipContainer>
        </>
      );
    });

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
