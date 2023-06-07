import styled from "@emotion/styled";


const SubText = styled.p`
  font-weight: 300;
  font-size: ${(props) => ` ${props.theme.fontSize.text}`};
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
`;
export {   SubText };