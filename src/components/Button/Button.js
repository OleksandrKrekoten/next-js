import styled from "@emotion/styled";

const BlueBtn = styled.button`
  display: block;
  max-width: 250px;
  max-height: 50px;
  background: #0156ff;
  border-radius: 100px;
  padding: 15px 30px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  outline: 2px solid #0156ff;
  outline-offset: 2px;
  transition: outline-offset 200ms ease-out; /* Додано transition для плавного переходу */
  :hover,
  :focus {
    outline-offset: 6px;
  }
`;
export { BlueBtn };