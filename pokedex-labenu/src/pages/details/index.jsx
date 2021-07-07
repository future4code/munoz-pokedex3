import { useHistory } from "react-router-dom";
import React from "react";

export function Details() {
  const history = useHistory();
  const voltar = () => history.push("pokedex");
  const procurarMaisPokemons = () => history.push("home");
  return (
    <div>
      Detalhes!
      <button onClick={voltar}>Voltar</button>
      <button onClick={procurarMaisPokemons}>home</button>
    </div>
  );
}

export default Details;
