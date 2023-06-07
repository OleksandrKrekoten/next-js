import { Field, Form } from "formik";
import styled from "@emotion/styled";

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 10px;
`;
const Input = styled(Field)`
  width: 80%;
  height: 40px;
  padding-left: 10px;
  background-color: transparent;
  border-radius: 12px;
  border: ${(props) => ` 1px solid${props.theme.colors.secondaryText}`};
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
`;

const SubmitBtn = styled.button`
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  font-size: 20px;
  background-color: transparent;
  border: none;
  margin: 0 10px;
  transition: color ease-out 400ms;
  :hover,
  :focus {
    color: ${(props) => ` ${props.theme.colors.accent}`};
  }
`;
export { SubmitBtn, Input, FormContainer };
