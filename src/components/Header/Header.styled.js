import styled from "@emotion/styled";

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => ` ${props.theme.colors.primaryBackground}`};
  padding: 10px 0;
`;
const MobileMenuBtn = styled.button`
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  font-size: 30px;
  margin-left: 20px;
  transition: color ease-out 400ms;
  :hover,
  :focus {
    color: ${(props) => ` ${props.theme.colors.accent}`};
  }
  @media screen and (min-width: 860px) {
    display: none;
  }
`;
export { MobileMenuBtn, HeaderWrapper };
