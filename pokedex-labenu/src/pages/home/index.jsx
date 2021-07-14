import { useHistory } from "react-router-dom";
import React from "react";
import {
  Arrows,
  ButtonCard,
  CardsContainer,
  ContainerButton,
  ContainerNomeBotão,
  HeaderAppBar,
  HeaderLogo,
  PokemonContainer,
  PokemonImage,
  HeaderToolbar,
} from "./style";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Logo from "../../assets/pokebola-logo3.png";
import ArrowLeft from "../../assets/arrowLeft.png";
import ArrowRight from "../../assets/arrowRight.png";

export function Home(props) {
  const history = useHistory();
  const irParaPokedex = () => history.push("pokedex");
  // const detalhes = () => history.push("details");

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
      {/* <button onClick={detalhes}>Detalhes</button> */}
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
    </div>
  );
}

export default Home;
