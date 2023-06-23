import styled from "@emotion/styled";

const BlueBtn = styled.button`
  display: block;
  max-width: 250px;
  min-width: 190px;
  max-height: 50px;
  background: ${(props) => ` ${props.theme.colors.accent}`};
  border-radius: 100px;
  padding: 15px 30px;
  color: ${(props) => ` ${props.theme.colors.textWhite}`};
  font-weight: 600;
  font-size: ${(props) => ` ${props.theme.fontSize.text}`};
  line-height: 1.5;
  outline: ${(props) => `2px solid ${props.theme.colors.accent}`};
  outline-offset: 2px;
  transition: outline-offset 200ms ease-out;
  :hover,
  :focus {
    outline-offset: 6px;
  }
`;
export { BlueBtn };