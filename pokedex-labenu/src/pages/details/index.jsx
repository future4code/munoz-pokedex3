import { useHistory } from "react-router-dom";
import React from "react";
import { getPokemonList } from "../../requests/pokemonAPI";

export function Details() {
  const history = useHistory();
  const voltar = () => history.push("pokedex");
  const procurarMaisPokemons = () => history.push("home");
  return (
    <div>
      Detalhes!
      <button onClick={voltar}>Voltar</button>
      <button onClick={procurarMaisPokemons}>home</button>
      <button onClick={getPokemonList}>Get Pokemon</button>
    </div>
  );
}

export default Details;
