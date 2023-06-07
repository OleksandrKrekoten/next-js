import styled from "@emotion/styled"

const TitleStyled = styled.h2`
  font-weight: 600;
  font-size: ${(props) => ` ${props.theme.fontSize.largeTitle}`};
  line-height: 48px;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
`;
export {
    TitleStyled
}