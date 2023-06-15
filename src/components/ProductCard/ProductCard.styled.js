import styled from "@emotion/styled";
const Card = styled.li`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 234px;
  padding: 25px;
  :hover,
  :focus {
    cursor: pointer;
  }
`;
const CardTitle = styled.h2`
  font-weight: 400;
  font-size: ${(props) => `${props.theme.fontSize.small}`};
  margin: 10px 0;
  transition: color 300ms ease-out;
  :hover,
  :focus {
    color: ${(props) => `${props.theme.colors.accent}`};
    text-decoration: underline;
  }
`;
const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
`;
export { Card, CardTitle, Price };