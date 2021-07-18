import styled from "styled-components";
import { darkRed } from "../../constants/colors";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;


  button {
    border: none;
  }

  p {
    margin: 0 auto;
  }
`



export const MyPokedex = styled.div`
  width: 750px;
  margin: 50px auto 20px auto;

  @media (max-width: 768px) {
    width: 400px;
  }
`;

export const LeftSide = styled.div`
  width: 400px;
  height: 500px;
  float: left;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 400px;
    height: 500px;
    float: left;
    position: relative;
    z-index: 1;
    margin: 0 auto;
  }
`;

export const RightSide = styled.div`
  width: 350px;
  height: 500px;
  float: left;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

/// LEFT SIDE CONTENT
export const LogoDiv = styled.div`
  @media (max-width: 768px) {
    width: 281px;
    height: 99px;
    z-index: 1;

    position: absolute;
    top: 220px;
    left: 30px;
  }
`;
export const BgCurve1Left = styled.div`
  width: 400px;
  height: 80px;
  background-color: ${darkRed};

  border-top-left-radius: 30px;
  -webkit-border-top-left-radius: 30px;
  -moz-border-top-left-radius: 30px;
  -o-border-top-left-radius: 30px;

  @media (max-width: 768px) {
    width: 400px;
    height: 80px;
    background-color: #8b0000;

    box-shadow: -10px 9px #5e0000;
    -webkit-box-shadow: -10px 9px #5e0000;
    -moz-box-shadow: -10px 9px #5e0000;
    -o-box-shadow: -10px 9px #5e0000;

    border-top-left-radius: 30px;
    -webkit-border-top-left-radius: 30px;
    -moz-border-top-left-radius: 30px;
    -o-border-top-left-radius: 30px;
  }
`;

export const BgCurve2Left = styled.div`
  width: 400px;
  height: 420px;
  background-color: #c00d0d;

  box-shadow: -10px 9px #5e0000;
  -webkit-box-shadow: -10px 9px #5e0000;
  -moz-box-shadow: -10px 9px #5e0000;
  -o-box-shadow: -10px 9px #5e0000;

  border-bottom-left-radius: 30px;
  -webkit-border-bottom-left-radius: 30px;
  -moz-border-bottom-left-radius: 30px;
  -o-border-bottom-left-radius: 30px;
`;

export const Curve1Left = styled.div`
  z-index: 1;
  width: 235px;
  height: 85px;
  background-color: #8b0000;
  float: left;
  padding: 15px 0 0 15px;

  position: absolute;
  top: 0;
  left: 0;

  box-shadow: -10px 9px #5e0000;
  -webkit-box-shadow: -10px 9px #5e0000;
  -moz-box-shadow: -10px 9px #5e0000;
  -o-box-shadow: -10px 9px #5e0000;

  border-bottom-right-radius: 85px 60px;
  -webkit-border-bottom-right-radius: 85px 60px;
  -moz-border-bottom-right-radius: 85px 60px;
  -o-border-bottom-right-radius: 85px 60px;

  border-top-left-radius: 30px;
  -webkit-border-top-left-radius: 30px;
  -moz-border-top-left-radius: 30px;
  -o-border-top-left-radius: 30px;

  @media (max-width: 768px) {
    width: 201px;
    height: 85px;
    background-color: #8b0000;
    float: left;
    padding: 15px 0 0 15px;

    position: absolute;
    top: 0;
    left: 0;

    box-shadow: 0 0 #5e0000;
    -webkit-box-shadow: 0 0 #5e0000;
    -moz-box-shadow: 0 0 #5e0000;
    -o-box-shadow: 0 0 #5e0000;

    border-bottom-right-radius: 85px 60px;
    -webkit-border-bottom-right-radius: 85px 60px;
    -moz-border-bottom-right-radius: 85px 60px;
    -o-border-bottom-right-radius: 85px 60px;

    border-top-left-radius: 30px;
    -webkit-border-top-left-radius: 30px;
    -moz-border-top-left-radius: 30px;
    -o-border-top-left-radius: 30px;
  }
`;

