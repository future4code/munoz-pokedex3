import styled from "styled-components";

// import { theme } from "../../themes/index";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 20px 20px 0 50px;
`;


export const Card = styled.div`

`

export const FlipContainer = styled.div`
  width: 80%;
  
  /* :hover .flipper {
    transform: rotateY(180deg);
  } */
`;

export const PokemonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case "fire":
        return "rgba(247, 82, 49, 0.5)";
      case "water":
        return "rgba(57, 156, 255, 0.5)";
      case "grass":
        return "rgba(123, 206, 82, 0.5)";
      case "poison":
        return "rgba(181, 90, 165, 0.5)";
      case "bug":
        return "rgba(173, 189, 33, 0.5)";
      case "ground":
        return "rgba(214, 181, 90, 0.5)";
      case "normal":
        return "rgba(173, 165, 148, 0.5)";
      case "electric":
        return "rgba(255, 198, 49, 0.5)";
      case "fairy":
        return "rgba(247, 181, 247, 0.5)";
      case "fighting":
        return "rgba(165, 82, 57, 0.5)";
      case "rock":
        return "rgba(189, 165, 90, 0.5)";
      case "psychic":
        return "rgba(255, 115, 165, 0.5)";
      case "ghost":
        return "rgba(99, 99, 181, 0.5)";
      case "ice":
        return "rgba(90, 206, 231, 0.5)";
      case "dragon":
        return "rgba(123, 99, 231, 0.5)";
      case "dark":
        return "rgba(115, 90, 74, 0.5)";
      case "steel":
        return "rgba(173, 173, 198, 0.5)";
      case "flying":
        return "rgba(156, 173, 247, 0.5)";
      default:
        return "#30344c";
    }
  }};

  margin: 25px;
  padding-top: 30px;
  max-width: 20vw;
  height: 36vh;
  color: white;
  border-radius: 10px;
  box-shadow: 1em 1em 1em 1em rgba(36, 36, 36, 0.404);
  transform-style: preserve-3d;
  transition: transform 0.8s;
  position: relative;
  cursor: pointer;

  transform: ${props => (props.flippedCardId === props.pokemonId) ? 'rotateY(180deg)' : 'none'}
`;
export const FrontFlipper = styled.div`
  position: absolute;
  backface-visibility: hidden;
`;

export const BackFlipper = styled.div`
  transform: rotateY( 180deg );
  backface-visibility: hidden;

  p {
    font-size: 18px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #2b3042;
  width: 13vw;
  height: 10vh;
  margin-top: 48px;
  border-radius: 10px;
`;

export const PokemonImage = styled.img`
  /* width: 10vw; */
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
  margin-top: 32px;
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

// ((props) => (
//   <Typography component={"h1"} variant={"body1"} {...props} />
// ))`
//   font-weight: bold;
