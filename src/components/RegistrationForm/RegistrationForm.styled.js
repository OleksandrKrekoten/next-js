import { Form, Field } from "formik";
import styled from "@emotion/styled";

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 20px 0;
`;

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
  width: 250px;
  height: 50px;
  border: ${(props) => `1px solid ${props.theme.colors.secondaryText}`};
  border-radius: 4px;
  background-color: transparent;
  padding-left: 15px;
  color:${(props) => ` ${props.theme.colors.textBlack}`};
  @media screen and (min-width: 850px) {
    width: 360px;
  }
  @media screen and (min-width: 1200px) {
    width: 580px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
  
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 12px;
`;
export { FormContainer, Label, Input,  InputWrapper, InputContainer };
