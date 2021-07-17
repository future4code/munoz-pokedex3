import React, { useState, useEffect } from "react";
import { GameContainer } from "./style.js";
import { ImageContainer } from "./style.js";
import { BackButton } from "./style.js";
import { useHistory } from "react-router-dom";
import { base_url } from "../../constants/api.js";
import Header from "../../Components/Header/index.jsx";
import ComponentFooter from "../Footer/index.jsx";

const capFirstLetter = (string) => {
  return string.replace(string[0], string[0].toUpperCase());
};

const randomIntegerNumber = (limSup, limInf = 0) => {
  if (limSup > limInf) {
    return Math.round(limInf + Math.random() * (limSup - limInf));
  } else {
    throw new Error("limInf is greater than or equal to limSup");
  }
};

const pokeApiLength = 898;

export function Game() {
  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [rightPokemonNumber, setRightPokemonNumber] = useState(
    randomIntegerNumber(3)
  );
  const [imgState, setImgState] = useState("hidden");
  const [rightAnswer, setRightAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const backHome = () => history.push("");

  useEffect(() => {
    if (pokemonsArray.length < 4) {
      setIsLoading(true);
      fetch(`${base_url}/pokemon/${randomIntegerNumber(pokeApiLength, 1)}`)
        .then((response) => response.json())
        .then((response) => {
          setPokemonsArray((prevPokemons) => [...prevPokemons, response]);
          setIsLoading(false);
        })
        .catch((error) => {
          alert(
            error +
              ". Please reload the page and be sure to have internet connection."
          );
          setIsLoading(false);
        });
    }
  }, [pokemonsArray]);

  const rightAnswerHandler = (event) => {
    event.preventDefault();
    setImgState("visible");
    setRightAnswer(true);
  };
  const wrongAnswerHandler = (event) => {
    event.preventDefault();
    setImgState("visible");
    setWrongAnswer(true);
  };

  const resetGame = (event) => {
    event.preventDefault();
    setPokemonsArray([]);
    setRightPokemonNumber(randomIntegerNumber(3));
    setImgState("hidden");
    setRightAnswer(false);
    setWrongAnswer(false);
  };

  let pokemonImage = null;
  if (isLoading) {
    pokemonImage = (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  if (pokemonsArray.length === 4) {
    pokemonImage = (
      <img
        className={imgState}
        src={pokemonsArray[rightPokemonNumber].sprites.front_default}
        alt="Pokemon Image"
      />
    );
  }
  let options;
  if (pokemonsArray.length === 4) {
    options = pokemonsArray.map((pokemon, index) => {
      if (pokemon) {
        if (index === rightPokemonNumber) {
          return (
            <button
              key={pokemon.name}
              className="option"
              onClick={(event) => rightAnswerHandler(event)}
            >
              {capFirstLetter(pokemon.name)}
            </button>
          );
        } else {
          return (
            <button
              key={pokemon.name}
              className="option"
              onClick={(event) => wrongAnswerHandler(event)}
            >
              {capFirstLetter(pokemon.name)}
            </button>
          );
        }
      }
    });
  }

  if (rightAnswer) {
    options = (
      <p>
        <span className="win">Muito bem!</span> Este é{" "}
        <span>{capFirstLetter(pokemonsArray[rightPokemonNumber].name)}</span>
      </p>
    );
  }
  if (wrongAnswer) {
    options = (
      <p>
        <span className="lose">Você errou!</span> Este era{" "}
        <span>{capFirstLetter(pokemonsArray[rightPokemonNumber].name)}</span>
      </p>
    );
  }

  return (
    <>
      <Header />
      <GameContainer>
        <BackButton onClick={backHome}>Voltar</BackButton>
        <h1>Quem é esse Pokémon?</h1>
        <ImageContainer>{pokemonImage}</ImageContainer>
        <div className="options-container">{options}</div>
        <button
          className="try-another"
          onClick={(event) => {
            resetGame(event);
          }}
        >
          Tente novamente
        </button>
      </GameContainer>
      <ComponentFooter />
    </>
  );
}

export default Game;
