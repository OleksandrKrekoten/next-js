import styled from "@emotion/styled";
const ListItem = styled.li`
  display: flex;
  font-size: ${(props) => ` ${props.theme.fontSize.mediumText}`};
  color: ${(props) => `  ${props.theme.colors.accent}`};
  :not(:last-child) {
    margin-bottom: 20px;
  }
  span {
    display: inline-block;
    color: ${(props) => `  ${props.theme.colors.textBlack}`};
    width: 180px;
  }
`;
export { ListItem };