import styled from "@emotion/styled";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 25px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const SliderWrapper = styled.div`
width: 100%;
overflow: hidden;
@media screen and (min-width: 768px) {
    width: 40%;
  }
`
export { Wrapper, SliderWrapper };