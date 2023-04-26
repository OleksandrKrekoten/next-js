import {  Field, Form } from "formik";
import styled from "@emotion/styled";

export const FormContainer = styled(Form)`
  width: 100%;

`;
export const Input = styled(Field)`
  width: 80%;
  height: 40px;
  padding-left: 10px;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid #cacdd8;
  color: #000;
 
`;

export const SubmitBtn = styled.button`
  color: #000;
  font-size: 19px;
  background-color: transparent;
  border: none;
  margin-left: 20px;
  transition: color ease-out 400ms;
  :hover,
  :focus {
    color: #0156ff;
  }
`;