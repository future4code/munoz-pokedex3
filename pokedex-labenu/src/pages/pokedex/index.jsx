import React, { useState, useEffect } from "react";
import { translateType } from "../../services/formatDataPokemons";
import { getCharacteristics, getLocations } from "../../requests/pokemonAPI";
import ComponentFooter from "../Footer";
import Header from "../../Components/Header";
import {
  BarButtonLeft,
  BarButtonRight,
  BgCurve1Left,
  BgCurve2Left,
  BigBlueButton,
  DownArrow,
  ButtomBottomPicture,
  ButtonGlass,
  ButtonTopPicture,
  Cross,
  CrossMidCircle,
  Curve1Left,
  Curve2Left,
  DownTriangle,
  Junction,
  Junction1,
  Junction2,
  LeftArrow,
  LeftfTriangle,
  LeftSide,
  MiddleCross,
  MiniButtonGreen,
  MiniButtonRed,
  MiniButtonYellow,
  MyPokedex,
  Picture,
  Reflect,
  RightArrow,
  RightSide,
  RightTriangle,
  Screen,
  Speakers,
  UpArrow,
  TopPicture,
  UpTriangle,
  StatsScreen,
  BlueButtonsContainer1,
  BlueButton,
  MiniButtonOrange,
  MiniButtonDarkGreen,
  BarButtonRightSide,
  YellowBox1,
  YellowBox2,
  BgCurve1Right,
  BgCurve2Right,
  Curve1Right,
  Curve2Right,
  LogoDiv,
  PageContainer,
} from "./style";

export function Pokedex(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pokemonPhoto, setPokemonPhoto] = useState(null);
  const [detailsScreenIndex, setDetailsScreenIndex] = useState(1);
  const [locationsList, setLocationsList] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);

  useEffect(async () => {
    const locations = await getLocations(props.pokedex[currentIndex]?.id);
    const characteristics = await getCharacteristics(
      props.pokedex[currentIndex]?.id
    );

    setLocationsList(locations?.data);
    setCharacteristics(characteristics?.data);
  }, [currentIndex]);

  const deletePokemon = (index) => {
    const deletando = Array.from(props.pokedex);
    deletando.splice(index, 1);
    props.setPokedex(deletando);
    setPokemonPhoto(null);
  };

  const changePhoto = (version) => {
    if (version === "back") {
      setPokemonPhoto(props.pokedex[currentIndex]?.url.gif_back_default);
    } else if (version === "front-female") {
      setPokemonPhoto(props.pokedex[currentIndex]?.url.gif_front_female);
    } else if (version === "back-female") {
      setPokemonPhoto(props.pokedex[currentIndex]?.url.gif_back_female);
    } else if (version === "artwork") {
      setPokemonPhoto(props.pokedex[currentIndex]?.url.artwork_front);
    } else {
      setPokemonPhoto(props.pokedex[currentIndex]?.url.gif_front_default);
    }
  };

  const nextPokemon = () => {
    if (currentIndex === props.pokedex.length - 1) {
      setCurrentIndex(0);
      setPokemonPhoto(null);
    } else {
      const next = currentIndex + 1;
      setCurrentIndex(next);
      setPokemonPhoto(null);
    }
  };

  const lastPokemon = () => {
    if (currentIndex === 0) {
      setCurrentIndex(props.pokedex.length - 1);
      setPokemonPhoto(null);
    } else {
      const last = currentIndex - 1;
      setCurrentIndex(last);
      setPokemonPhoto(null);
    }
  };

  const changeStatsScreen = (id) => {
    setDetailsScreenIndex(id);
  };

  const renderTypeTranslated = props.pokedex[currentIndex]?.tipo.map((item) => {
    return <span>{translateType(item.type.name)} </span>;
  });

  let renderStatsScreen;
  switch (detailsScreenIndex) {
    case 1:
      renderStatsScreen = (
        <StatsScreen>
          <strong>Nome:</strong> {props.pokedex[currentIndex]?.nome}
          <br />
          <strong>Tipo(s):</strong> {renderTypeTranslated}
          <br />
          <strong>Tamanho:</strong> {props.pokedex[currentIndex]?.tamanho}cm
          <br />
          <strong>Peso:</strong> {props.pokedex[currentIndex]?.peso}Kg
          <br />
          <br />
        </StatsScreen>
      );
      break;

    case 2:
      const list = locationsList?.map((local) => {
        return <p>{local.location_area.name}</p>;
      });
      renderStatsScreen = (
        <StatsScreen>ENCONTRADO NOS LOCAIS:{list}</StatsScreen>
      );
      break;

    case 3:
      renderStatsScreen = (
        <StatsScreen>
          <p>Característica:</p>
          {characteristics.descriptions[2].description}
        </StatsScreen>
      );
      break;

    case 4:
      renderStatsScreen = (
        <StatsScreen>
          <p>Ponto Forte:</p>
          {characteristics.highest_stat.name}
        </StatsScreen>
      );
      break;

    default:
      renderStatsScreen = (
        <StatsScreen>
          <strong>Nome:</strong> {props.pokedex[currentIndex]?.nome}
          <br />
          <strong>Tipo(s):</strong> {renderTypeTranslated}
          <br />
          <strong>Tamanho:</strong> {props.pokedex[currentIndex]?.tamanho}cm
          <br />
          <strong>Peso:</strong> {props.pokedex[currentIndex]?.peso}Kg
          <br />
          <br />
        </StatsScreen>
      );
      break;
  }

  const renderPhoto = () => {
    if (props.pokedex.length > 0) {
      if (pokemonPhoto === null) {
        return (
          <img
            src={props.pokedex[currentIndex]?.url.gif_front_default}
            alt={props.pokedex[currentIndex]?.nome}
          />
        );
      } else {
        return <img src={pokemonPhoto} alt={"Pokedex"} />;
      }
    } else {
      return (
        <img
          src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/200653/logo.png"}
          alt={"Pokedex"}
        />
      );
    }
  };

  return (
    <PageContainer>
      <Header />
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
            <Picture>{renderPhoto()}</Picture>
            <ButtomBottomPicture onClick={() => deletePokemon(currentIndex)}>
              Deletar
            </ButtomBottomPicture>
            <Speakers>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </Speakers>
          </Screen>
          <BigBlueButton onClick={() => changePhoto("artwork")}>
            {" "}
            ART
          </BigBlueButton>
          <BarButtonLeft onClick={() => changePhoto("front")}>
            frente
          </BarButtonLeft>
          <BarButtonRight onClick={() => changePhoto("back")}>
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
            <BlueButton onClick={() => changeStatsScreen(1)}>GERAL</BlueButton>
            <BlueButton onClick={() => changeStatsScreen(2)}>LOCAIS</BlueButton>
            <BlueButton onClick={() => changeStatsScreen(3)}>CARAC</BlueButton>
            <BlueButton onClick={() => changeStatsScreen(4)}>FORTE</BlueButton>
          </BlueButtonsContainer1>

          <MiniButtonOrange />
          <MiniButtonDarkGreen />
          <BarButtonRightSide />

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
