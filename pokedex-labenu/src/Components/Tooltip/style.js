import styled from "styled-components";

export const ToolTipContainer = styled.div`
  position: relative;

  ::before,
  ::after {
    position: absolute;
    top: -4rem;
    left: -20%;
    transform: translateX(-50%), translateY(-100%);
    transition: 150ms transform;
  }
  ::before {
    --scale: 0;
    transform-origin: bottom center;
    transform: scale(var(--scale));
    color: white;
    padding: 0 1.5rem;
    content: attr(content);
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    background-color: #333;
    border-radius: 0.3rem;
  }
  :hover::before {
    --scale: 1;
  }
`;
// export const RafaelTooltip = styled.div`
//   ::before,
//   ::after {
//     position: absolute;
//     top: -5rem;
//     left: 4%;
//     transform: translateX(-50%), translateY(-100%);
//     transition: 150ms transform;
//   }
//   ::before {
//     --scale: 0;
//     transform-origin: bottom center;
//     transform: scale(var(--scale));
//     color: white;
//     padding: 0.5rem;
//     content: "Rafa";
//     width: max-content;
//     text-align: center;
//     max-width: 100%;
//     background-color: #333;
//     border-radius: 0.3rem;
//   }
//   :hover::before {
//     --scale: 1;
//   }
// `;
