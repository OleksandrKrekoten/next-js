import styled from "@emotion/styled";
const Btn = styled.button`
  padding: 12px;
  border-radius: 5px;
  background-color: ${(props) => ` ${props.theme.colors.accent}`};
  color: ${(props) => ` ${props.theme.colors.textWhite}`};
`;
const BtnWrapper = styled.div`
display: flex;
justify-content: center;
gap: 10px;

`
export { Btn, BtnWrapper };