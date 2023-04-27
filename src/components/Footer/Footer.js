import styled from "@emotion/styled";
import { Field } from "formik";
export const PageFooter = styled.footer`
  background-color: #000;
`;

export const FooterSuport = styled.div`
background-color: #fff;
color: #000;
`
export const SuportList = styled.ul`
display:flex;
align-items: center;
justify-content: center;
padding: 40px 0;
`
export const SuportItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 265px;
  :not(:last-child) {
    margin-right: 130px;
  }
  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 132.5%;
  }
  p {
    font-size: 14px;
    line-height: 140%;
    opacity: 0.7;
  }
`;
export const SuportIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  background-color: #0156ff;
  border-radius: 50%;
  font-size: 30px;
  margin-bottom:24px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  color: #fff;
`;
export const FooterTitle = styled.h2`
  font-weight: 500;
  font-size: 38px;
  line-height: 1.3;
  color: #ffffff;
  margin-bottom: 10px;
  
`;
export const FooterSubtitle = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 1.3;
  color: #ffffff;
`;
export const Input = styled(Field)`
  width: 390px;
  height: 50px;
  background: #000000;
  border: 2px solid #ffffff;
  border-radius: 4px;
  padding-left: 10px;
  transition: background-color ease-out 400ms;
  :focus {
    background-color: #0156ff;
    color: #ffffff;
  }
`;
export const SubmitBtn = styled.button`
  background: #0156ff;
  border-radius: 50px;
  padding: 10px;
  width: 150px;
  height: 50px;

  text-align: center;
  color: #fff;
  border: none;
  margin-left: 25px;
`;
export const FooterPaymentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 132.5%;
    color: #ffffff;

    opacity: 0.6;
  }
`;
export const SocialLink = styled.ul`
  display: flex;
  font-size: 22px;
  color: #fff;
`;
export const PaymentList = styled.ul`
display: flex;
`