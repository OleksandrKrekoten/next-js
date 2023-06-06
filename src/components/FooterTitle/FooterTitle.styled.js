import styled from "@emotion/styled";
const Title = styled.h2`
  font-weight: 500;
  font-size: 38px;
  color: ${(props) => ` ${props.theme.colors.textWhite}`};
  margin-bottom: 10px;
`;
const FooterSubtitle = styled.p`
  font-weight: 300;
  font-size: ${(props) => ` ${props.theme.fontSize.mediumText}`};
  line-height: 1.3;
  color: ${(props) => ` ${props.theme.colors.textWhite}`};
`;
export { Title, FooterSubtitle };