import styled from "@emotion/styled";
export const HeaderWrapper = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding:  10px;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
  @media screen and (min-width: 1350px) {
    padding:  35px;
  }
`;
export const MobileMenuBtn = styled.button`
  color: #000;
  font-size: 30px;
  margin-left: 20px;
  transition: color ease-out 400ms;
  :hover,
  :focus {
    color: #0156ff;
  }
  @media screen and (min-width: 860px) {
    display: none;
  }
`;
