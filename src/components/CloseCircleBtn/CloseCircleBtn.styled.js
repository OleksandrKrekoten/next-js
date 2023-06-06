import styled from "@emotion/styled";
const CloseBtn = styled.button`
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  font-size: 20px;
  padding: 10px;
  background-color: transparent;
  transition: color ease-out 400ms;
  :hover,
  :focus {
    color: ${(props) => ` ${props.theme.colors.accent}`};
  }
`;
export { CloseBtn };