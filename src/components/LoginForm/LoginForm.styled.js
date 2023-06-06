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
  font-size: ${(props) => ` ${props.theme.fontSize.small}`};
  line-height: 210%;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  span {
    color: #c94d3f;
  }
`;
const Input = styled(Field)`
  max-width: 580px;
  height: 50px;
  border: ${(props) => ` 1px solid ${props.theme.colors.secondaryText}`};
  border-radius: 4px;
  background-color: transparent;
  padding-left: 15px;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
`;

export { FormContainer, Label, Input };