export const Curve2Left = styled.div`
  width: 216px;
  height: 451px;
  background-color: #c00d0d;
  float: right;

  position: absolute;
  bottom: 0;
  right: 0;

  border-top-left-radius: 85px 60px;
  -webkit-border-top-left-radius: 85px 60px;
  -moz-border-top-left-radius: 85px 60px;
  -o-border-top-left-radius: 85px 60px;
`;

export const ButtonGlass = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  border: 5px solid #fff;
  float: left;

  box-shadow: 0 0 10px #490000;
  -webkit-box-shadow: 0 0 10px #490000;
  -moz-box-shadow: 0 0 10px #490000;
  -o-box-shadow: 0 0 10px #490000;

  background: radial-gradient(#05fbfb, #29abe3);
  background: -webkit-radial-gradient(#05fbfb, #29abe3);
  background: -moz-radial-gradient(#05fbfb, #29abe3);
  background: -o-radial-gradient(#05fbfb, #29abe3);

  border-radius: 35px;
  -webkit-border-radius: 35px;
  -moz-border-radius: 35px;
  -o-border-radius: 35px;
`;

export const Reflect = styled.div`
  width: 30px;
  height: 18px;
  margin: 3px 0 0 15px;
  background: #fff;
  opacity: 0.6;

  border-radius: 15px 9px;
  -webkit-border-radius: 15px 9px;
  -moz-border-radius: 15px 9px;
  -o-border-radius: 15px 9px;
`;

export const MiniButtonGlass = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  float: left;

  box-shadow: 0 0 10px #490000;
  -webkit-box-shadow: 0 0 10px #490000;
  -moz-box-shadow: 0 0 10px #490000;
  -o-box-shadow: 0 0 10px #490000;

  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -o-border-radius: 20px;
`;
export const MiniButtonRed = styled(MiniButtonGlass)`
  background: radial-gradient(#fb7b7b, #fb0505);
  background: -webkit-radial-gradient(#fb7b7b, #fb0505);
  background: -moz-radial-gradient(#fb7b7b, #fb0505);
  background: -o-radial-gradient(#fb7b7b, #fb0505);
`;
export const MiniButtonYellow = styled(MiniButtonGlass)`
  background: radial-gradient(#fbfb9b, #fbfb05);
  background: -webkit-radial-gradient(#fbfb9b, #fbfb05);
  background: -moz-radial-gradient(#fbfb9b, #fbfb05);
  background: -o-radial-gradient(#fbfb9b, #fbfb05);
`;
export const MiniButtonGreen = styled(MiniButtonGlass)`
  background: radial-gradient(#b0fb7b, #50fb05);
  background: -webkit-radial-gradient(#b0fb7b, #50fb05);
  background: -moz-radial-gradient(#b0fb7b, #50fb05);
  background: -o-radial-gradient(#b0fb7b, #50fb05);
`;

export const Junction = styled.div`
  width: 60px;
  height: 451px;
  float: right;

  background: linear-gradient(left, #8b0000 0%, #c00d0d 50%, #8b0000 100%);
  background: -webkit-linear-gradient(
    left,
    #8b0000 0%,
    #c00d0d 50%,
    #8b0000 100%
  );
  background: -moz-linear-gradient(left, #8b0000 0%, #c00d0d 50%, #8b0000 100%);
  background: -o-linear-gradient(left, #8b0000 0%, #c00d0d 50%, #8b0000 100%);
`;

export const Junction1 = styled.div`
  height: 40px;
  background-color: #5e0000;
  opacity: 0.3;
  margin-top: 50px;
  margin-bottom: 262px;

  border-top: 2px solid #330000;
  border-bottom: 2px solid #330000;
`;

export const Junction2 = styled.div`
  height: 40px;
  background-color: #5e0000;
  opacity: 0.3;

  border-top: 2px solid #330000;
  border-bottom: 2px solid #330000;
`;

export const Screen = styled.div`
  height: 245px;
  padding: 0 20px;
  background-color: #b0b0b0;
  float: left;

  position: absolute;
  top: 130px;
  left: 19px;

  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -o-border-radius: 15px;

  :after {
    content: "";
    border-top: 40px solid #b0b0b0;
    border-left: 40px solid #c00d0d;
    height: 0;

    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const TopPicture = styled.div`
  margin: 6px auto;
  width: 40px;
`;

export const ButtonTopPicture = styled.div`
  height: 8px;
  width: 8px;
  background-color: #c00d0d;
  border: 1px solid #000;
  float: left;
  margin-right: 10px;

  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -o-border-radius: 15px;
`;

export const Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 175px;
  width: 254px;
  margin-top: 20px;
  margin-bottom: 9px;
  padding: 10px 0;
  background-color: #fff;
  border: 3px solid #494949;
  clear: both;

  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -o-border-radius: 15px;

  img {
    display: block;
    margin: 0 auto;
    min-height: 130px;
    max-height: 100%;
    max-width: 100%;
  }
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  height: 26px;
  width: 26px;
  background-color: #c00d0d;
  margin-left: 35px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-small;
  font-weight: 700;

  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -o-border-radius: 30px;

  box-shadow: -2px 1px #5e0000;
  -webkit-box-shadow: -2px 1px #5e0000;
  -moz-box-shadow: -2px 1px #5e0000;
  -o-box-shadow: -2px 1px #5e0000;

  background: linear-gradient(top, #c00d0d 0%, #8b0000 80%);
  background: -webkit-linear-gradient(top, #c00d0d 0%, #8b0000 80%);
  background: -moz-linear-gradient(top, #c00d0d 0%, #8b0000 80%);
  background: -o-linear-gradient(top, #c00d0d 0%, #8b0000 80%);
 
  :active {
      border: 1px solid rgb(133, 133, 133);
      border-style: inset ;
  }
`

export const Speakers = styled.div`
  float: right;
  width: 75px;
  height: 25px;
  margin-right: 20px;

  div {
    height: 3px;
    margin-bottom: 5px;
    background-color: #494949;

    border-radius: 30px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -o-border-radius: 30px;
  }
`;

export const ArtworkButton = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 395px;
  left: 30px;

  border-radius: 100px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  -o-border-radius: 100px;

  background: linear-gradient(top, #307bfb 0%, #0530e5 80%);
  background: -webkit-linear-gradient(top, #307bfb 0%, #0530e5 80%);
  background: -moz-linear-gradient(top, #307bfb 0%, #0530e5 80%);
  background: -o-linear-gradient(top, #307bfb 0%, #0530e5 80%);

  box-shadow: -3px 2px #001c91;
  -webkit-box-shadow: -3px 2px #001c91;
  -moz-box-shadow: -3px 2px #001c91;
  -o-box-shadow: -3px 2px #001c91;

  :active {
      border: 1px solid rgb(133, 133, 133);
      border-style: inset ;
  }
`;

export const BarButton = styled.button`
  height: 13px;
  width: 50px;

  position: absolute;
  top: 405px;

  border-radius: 100px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  -o-border-radius: 100px;

  :active {
      border: 1px solid rgb(133, 133, 133);
      border-style: inset ;
  }
`;

export const FrontImageButton = styled(BarButton)`
  cursor: pointer;
  left: 100px;
  font-size: x-small;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(top, #50fb05 0%, #057b05 100%);
  background: -webkit-linear-gradient(top, #50fb05 0%, #057b05 100%);
  background: -moz-linear-gradient(top, #50fb05 0%, #057b05 100%);
  background: -o-linear-gradient(top, #50fb05 0%, #057b05 100%);

  box-shadow: -1px 2px #004200;
  -webkit-box-shadow: -1px 2px #004200;
  -moz-box-shadow: -1px 2px #004200;
  -o-box-shadow: -1px 2px #004200;
`;

export const BackImageButton = styled(BarButton)`
  cursor: pointer;
  left: 165px;
  font-size: x-small;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(top, #fb6505 0%, #bb0505 100%);
  background: -webkit-linear-gradient(top, #fb6505 0%, #bb0505 100%);
  background: -moz-linear-gradient(top, #fb6505 0%, #bb0505 100%);
  background: -o-linear-gradient(top, #fb6505 0%, #bb0505 100%);

  box-shadow: -1px 2px #7b0000;
  -webkit-box-shadow: -1px 2px #7b0000;
  -moz-box-shadow: -1px 2px #7b0000;
  -o-box-shadow: -1px 2px #7b0000;
`;

export const Cross = styled.div`
  cursor: pointer;
  width: 90px;
  height: 90px;

  position: absolute;
  top: 394px;
  left: 230px;
`;

export const CrossButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #222;

  position: absolute;

  box-shadow: -3px 2px #010101;
  -webkit-box-shadow: -3px 2px #010101;
  -moz-box-shadow: -3px 2px #010101;
  -o-box-shadow: -3px 2px #010101;
`;

export const MiddleCross = styled(CrossButton)`
  top: 30px;
  left: 30px;
`;
export const UpArrow = styled(CrossButton)`
  top: 0;
  left: 30px;

  border-top-left-radius: 5px;
  -webkit-border-top-left-radius: 5px;
  -moz-border-top-left-radius: 5px;
  -o-border-top-left-radius: 5px;

  border-top-right-radius: 5px;
  -webkit-border-top-right-radius: 5px;
  -moz-border-top-right-radius: 5px;
  -o-border-top-right-radius: 5px;

  :active {
      border-width: 1px 1px 0px 1px;
      border-color: rgb(133, 133, 133);
      border-style: inset ;
  }
`;
export const RightArrow = styled(CrossButton)`
  top: 30px;
  right: 0;

  border-top-right-radius: 5px;
  -webkit-border-top-right-radius: 5px;
  -moz-border-top-right-radius: 5px;
  -o-border-top-right-radius: 5px;

  border-bottom-right-radius: 5px;
  -webkit-border-bottom-right-radius: 5px;
  -moz-border-bottom-right-radius: 5px;
  -o-border-bottom-right-radius: 5px;

  :active {
      border-width: 0px 1px 1px 0px;
      border-color: rgb(133, 133, 133);
      border-style: inset ;
  }
`;
export const DownArrow = styled(CrossButton)`
  bottom: 0;
  left: 30px;

  border-bottom-left-radius: 5px;
  -webkit-border-bottom-left-radius: 5px;
  -moz-border-bottom-left-radius: 5px;
  -o-border-bottom-left-radius: 5px;

  border-bottom-right-radius: 5px;
  -webkit-border-bottom-right-radius: 5px;
  -moz-border-bottom-right-radius: 5px;
  -o-border-bottom-right-radius: 5px;

  :active {
      border-width: 0px 1px 1px 1px;
      border-color: rgb(133, 133, 133);
      border-style: inset ;
  }
`;
export const LeftArrow = styled(CrossButton)`
  top: 30px;
  left: 0;
  z-index: 1;

  border-top-left-radius: 5px;
  -webkit-border-top-left-radius: 5px;
  -moz-border-top-left-radius: 5px;
  -o-border-top-left-radius: 5px;

  border-bottom-left-radius: 5px;
  -webkit-border-bottom-left-radius: 5px;
  -moz-border-bottom-left-radius: 5px;
  -o-border-bottom-left-radius: 5px;

  :active {
      border-width: 1px 0px 1px 1px;
      border-color: rgb(133, 133, 133);
      border-style: inset ;
  }
`;

export const CrossMidCircle = styled.div`
  width: 20px;
  height: 20px;

  position: absolute;
  top: 5px;
  left: 4px;

  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -o-border-radius: 30px;

  background: radial-gradient(#111, #222);
  background: -webkit-radial-gradient(#111, #222);
  background: -moz-radial-gradient(#111, #222);
  background: -o-radial-gradient(#111, #222);
`;

export const CrossTriangle = styled.div`
  width: 0;
  height: 0;

  position: absolute;
`;

export const UpTriangle = styled(CrossTriangle)`
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #111;

  top: 5px;
  left: 4px;
`;
export const RightTriangle = styled(CrossTriangle)`
  border-top: 10px solid transparent;
  border-left: 10px solid #111;
  border-bottom: 10px solid transparent;

  top: 5px;
  right: 5px;
`;
export const DownTriangle = styled(CrossTriangle)`
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #111;

  bottom: 5px;
  left: 4px;
`;
export const LeftfTriangle = styled(CrossTriangle)`
  border-top: 10px solid transparent;
  border-right: 10px solid #111;
  border-bottom: 10px solid transparent;

  top: 5px;
  left: 4px;
`;

///RIGHT SIDE CONTENT

export const StatsScreen = styled.div`
  height: 130px;
  width: 280px;
  padding: 10px;
  background-color: #30da0c;
  z-index: 1;
  font-size: 18px;
  font-family: "VT323", monospace;
  overflow-y: auto;

  position: absolute;
  top: 130px;
  left: 25px;

  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -o-border-radius: 15px;

  box-shadow: 0 0 20px #003300 inset;
  -webkit-box-shadow: 0 0 20px #003300 inset;
  -moz-box-shadow: 0 0 20px #003300 inset;
  -o-box-shadow: 0 0 20px #003300 inset;
`;

export const BlueButtonsContainer1 = styled.div`
  z-index: 1;

  display: flex;
  justify-content: space-evenly;
  position: absolute;
  flex-wrap: wrap;
  top: 280px;
  left: 20px;
  width: 295px;
`;

export const BlueButton = styled.button`
  cursor: pointer;
  height: 35px;
  width: 31%;
  background-color: #003300;
  margin: 3px;
  font-size: x-small;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  /* float: left; */
  /* margin-right: 7px; */

  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;

  background: linear-gradient(top, #307bfb 0%, #0530e5 80%);
  background: -webkit-linear-gradient(top, #307bfb 0%, #0530e5 80%);
  background: -moz-linear-gradient(top, #307bfb 0%, #0530e5 80%);
  background: -o-linear-gradient(top, #307bfb 0%, #0530e5 80%);

  box-shadow: -1px 2px #001c91;
  -webkit-box-shadow: -1px 2px #001c91;
  -moz-box-shadow: -1px 2px #001c91;
  -o-box-shadow: -1px 2px #001c91;

  :active {
      border: 1px solid rgb(133, 133, 133);
      border-style: inset ;
  }
`;

export const MiniButtonRight = styled.div`
  width: 15px;
  height: 15px;
  float: left;
  z-index: 1;

  position: absolute;

  box-shadow: 0 0 10px #490000;
  -webkit-box-shadow: 0 0 10px #490000;
  -moz-box-shadow: 0 0 10px #490000;
  -o-box-shadow: 0 0 10px #490000;

  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -o-border-radius: 20px;
`;
export const MiniButtonOrange = styled(MiniButtonRight)`
  top: 383px;
  left: 25px;

  background: radial-gradient(#ff9b5b, #fb6505);
  background: -webkit-radial-gradient(#ff9b5b, #fb6505);
  background: -moz-radial-gradient(#ff9b5b, #fb6505);
  background: -o-radial-gradient(#ff9b5b, #fb6505);
`;
export const MiniButtonDarkGreen = styled(MiniButtonRight)`
  top: 383px;
  left: 51px;

  background: radial-gradient(#0abd0a, #057b05);
  background: -webkit-radial-gradient(#0abd0a, #057b05);
  background: -moz-radial-gradient(#0abd0a, #057b05);
  background: -o-radial-gradient(#0abd0a, #057b05);
`;

export const BarButtonRightSide = styled.div`
  height: 13px;
  width: 50px;
  z-index: 1;

  position: absolute;
  top: 385px;
  left: 210px;

  border-radius: 100px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  -o-border-radius: 100px;

  background: linear-gradient(top, #50fb05 0%, #057b05 100%);
  background: -webkit-linear-gradient(top, #50fb05 0%, #057b05 100%);
  background: -moz-linear-gradient(top, #50fb05 0%, #057b05 100%);
  background: -o-linear-gradient(top, #50fb05 0%, #057b05 100%);

  box-shadow: -1px 2px #004200;
  -webkit-box-shadow: -1px 2px #004200;
  -moz-box-shadow: -1px 2px #004200;
  -o-box-shadow: -1px 2px #004200;
`;

export const YellowBox1 = styled.div`
  width: 140px;
  height: 70px;
  z-index: 1;
  background-color: #ffff00;

  position: absolute;
  top: 415px;
  left: 25px;

  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -o-border-radius: 15px;

  box-shadow: 0 0 20px #ff6600 inset;
  -webkit-box-shadow: 0 0 20px #ff6600 inset;
  -moz-box-shadow: 0 0 20px #ff6600 inset;
  -o-box-shadow: 0 0 20px #ff6600 inset;
`;

export const YellowBox2 = styled.div`
  width: 140px;
  height: 70px;
  z-index: 1;
  background-color: #ffff00;

  position: absolute;
  top: 415px;
  left: 170px;

  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -o-border-radius: 15px;

  box-shadow: 0 0 20px #ff6600 inset;
  -webkit-box-shadow: 0 0 20px #ff6600 inset;
  -moz-box-shadow: 0 0 20px #ff6600 inset;
  -o-box-shadow: 0 0 20px #ff6600 inset;
`;

export const BgCurve1Right = styled.div`
  width: 350px;
  height: 80px;
  background-color: #fff;

  border-top-right-radius: 30px;
  -webkit-border-top-right-radius: 30px;
  -moz-border-top-right-radius: 30px;
  -o-border-top-right-radius: 30px;
`;

export const BgCurve2Right = styled.div`
  width: 350px;
  height: 420px;
  background-color: #c00d0d;

  border-bottom-right-radius: 30px;
  -webkit-border-bottom-right-radius: 30px;
  -moz-border-bottom-right-radius: 30px;
  -o-border-bottom-right-radius: 30px;

  box-shadow: -10px 9px #5e0000;
  -webkit-box-shadow: -10px 9px #5e0000;
  -moz-box-shadow: -10px 9px #5e0000;
  -o-box-shadow: -10px 9px #5e0000;
`;

export const Curve1Right = styled.div`
  width: 166px;
  height: 451px;
  background-color: #c00d0d;
  float: right;

  position: absolute;
  bottom: 0;
  left: 0;

  border-top-right-radius: 85px 60px;
  -webkit-border-right-left-radius: 85px 60px;
  -moz-border-right-left-radius: 85px 60px;
  -o-border-right-left-radius: 85px 60px;
`;

export const Curve2Right = styled.div`
  width: 216px;
  height: 100px;
  background-color: #fff;
  float: left;

  position: absolute;
  top: 0;
  right: 0;

  border-bottom-left-radius: 85px 60px;
  -webkit-border-bottom-left-radius: 85px 60px;
  -moz-border-bottom-left-radius: 85px 60px;
  -o-border-bottom-left-radius: 85px 60px;
`;
