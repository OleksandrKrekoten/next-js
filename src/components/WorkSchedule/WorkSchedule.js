import styled from "@emotion/styled";
const OpenScheduleBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #a2a6b0;
  cursor: pointer;
  transition: color ease-out 400ms;
  span {
    color: #fff;
    transition: color ease-out 400ms;
    :focus,
    :hover {
      color: #0156ff;
    }
  }
`;
export { OpenScheduleBtn };