import styled from "@emotion/styled";
const CustomArrowNext = styled.div`
  position: absolute;
  display: none;
  z-index: 999;
  top: 40%;
  right: 1%;
  color: #fff;
  font-size: 50px;
  transition: color 400ms;
  :hover {
    color: #0156ff;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export { CustomArrowNext };
