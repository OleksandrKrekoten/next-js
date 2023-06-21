import styled from "@emotion/styled";
const ListItem = styled.li`
  display: flex;
  font-size: ${(props) => ` ${props.theme.fontSize.mediumText}`};
  color: ${(props) => `  ${props.theme.colors.accent}`};
  :not(:last-child) {
    margin-bottom: 20px;
  }
  :last-child {
    font-weight:600;
    font-size: 32px;
    color: ${(props) => `  ${props.theme.colors.textBlack}`};
    span {
      color: #ffb800;
    }
  }
  span {
    display: inline-block;
    color: ${(props) => `  ${props.theme.colors.textBlack}`};
    width: 180px;
  }
`;
export { ListItem };