import styled from "@emotion/styled";
import { Field, Form } from "formik";
const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
const Input = styled(Field)`
  width: 90%;
  height: 50px;
  background: transparent;
  border: ${(props) => ` 2px solid  ${props.theme.colors.primaryBackground}`};
  border-radius: 4px;
  padding-left: 10px;

  transition: background-color ease-out 400ms;
  :focus {
    background-color: ${(props) => ` ${props.theme.colors.accent}`};
    color: ${(props) => ` ${props.theme.colors.textWhite}`};
  }
  @media screen and (min-width: 500px) {
    width: 390px;
  }
`;
export { Input, FormWrapper };