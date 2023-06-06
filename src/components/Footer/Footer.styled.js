import styled from "@emotion/styled";

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  padding: 40px 0;
  color: ${(props) => ` ${props.theme.colors.textWhite}`};
`;
const FooterBackground = styled.div`
  background-color: ${(props) => ` ${props.theme.colors.secondaryBackground}`};
`;

const FooterPaymentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: ${(props) => ` ${props.theme.colors.textWhite}`};
  padding: 10px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  p {
    font-weight: 500;
    font-size: ${(props) => ` ${props.theme.fontSize.small}`};
    line-height: 132.5%;
    color: ${(props) => ` ${props.theme.colors.textWhite}`};
    opacity: 0.6;
  }
`;

export { FooterPaymentInfo, FooterBackground, FooterWrapper };
