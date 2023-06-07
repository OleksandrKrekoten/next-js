import styled from "@emotion/styled";

const NavList = styled.ul`
  display: none;

  align-items: center;
  margin: 0 10px;
  @media screen and (min-width: 860px) {
    display: flex;
  }
  li {
    color: #000;
    font-weight: 600;
    font-size: ${(props) => ` ${props.theme.fontSize.text}`};
    transition: color ease-out 400ms, border-color ease-out 400ms;
    :not(:last-child) {
      margin-right: 15px;
      :focus,
      :hover {
        color: ${(props) => ` ${props.theme.colors.accent}`};
      }
    }
    @media screen and (min-width: 1000px) {
      :not(:last-child) {
        margin-right: 25px;
      }
    }
    :last-child {
      a {
        color: ${(props) => ` ${props.theme.colors.accent}`};
        padding: 8px 16px;
        text-align: center;
        border-radius: 50px;
        outline: ${(props) => `1px solid ${props.theme.colors.accent}`};
        outline-offset: 2px;
        transition: outline-offset 200ms ease-out;
        :hover,
        :focus {
          outline-offset: 6px;
        }
        @media screen and (min-width: 1350px) {
          padding: 8px 26px;
        }
      }
    }
  }
`;
export { NavList };
