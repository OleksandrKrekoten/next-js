import {  Form, Field } from "formik";
import styled from "@emotion/styled";

const FormContainer = styled(Form)`
display: flex;
flex-direction: column;
width: 100%;
gap: 10px;
padding: 20px 0;
`
const Label = styled.label`
  font-weight: 600;
  font-size: 13px;
  line-height: 210%;
  color: #000000;
  span {
    color: #C94D3F;
  }
`;
const Input = styled(Field)`
max-width: 580px;
  height: 50px;
  border: 1px solid #a2a6b0;
  border-radius: 4px;
  background-color: transparent;
  padding-left: 15px;
  color: #000;
`;

export { FormContainer, Label, Input };