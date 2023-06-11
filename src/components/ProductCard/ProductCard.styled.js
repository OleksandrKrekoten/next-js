import styled from "@emotion/styled";
const Card = styled.li`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 234px;
  border: ${(props) => `1px solid ${props.theme.colors.secondaryText}`};
  padding: 25px;
`;
const CardTitle = styled.h2`
  font-weight: 400;
  font-size: ${(props) => `${props.theme.fontSize.small}`};
  margin: 10px 0;
`;
const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
`;
export { Card, CardTitle, Price };