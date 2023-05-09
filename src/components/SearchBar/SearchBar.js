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
  border: 1px solid #cacdd8;
  color: #000;
`;

const SubmitBtn = styled.button`
  color: #000;
  font-size: 19px;
  background-color: transparent;
  border: none;
  margin: 0 10px;
  transition: color ease-out 400ms;
  :hover,
  :focus {
    color: #0156ff;
  }
`;
export { SubmitBtn, Input, FormContainer };
