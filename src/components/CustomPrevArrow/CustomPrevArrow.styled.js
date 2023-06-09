import styled from "@emotion/styled";
const CustomArrowPrev = styled.div`
  position: absolute;
  display: none;
  z-index: 999;
  top: 40%;
  left: 1%;
  color: ${(props) => ` ${props.theme.colors.textWhite}`};
  font-size: 50px;
  transition: color 400ms;
  :hover {
    color: ${(props) => ` ${props.theme.colors.accent}`};
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export { CustomArrowPrev };
