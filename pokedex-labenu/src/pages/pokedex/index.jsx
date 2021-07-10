import { useHistory } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { PowerInputSharp } from "@material-ui/icons";

import {
  BarButtonLeft, BarButtonRight, BgCurve1Left, BgCurve2Left, BigBlueButton, DownArrow, ButtomBottomPicture, ButtonGlass, ButtonTopPicture, Cross, CrossMidCircle, Curve1Left, Curve2Left, DownTriangle, Junction, Junction1, Junction2, LeftArrow, LeftfTriangle, LeftSide, MiddleCross, MiniButtonGreen, MiniButtonRed, MiniButtonYellow, MyPokedex, Picture, Reflect, RightArrow, RightSide, RightTriangle, Screen, Speakers, UpArrow, TopPicture, UpTriangle, StatsScreen, BlueButtonsContainer1, BlueButtonsContainer2, BlueButton, MiniButtonOrange, MiniButtonDarkGreen, BarButtonRightSide, YellowBox1, YellowBox2, BgCurve1Right, BgCurve2Right, Curve1Right, Curve2Right, LogoDiv
} from "./style";

import { useState } from "react";
import { getPokemonList } from "../../requests/pokemonAPI";

export function Pokedex(props) {

  const [currentIndex, setCurrentIndex] = useState(0)

  const history = useHistory();
  const voltar = () => history.push("home");
  const detalhes = () => history.push("details");

  const deletePokemon = (index) => {
    const deletando = Array.from(props.pokedex);
    deletando.splice(index, 1);
    props.setPokedex(deletando);
  }


  const nextPokemon = () => {
    if (currentIndex === (props.pokemons.length - 1)){
      setCurrentIndex(0)
    } else {
      const next = currentIndex + 1;
      setCurrentIndex(next)
    }
  }
  const lastPokemon = () => {
    if (currentIndex === 0){
      setCurrentIndex(props.pokemons.length - 1)
    } else {
      const last = currentIndex - 1;
      setCurrentIndex(last)
    }
  }
  return (
    <div>
      Pokedex!
      <button onClick={voltar}>Voltar</button>
      <button onClick={detalhes}>Detalhes</button>
      <button onClick={getPokemonList}>Get Pokemon</button>


      <MyPokedex>
        <LeftSide>
          <LogoDiv />
          <BgCurve1Left />
          <BgCurve2Left />
          <Curve1Left>
            <ButtonGlass>
              <Reflect />
            </ButtonGlass>
            <MiniButtonRed />
            <MiniButtonYellow />
            <MiniButtonGreen />
          </Curve1Left>
          <Curve2Left>
            <Junction>
              <Junction1 />
              <Junction2 />
            </Junction>
          </Curve2Left>
          <Screen>
            <TopPicture>
              <ButtonTopPicture />
              <ButtonTopPicture />
            </TopPicture>
            <Picture>
              <img src={props.pokemons[currentIndex].url} alt={props.pokemons[currentIndex].nome} height="170" />
            </Picture>
            <ButtomBottomPicture />
            <Speakers>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </Speakers>
          </Screen>
          <BigBlueButton />
          <BarButtonLeft />
          <BarButtonRight />
          <Cross>
            <LeftArrow onClick={lastPokemon}>
              <LeftfTriangle />
            </LeftArrow>
            <UpArrow>
              <UpTriangle />
            </UpArrow>
            <RightArrow onClick={nextPokemon}>
              <RightTriangle />
            </RightArrow>
            <MiddleCross>
              <CrossMidCircle />
            </MiddleCross>
            <DownArrow>
              <DownTriangle />
            </DownArrow>
          </Cross>
        </LeftSide>
        <RightSide>
          <StatsScreen>
            <strong>Nome:</strong> {props.pokemons[currentIndex].nome}<br />
            <strong>Tipo:</strong> {props.pokemons[currentIndex].tipo}<br />
            <strong>Tamanho:</strong> {props.pokemons[currentIndex].tamanho}'<br />
            <strong>Peso:</strong> {props.pokemons[currentIndex].peso}<br /><br />
            <strong>Descrição</strong><br />
            Descrição do pokemon.
          </StatsScreen>
          <BlueButtonsContainer1>
            <BlueButton />
            <BlueButton />
            <BlueButton />
            <BlueButton />
            <BlueButton />
          </BlueButtonsContainer1>
          <BlueButtonsContainer2>
            <BlueButton />
            <BlueButton />
            <BlueButton />
            <BlueButton />
            <BlueButton />
          </BlueButtonsContainer2>
          <MiniButtonOrange />
          <MiniButtonDarkGreen />
          <BarButtonRightSide />
          {/* <div id="barbutton4"></div> */}
          <YellowBox1 />
          <YellowBox2 />
          <BgCurve1Right />
          <BgCurve2Right />
          <Curve1Right />
          <Curve2Right />
        </RightSide>
      </MyPokedex >

    </div >
  );
}

export default Pokedex;


// const CardsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// const PokemonContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   background-color: #353D51;
//   margin: 25px;
//   max-width: 15vw;
//   height: 550px;
//   color: white;
// `

{/* <CardsContainer>
  {props.pokedex.map(pokemon => {
    return (
      <PokemonContainer>
        <img src={pokemon.url} />
        <h2>{pokemon.nome}</h2>
        <p>{pokemon.tipo}</p>
        <button onClick={() => deletePokemon(pokemon.nome)}>Remover da Pokedex</button>
      </PokemonContainer>
    )
  })}
</CardsContainer> */}