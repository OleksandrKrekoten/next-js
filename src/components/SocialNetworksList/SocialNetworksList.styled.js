import styled from "@emotion/styled";
const SocialLink = styled.ul`
  display: flex;
  font-size: 22px;
  color: ${(props) => ` ${props.theme.colors.textWhite}`};
  li {
    transition: color ease-out 400ms;
    :hover,
    :focus {
      color: ${(props) => ` ${props.theme.colors.accent}`};
    }
  }
`;
export { SocialLink };
