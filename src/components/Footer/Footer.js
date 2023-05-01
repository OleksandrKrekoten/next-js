import styled from "@emotion/styled";
import { Field,Form } from "formik";
export const PageFooter = styled.footer`
  background-color: #000;
 
`;

export const FooterSuport = styled.div`
  background-color: #fff;
  color: #000;
  padding:0 10px;
  @media screen and (min-width: 768px) {
    padding:0 20px;
  }
  @media screen and (min-width: 1350px) {
    padding:0 35px;
  }
`;
export const SuportList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const SuportItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 265px;
  }
  :not(:last-child) {
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
      margin-right: 130px;
    }
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
  width: 85px;
  height: 85px;
  background-color: #0156ff;
  border-radius: 50%;
  font-size: 60px;
  margin-bottom:24px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 10px;
  color: #fff;
 
  @media screen and (min-width: 768px) {
    padding:40px 20px;
  }
  @media screen and (min-width: 1350px) {
    padding:40px 35px;
  }
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
export const FooterForm = styled(Form)`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`
export const Input = styled(Field)`
  width: 90%;
  height: 50px;
  background: #000000;
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
export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0156ff;
  border-radius: 50px;
  padding: 10px;
  width: 90%;
  height: 50px;

  text-align: center;
  color: #fff;
  border: none;
  margin-top: 25px;
  @media screen and (min-width: 600px) {
    width: 150px;
   
  }
  @media screen and (min-width: 910px) {
    margin-top: 0;
  }
`;
export const FooterPaymentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #fff;
  padding: 15px 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  
  @media screen and (min-width: 768px) {
    padding:15px 20px;
  }
  @media screen and (min-width: 1350px) {
    padding:15px 35px;
  }
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