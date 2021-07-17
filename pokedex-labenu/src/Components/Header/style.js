import styled from "styled-components";
import { AppBar, Toolbar, Button } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.main};
`;
export const HeaderToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;
export const HeaderLogo = styled.img`
  width: 3vw;
`;
export const Buttons = styled(Button)`
  && {
    margin-left: 70%;
  }
`;
