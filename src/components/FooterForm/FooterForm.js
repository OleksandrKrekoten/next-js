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
  border: 2px solid #ffffff;
  border-radius: 4px;
  padding-left: 10px;
  
  transition: background-color ease-out 400ms;
  :focus {
    background-color: #0156ff;
    color: #ffffff;
  }
  @media screen and (min-width: 500px) {
    width: 390px;
  }
`;
export { Input, FormWrapper };