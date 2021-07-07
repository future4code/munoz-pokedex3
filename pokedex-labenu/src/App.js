import { Route, Switch, BrowserRouter } from "react-router-dom";
import React from "react";
import Pokedex from "./pages/pokedex";
import Details from "./pages/details";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={"/pokedex"}>
            <Pokedex />
          </Route>
          <Route path={"/details"}>
            <Details />
          </Route>
          <Route path={"/"}>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
