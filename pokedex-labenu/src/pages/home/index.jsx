import { useHistory } from "react-router-dom";
import React from "react";

export function Home() {
  const history = useHistory();
  const irParaPokedex = () => history.push("pokedex");
  const detalhes = () => history.push("details");
  return (
    <div>
      home!
      <button onClick={irParaPokedex}>Pokedex</button>
      <button onClick={detalhes}>Detalhes</button>
    </div>
  );
}

export default Home;
