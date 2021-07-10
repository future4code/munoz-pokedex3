import styled from "styled-components";
import { AppBar, Toolbar } from "@material-ui/core";
// import { theme } from "../../themes/index";

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

// ((props) => (
//   <Typography component={"h1"} variant={"body1"} {...props} />
// ))`
//   font-weight: bold;
