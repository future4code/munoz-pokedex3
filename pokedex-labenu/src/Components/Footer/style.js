import { Container } from "@material-ui/core";
import styled from "styled-components";

export const ContainerMaterial = styled(Container)`
  && {
    display: flex;
    justify-content: space-between;
  }
`;

export const Footer = styled.div`
  margin-top: 60px;
  color: white;
  background-color: #30344c;
  display: flex;
  height: 25vh;
  align-items: center;
`;
export const Seções = styled.h2`
  cursor: pointer;
  :hover {
    color: #a4bdfb;
  }
`;
export const ContainerSeções = styled.div`
  width: 20vw;
`;
export const ContainerDesenvolvidoPor = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerAvatar = styled.div`
  display: flex;
`;
export const AllAvatar = styled.img`
  margin-left: 12px;
  width: 4vw;
  height: 4vw;
  border-radius: 50%;
  background-size: cover;
`;
