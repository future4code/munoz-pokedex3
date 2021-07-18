import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 20px 20px 0 50px;
`;

export const Card = styled.div``;

export const FlipContainer = styled.div`
  width: 80%;
`;

export const PokemonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case "Planta":
        return "rgba(123, 206, 82, 0.5)";
      case "Fogo":
        return "rgba(247, 82, 49, 0.5)";
      case "Água":
        return "rgba(57, 156, 255, 0.5)";
      case "Venenoso":
        return "rgba(181, 90, 165, 0.5)";
      case "Inseto":
        return "rgba(173, 189, 33, 0.5)";
      case "Terra":
        return "rgba(214, 181, 90, 0.5)";
      case "Normal":
        return "rgba(173, 165, 148, 0.5)";
      case "Elétrico":
        return "rgba(255, 198, 49, 0.5)";
      case "Fada":
        return "rgba(247, 181, 247, 0.5)";
      case "Lutador":
        return "rgba(165, 82, 57, 0.5)";
      case "Pedra":
        return "rgba(189, 165, 90, 0.5)";
      case "Psíquico":
        return "rgba(255, 115, 165, 0.5)";
      case "Fantasma":
        return "rgba(99, 99, 181, 0.5)";
      case "Gelo":
        return "rgba(90, 206, 231, 0.5)";
      case "Dragão":
        return "rgba(123, 99, 231, 0.5)";
      case "Noturno":
        return "rgba(115, 90, 74, 0.5)";
      case "Metálico":
        return "rgba(173, 173, 198, 0.5)";
      case "Voador":
        return "rgba(156, 173, 247, 0.5)";
      default:
        return "#30344c";
    }
  }};

  margin: 25px;
  padding-top: 30px;
  max-width: 19vw;
  height: 48vh;
  color: white;
  border-radius: 10px;
  box-shadow: 1em 1em 1em 1em rgba(36, 36, 36, 0.404);
  transform-style: preserve-3d;
  transition: transform 0.8s;
  position: relative;
  cursor: pointer;

  transform: ${(props) =>
    props.flippedCardId === props.pokemonId ? "rotateY(180deg)" : "none"};
`;
export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #2b3042;
  width: 19vw;
  margin-top: 20px;
  padding-bottom: 38px;
  padding-top: 25px;
  height: 23vh;
  border-radius: 10px;
`;
export const FrontFlipper = styled.div`
  position: absolute;
  backface-visibility: hidden;
`;

export const BackFlipper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: rotateY(180deg);
  backface-visibility: hidden;

  p {
    font-size: 22px;
  }
`;

export const PokemonImage = styled.img`
  margin-left: 30%;
`;

export const ButtonCard = styled.button`
  width: 8vw;
  font-size: 12px;
  height: 6vh;
  background-color: #a4bdfb;
  :hover {
    background-color: rgb(109, 125, 166);
  }
  margin-top: 15px;
  border-radius: 8px;
  border: none;
  font-family: Poppins;
  cursor: pointer;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;
export const Arrows = styled.img`
  width: 3vw;
  margin: 35px 12px 0 12px;
`;
