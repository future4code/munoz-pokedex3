import React, { useState, useEffect } from "react";
import { translateType } from "../../services/formatDataPokemons";
import { getCharacteristics, getLocations } from "../../requests/pokemonAPI";
import ComponentFooter from "../Footer";
import Header from "../../Components/Header";
import ArtworkIcon from "../../assets/artwork-icon.png"
import {
  FrontImageButton, BackImageButton, BgCurve1Left, BgCurve2Left, ArtworkButton, DownArrow, DeleteButton, ButtonGlass, ButtonTopPicture, Cross, CrossMidCircle, Curve1Left, Curve2Left, DownTriangle, Junction, Junction1, Junction2, LeftArrow, LeftfTriangle, LeftSide, MiddleCross, MiniButtonGreen, MiniButtonRed, MiniButtonYellow, MyPokedex, Picture, Reflect, RightArrow, RightSide, RightTriangle, Screen, Speakers, UpArrow, TopPicture, UpTriangle, StatsScreen, BlueButtonsContainer1, BlueButton, MiniButtonOrange, MiniButtonDarkGreen, YellowBox1, YellowBox2, BgCurve1Right, BgCurve2Right, Curve1Right, Curve2Right, LogoDiv, PageContainer
} from "./style";

export function Pokedex(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pokemonPhoto, setPokemonPhoto] = useState(null);
  const [detailsScreenIndex, setDetailsScreenIndex] = useState(undefined);
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

  useEffect(() => {
    if (props.pokedex.length > 0) {
      setDetailsScreenIndex(1)
    }
  }, [])

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
    if (props.pokedex.length > 0) {
      setDetailsScreenIndex(id)
    } else {
      setDetailsScreenIndex(undefined)
    }

  }

  const renderTypeTranslated = props.pokedex[currentIndex]?.tipo.map((item) => {
    return <span>{translateType(item.type.name)} </span>;
  });

  let renderStatsScreen;
  switch (detailsScreenIndex) {
    case 1:

      renderStatsScreen = <StatsScreen>
        <h2>{props.pokedex[currentIndex]?.nome}</h2>
        <strong>Tipo(s):</strong> {renderTypeTranslated}<br />
        
        <strong>Tamanho:</strong> {props.pokedex[currentIndex]?.tamanho}cm<br />
        <strong>Peso:</strong> {props.pokedex[currentIndex]?.peso}Kg<br /><br />
      </StatsScreen>

      break;

    case 2:
      const list = locationsList?.map((local) => {
        return <p>{local.location_area.name}</p>
      })
      renderStatsScreen = <StatsScreen>
        <h3>ENCONTRADO NOS LOCAIS:</h3>
        {list.length > 0 ? list : <p>Não há locais registrados</p>}
      </StatsScreen>
      break;

    case 3:
      renderStatsScreen = <StatsScreen>
        <h3>CURIOSIDADE</h3>
        {characteristics.descriptions[2].description}</StatsScreen>
      break;

    case 4:
      renderStatsScreen = <StatsScreen>
        <h3>ESPECIALIDADE</h3>
        {characteristics.highest_stat.name}
      </StatsScreen>
      break;

    case 5:
      renderStatsScreen = <StatsScreen>
        <h3>STATS DE BATALHA</h3>
        <strong>HP:</strong> {props.pokedex[currentIndex]?.hp}<br />
        <strong>Ataque:</strong> {props.pokedex[currentIndex]?.ataque}<br />
        <strong>Defesa:</strong> {props.pokedex[currentIndex]?.defesa}<br />
        <strong>Velocidade:</strong> {props.pokedex[currentIndex]?.velocidade}<br />
      </StatsScreen>
      break;

    case 6:
      const skills = props.pokedex[currentIndex]?.habilidades.map((habilidade) => {
        return <p>{habilidade.ability.name}</p>
      })

      renderStatsScreen = <StatsScreen>
        <h3>HABILIDADES</h3>
        {skills}
      </StatsScreen>
      break;

    default:
      renderStatsScreen = <StatsScreen>
        Selecione um Pokemon
      </StatsScreen>
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

  }


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

            <Picture>
              {renderPhoto()}
            </Picture>
            <DeleteButton
              onClick={() => deletePokemon(currentIndex)}
            >
              X
            </DeleteButton>

            <Speakers>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </Speakers>
          </Screen>

          <ArtworkButton
            onClick={() => changePhoto('artwork')}
          >
            <img src={ArtworkIcon} alt={'ArtworkIcon'} />
          </ArtworkButton>
          <FrontImageButton
            onClick={() => changePhoto('front')}
          >
            frente
          </FrontImageButton>
          <BackImageButton
            onClick={() => changePhoto('back')}
          >

            costas
          </BackImageButton>
          <Cross>
            <LeftArrow onClick={lastPokemon}>
              <LeftfTriangle />
            </LeftArrow>
            <UpArrow
              onClick={() => changePhoto('front')}
            >
              <UpTriangle />
            </UpArrow>
            <RightArrow onClick={nextPokemon}>
              <RightTriangle />
            </RightArrow>
            <MiddleCross>
              <CrossMidCircle />
            </MiddleCross>
            <DownArrow
              onClick={() => changePhoto('back')}
            >
              <DownTriangle />
            </DownArrow>
          </Cross>
        </LeftSide>
        <RightSide>
          {renderStatsScreen}
          <BlueButtonsContainer1>
            <BlueButton onClick={() => changeStatsScreen(1)}>GERAL</BlueButton>
            <BlueButton onClick={() => changeStatsScreen(2)}>LOCAIS</BlueButton>

            <BlueButton onClick={() => changeStatsScreen(3)}>CURIOSIDADE</BlueButton>
            <BlueButton onClick={() => changeStatsScreen(4)}>ESPECIALIDADE</BlueButton>
            <BlueButton onClick={() => changeStatsScreen(5)}>BATALHA</BlueButton>
            <BlueButton onClick={() => changeStatsScreen(6)}>HABILIDADES</BlueButton>
            
          </BlueButtonsContainer1>
          <MiniButtonOrange />
          <MiniButtonDarkGreen />

          <YellowBox1 />
          <YellowBox2 />
          <BgCurve1Right />
          <BgCurve2Right />
          <Curve1Right />
          <Curve2Right />
        </RightSide>
      </MyPokedex>
      <p>Baseado na pokedex de <a href={'https://codepen.io/Bidji/pen/MYdPwo'}>Bidji</a></p>
      <ComponentFooter />
    </PageContainer>
  );
}

export default Pokedex;
