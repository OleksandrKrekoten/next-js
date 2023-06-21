import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
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
const YellowBtn = styled.button`
  background: #ffb800;
  display: block;
  max-width: 250px;
  max-height: 50px;
  border-radius: 100px;
  padding: 15px 30px;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  font-weight: 600;
  font-size: ${(props) => ` ${props.theme.fontSize.text}`};
  line-height: 1.5;
  outline:  2px solid #ffb800;
  outline-offset: 2px;
  transition: outline-offset 200ms ease-out;
  :hover,
  :focus {
    outline-offset: 6px;
  }
`;
const FlexWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap:30px
`
export { Wrapper, SliderWrapper, YellowBtn, FlexWrapper };