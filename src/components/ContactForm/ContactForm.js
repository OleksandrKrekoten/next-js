import { Field, Form } from "formik";
import styled from "@emotion/styled";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  
`;
export const FlexWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`
export const InputWrapper = styled.div`
  display: flex;

  flex-direction: column;
  margin: 12px;
  
`;
export const Input = styled(Field)`
  width: 278px;

  height: 50px;
  border: 1px solid #a2a6b0;
  border-radius: 4px;
  background-color: transparent;
  padding-left: 15px;
  color: #000;
  @media screen and (min-width: 500px) {
    width: 450px;
  }
`;
export const Textarea = styled(Field)`
max-width: 925px;
  width: 100%;
  height: 270px;
  border: 1px solid #a2a6b0;
  border-radius: 4px;
  background-color: transparent;
  padding: 15px;
  color: #000;
  margin-bottom: 16px;
`;
export const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 210%;
  color: #000000;
  margin-bottom: 6px;
  span {
    color: #c94d3f;
  }
`;
export const SubmitBtn = styled.button`
color: #fff;
  width: 151px;
  height: 50px;
  padding: 10px;
  background: #0156ff;
  border-radius: 50px;
`;