import { useHistory } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { PowerInputSharp } from "@material-ui/icons";

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const PokemonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #353D51;
  margin: 25px;
  max-width: 15vw;
  height: 550px;
  color: white;
`

export function Pokedex(props) {
  const history = useHistory();
  const voltar = () => history.push("home");
  const detalhes = () => history.push("details");

  return (
    <div>
      Pokedex!
      <button onClick={voltar}>Voltar</button>
      <button onClick={detalhes}>Detalhes</button>

      <CardsContainer>
        {props.pokedex.map(pokemon => {
          return (
            <PokemonContainer>
              <img src={pokemon.url} />
              <h2>{pokemon.nome}</h2>
              <p>{pokemon.tipo}</p>
              <button>Remover da Pokedex</button>
            </PokemonContainer>
          )
        })}
      </CardsContainer>
    </div>
  );
}

export default Pokedex;
