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
    font-size: 14px;
    transition: color ease-out 400ms, border-color ease-out 400ms;
    :not(:last-child) {
      margin-right: 15px;
      :focus,
      :hover {
        color: #0156ff;
      }
    }
    @media screen and (min-width: 1000px) {
      :not(:last-child) {
        margin-right: 25px;
      }
    }
    :last-child {
      a {
        color: #0156ff;
        padding: 8px 16px;
        text-align: center;
        border-radius: 50px;
        outline: 2px solid #0156ff;
        outline-offset: 2px;
        transition: outline-offset 200ms ease-out; /* Додано transition для плавного переходу */
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
