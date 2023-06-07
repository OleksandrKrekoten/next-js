import styled from "@emotion/styled";

const MobileNav = styled.div`
  position: fixed;
  z-index: 999;

  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: ${(props) => ` ${props.theme.colors.primaryBackground}`};
  padding: 50px 30px;

  @media screen and (min-width: 860px) {
    display: none;
  }
  transition: transform 300ms ease-in-out;
  transform: ${({ isOpenMobileMenu }) =>
    isOpenMobileMenu ? "translateX(0)" : "translateX(100%)"};
`;
const MobileNavList = styled.ul`
  li {
    padding: 10px;
    transition: color ease-out 400ms;
    :not(:last-child) {
      margin-bottom: 10px;
      :hover,
      :focus {
        color: #0156ff;
      }
    }
  }
`;

const CloseModalBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  font-size: 30px;
  transition: color ease-out 400ms;
  :hover,
  :focus {
    color: ${(props) => ` ${props.theme.colors.accent}`};
  }
`;
export { CloseModalBtn, MobileNavList, MobileNav };
