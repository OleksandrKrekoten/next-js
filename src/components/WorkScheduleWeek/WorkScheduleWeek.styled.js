import styled from "@emotion/styled";
const Title = styled.h2`
  font-weight: 400;
  font-size: ${(props) => ` ${props.theme.fontSize.small}`};
 
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
`;
const Text = styled.p`
  font-weight: 600;
  font-size: ${(props) => ` ${props.theme.fontSize.text}`};
  color: #a2a6b0;
  span {
    color: ${(props) => ` ${props.theme.colors.textBlack}`};
  }
`;
const ScheduleWrapper = styled.div`
  :not(:last-child) {
    display: flex;
    padding: 10px 0;
    border-bottom: ${(props) => `1px solid ${props.theme.colors.secondaryText}`};
  }
`;
const Icon = styled.div`
  font-size: 35px;
  margin-right: 10px;
  color: ${(props) => ` ${props.theme.colors.accent}`};
`;
export { Title, Text, ScheduleWrapper, Icon };