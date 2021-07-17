// import { useHistory } from "react-router-dom";
import React from "react";
import {
  Arrows,
  ButtonCard,
  CardsContainer,
  ContainerButton,
  ContainerNomeBotão,
  FlipContainer,
  FrontFlipper,
  PokemonContainer,
  PokemonImage,
} from "./style";

import { Container } from "@material-ui/core";
import ArrowLeft from "../../assets/arrowLeft.png";
import ArrowRight from "../../assets/arrowRight.png";
import ComponentFooter from "../Footer";
import Header from "../../Components/Header";
// import { useState } from "react";

export function Home(props) {
  // const history = useHistory();
  // const changePage = (path) => history.push(path);
  // const [adicionou, setAdicionou] = useState(false);

  const addPokedex = (pokemon, index) => {
    const newPokedex = [...props.pokedex, pokemon];
    props.setPokedex(newPokedex);
    // setAdicionou(!adicionou);
  };

  return (
    <div>
      <Header />
      <ContainerButton>
        <Arrows src={ArrowLeft} onClick={props.goToPreviousPage} />
        <Arrows src={ArrowRight} onClick={props.goToNextPage} />
      </ContainerButton>
      <Container>
        <CardsContainer>
          {props.pokemons.map((pokemon, index) => {
            return (
              <FlipContainer className="flip-container">
                <PokemonContainer
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
                    <ContainerNomeBotão>
                      <h2>{pokemon.nome}</h2>
                      <p>{pokemon.tipo}</p>
                      <ButtonCard onClick={() => addPokedex(pokemon)}>
                        {/* {adicionou ? "Remover" : "Adicionar"} */}
                        Adicionar à Pokedex
                      </ButtonCard>
                    </ContainerNomeBotão>
                  </FrontFlipper>
                  <div className="back"></div>
                </PokemonContainer>
              </FlipContainer>
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
