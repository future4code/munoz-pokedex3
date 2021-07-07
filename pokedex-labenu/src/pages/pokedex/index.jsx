import { useHistory } from "react-router-dom";
import React from "react";

export function Pokedex() {
  const history = useHistory();
  const voltar = () => history.push("home");
  const detalhes = () => history.push("details");
  return (
    <div>
      Pokedex!
      <button onClick={voltar}>Voltar</button>
      <button onClick={detalhes}>Detalhes</button>
    </div>
  );
}

export default Pokedex;
