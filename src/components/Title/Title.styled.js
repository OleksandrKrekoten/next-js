import styled from "@emotion/styled"

const TitleStyled = styled.h2`
  font-weight: 600;
  font-size:20px;
  line-height: 48px;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  @media screen and (min-width: 768px) {
    font-size: ${(props) => ` ${props.theme.fontSize.largeTitle}`};
  }
`;
export {
    TitleStyled
}