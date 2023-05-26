import styled from "@emotion/styled";
import { Field, Form } from "formik";


const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 0;
  color: #fff;
`;
const FooterBackground = styled.div`
  background-color: #020202;
`;
const FooterTitle = styled.h2`
  font-weight: 500;
  font-size: 38px;
  line-height: 1.3;
  color: #ffffff;
  margin-bottom: 10px;
`;
const FooterSubtitle = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 1.3;
  color: #ffffff;
`;
const FooterForm = styled(Form)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Input = styled(Field)`
  width: 90%;
  height: 50px;
  background: transparent;
  border: 2px solid #ffffff;
  border-radius: 4px;
  padding-left: 10px;
  margin-top: 25px;
  transition: background-color ease-out 400ms;
  :focus {
    background-color: #0156ff;
    color: #ffffff;
  }
  @media screen and (min-width: 500px) {
    width: 390px;

    margin-right: 20px;
  }
  @media screen and (min-width: 910px) {
    margin-top: 0;
  }
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

const PaymentList = styled.ul`
  display: flex;
`;
export {
  PaymentList,
  FooterPaymentInfo,
  Input,
  FooterForm,
  FooterSubtitle,
  FooterTitle,
  FooterBackground,
  FooterWrapper
};
