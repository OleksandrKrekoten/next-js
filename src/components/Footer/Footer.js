import styled from "@emotion/styled";

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  padding: 40px 0;
  color: #fff;
`;
const FooterBackground = styled.div`
  background-color: #020202;
`;

const FooterPaymentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #fff;
  padding: 10px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 132.5%;
    color: #ffffff;

    opacity: 0.6;
  }
`;

export { FooterPaymentInfo, FooterBackground, FooterWrapper };
