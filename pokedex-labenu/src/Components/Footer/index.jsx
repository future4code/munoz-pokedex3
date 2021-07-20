import { useHistory } from "react-router-dom";
import { React } from "react";
import {
  Footer,
  Seções,
  ContainerSeções,
  ContainerDesenvolvidoPor,
  ContainerMaterial,
  AllAvatar,
  ContainerAvatar,
} from "./style";
import AvatarBrendha from "../../assets/brendha.jpg";
import AvatarRafael from "../../assets/rafael.jpg";
import AvatarMatheus from "../../assets/matheus.jpg";
import Tooltip from "../../Components/Tooltip";

export default function ComponentFooter() {
  const history = useHistory();
  const irParaPokedex = () => {
    history.push("/pokedex");
  };
  const procurarMaisPokemons = () => history.push("/");

  return (
    <>
      <Footer>
        <ContainerMaterial>
          <ContainerSeções>
            <Seções onClick={irParaPokedex}>Pokedex</Seções>
            <Seções onClick={procurarMaisPokemons}>Pegar mais Pokemóns</Seções>
          </ContainerSeções>
          <ContainerDesenvolvidoPor>
            <p>Desenvolvido por Brendha, Rafael e Matheus</p>
          </ContainerDesenvolvidoPor>
          <ContainerAvatar>
            <Tooltip content="Brendha Barbosa">
              <a href="https://www.linkedin.com/in/brendha-barbosa/">
                {" "}
                <AllAvatar alt="Brendha" src={AvatarBrendha} />
              </a>
            </Tooltip>
            <Tooltip content="Rafael Silveira">
              <a href="https://www.linkedin.com/in/rafaelsilveiradarosa/">
                {" "}
                <AllAvatar alt="Rafael" src={AvatarRafael} />
              </a>
            </Tooltip>
            <Tooltip content="Matheus Rodrigues">
              <a href="https://www.linkedin.com/in/matheusroliv/">
                {" "}
                <AllAvatar alt="Matheus" src={AvatarMatheus} />
              </a>
            </Tooltip>
          </ContainerAvatar>
        </ContainerMaterial>
      </Footer>
    </>
  );
}
