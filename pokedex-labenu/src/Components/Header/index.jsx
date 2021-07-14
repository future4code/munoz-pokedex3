import React from "react";
import { HeaderAppBar, HeaderLogo, HeaderToolbar } from "./style";
import { Button } from "@material-ui/core";
import Logo from "../../assets/pokebola-logo3.png";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router";

export default function Header() {
  const history = useHistory();
  const changePage = (path) => history.push(path);
  return (
    <div>
      <HeaderAppBar position={"sticky"}>
        <HeaderToolbar component={Container}>
          <HeaderLogo src={Logo} alt="Logo" onClick={() => changePage("/")} />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => changePage("/pokedex")}
          >
            Pokedex
          </Button>
        </HeaderToolbar>
      </HeaderAppBar>
    </div>
  );
}
