import { useHistory } from "react-router-dom";
import React from "react";
import { PowerInputSharp } from "@material-ui/icons";
import { useState } from "react";
import { getLocations, getPokemonList } from "../../requests/pokemonAPI";
import ComponentFooter from "../Footer";
import Header from "../../Components/Header";

import {
  BarButtonLeft, BarButtonRight, BgCurve1Left, BgCurve2Left, BigBlueButton, DownArrow, ButtomBottomPicture, ButtonGlass, ButtonTopPicture, Cross, CrossMidCircle, Curve1Left, Curve2Left, DownTriangle, Junction, Junction1, Junction2, LeftArrow, LeftfTriangle, LeftSide, MiddleCross, MiniButtonGreen, MiniButtonRed, MiniButtonYellow, MyPokedex, Picture, Reflect, RightArrow, RightSide, RightTriangle, Screen, Speakers, UpArrow, TopPicture, UpTriangle, StatsScreen, BlueButtonsContainer1, BlueButtonsContainer2, BlueButton, MiniButtonOrange, MiniButtonDarkGreen, BarButtonRightSide, YellowBox1, YellowBox2, BgCurve1Right, BgCurve2Right, Curve1Right, Curve2Right, LogoDiv, PageContainer
} from "./style";
import { translateType } from "../../services/formatDataPokemons";
import { useEffect } from "react";


export function Pokedex(props) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [detailsScreenIndex, setDetailsScreenIndex] = useState(1);
  const [locationsList, setLocationsList] = useState([]);


  const history = useHistory();
  // const voltar = () => history.push("");

  useEffect(async () => {
    const locationsList = await getLocations(props.pokedex[currentIndex]?.locais)
    // console.log("locationsList: ", locationsList.data);
    setLocationsList(locationsList.data)
  }, [currentIndex])

  const deletePokemon = (index) => {
    const deletando = Array.from(props.pokedex);
    deletando.splice(index, 1);
    props.setPokedex(deletando);
  };

  const nextPokemon = () => {
    if (currentIndex === (props.pokedex.length - 1)) {
      setCurrentIndex(0)
    } else {
      const next = currentIndex + 1;
      setCurrentIndex(next);
    }
  };

  const lastPokemon = () => {
    if (currentIndex === 0) {
      setCurrentIndex(props.pokedex.length - 1)
    } else {
      const last = currentIndex - 1;
      setCurrentIndex(last);
    }
  }

  const changeDetailsScreen = (id) => {
    setDetailsScreenIndex(id)
  }

  // const renderList = props.pokedex.map((pokemon) => {
  //   return <p>{pokemon.nome}</p>
  // })

  const renderTypeList = props.pokedex[currentIndex]?.tipo.map((item) => {
    return <span>{translateType(item.type.name)} </span>
  })

  let renderStatsScreen
  switch (detailsScreenIndex) {
    case 1:
      renderStatsScreen = <StatsScreen>
        <strong>Nome:</strong> {props.pokedex[currentIndex]?.nome}<br />
        <strong>Tipo(s):</strong> {renderTypeList}<br />
        {/* <strong>Tipo:</strong> {props.pokedex[currentIndex]?.tipo}<br /> */}
        <strong>Tamanho:</strong> {props.pokedex[currentIndex]?.tamanho}cm<br />
        <strong>Peso:</strong> {props.pokedex[currentIndex]?.peso}Kg<br /><br />
      </StatsScreen>
      break;

    case 2:
      ///////////////////////////////////////
      console.log("SWITCH 2: ", locationsList);
      /////////////////////////////////////
      const list = locationsList?.map((local) => {
        return <p>{local.location_area.name}</p>
      })
      ///////////////////////////////////////      
      console.log("SWITCH 2 - LIST: ", list);
      ///////////////////////////////////////
      renderStatsScreen = <StatsScreen>ENCONTRADO NOS LOCAIS:{list}</StatsScreen>
      break;

    default:
      renderStatsScreen = <StatsScreen>
        <strong>Nome:</strong> {props.pokedex[currentIndex]?.nome}<br />
        <strong>Tipo(s):</strong> {renderTypeList}<br />
        {/* <strong>Tipo:</strong> {props.pokedex[currentIndex]?.tipo}<br /> */}
        <strong>Tamanho:</strong> {props.pokedex[currentIndex]?.tamanho}cm<br />
        <strong>Peso:</strong> {props.pokedex[currentIndex]?.peso}Kg<br /><br />
      </StatsScreen>
      break;
  }





  return (
    <PageContainer>
      <Header />
      {/* {detailsScreenIndex && renderList} */}
      {/* Pokedex!
      <button onClick={voltar}>Voltar</button>
      <button onClick={detalhes}>Detalhes</button>
      <button onClick={getPokemonList}>Get Pokemon</button> */}
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
              <img src={props.pokedex[currentIndex]?.url.gif_front_default} alt={props.pokedex[currentIndex]?.nome} height="170" />
            </Picture>
            <ButtomBottomPicture>
              Deletar
            </ButtomBottomPicture>
            <Speakers>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </Speakers>
          </Screen>
          <BigBlueButton />
          <BarButtonLeft>
            frente
          </BarButtonLeft>
          <BarButtonRight>
            costas
          </BarButtonRight>
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
          {renderStatsScreen}
          <BlueButtonsContainer1>
            <BlueButton onClick={() => changeDetailsScreen(1)}>LOCAIS</BlueButton>
            <BlueButton onClick={() => changeDetailsScreen(2)}>GERAL</BlueButton>
            <BlueButton onClick={() => changeDetailsScreen(3)}>x</BlueButton>
            <BlueButton onClick={() => changeDetailsScreen(4)}>x</BlueButton>
            <BlueButton onClick={() => changeDetailsScreen(5)}>x</BlueButton>
          </BlueButtonsContainer1>
          <BlueButtonsContainer2>
            <BlueButton onClick={() => changeDetailsScreen(6)}>x </BlueButton>
            <BlueButton onClick={() => changeDetailsScreen(7)}>x </BlueButton>
            <BlueButton onClick={() => changeDetailsScreen(8)}>x</BlueButton>
            <BlueButton onClick={() => changeDetailsScreen(9)}>x</BlueButton>
            <BlueButton onClick={() => changeDetailsScreen(10)}>x</BlueButton>
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
      </MyPokedex>
      <ComponentFooter />
    </PageContainer>
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

{
  /* <CardsContainer>
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
</CardsContainer> */
}
