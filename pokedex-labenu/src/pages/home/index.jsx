import { useHistory } from "react-router-dom";
import React from "react";
import { HeaderAppBar } from "./style";
import { HeaderToolbar } from "./style";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";

export function Home() {
  const history = useHistory();
  const irParaPokedex = () => history.push("pokedex");
  const detalhes = () => history.push("details");
  return (
    <div>
      <HeaderAppBar position={"sticky"}>
        <HeaderToolbar component={Container}>
          Pokemóns
          <Button variant="outlined" onClick={irParaPokedex}>
            Pokedex
          </Button>
        </HeaderToolbar>
      </HeaderAppBar>

      <button onClick={detalhes}>Detalhes</button>
    </div>
  );
}

export default Home;
