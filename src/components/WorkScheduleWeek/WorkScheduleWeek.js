import styled from "@emotion/styled";
const Title = styled.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #000000;
`;
const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #a2a6b0;
  span {
    color: #000000;
  }
`;
const ScheduleWrapper = styled.div`
  :not(:last-child) {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #cacdd8;
  }
`;
const Icon = styled.div`
  font-size: 35px;
  margin-right: 10px;
  color: #0156ff;
`;
export { Title, Text, ScheduleWrapper, Icon };