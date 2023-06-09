import { Field, Form } from "formik";
import styled from "@emotion/styled";

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const InputWrapper = styled.div`
  display: flex;

  flex-direction: column;
  margin: 12px;
`;
const Input = styled(Field)`
  width: 278px;

  height: 50px;
  border: ${(props) => `1px solid ${props.theme.colors.secondaryText}`};
  border-radius: 4px;
  background-color: transparent;
  padding-left: 15px;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  @media screen and (min-width: 500px) {
    width: 450px;
  }
`;
const Textarea = styled(Field)`
  max-width: 925px;
  width: 100%;
  height: 270px;
  border: ${(props) => `1px solid ${props.theme.colors.secondaryText}`};
  border-radius: 4px;
  background-color: transparent;
  padding: 15px;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  margin-bottom: 16px;
`;
const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 210%;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  margin-bottom: 6px;
  span {
    color: #c94d3f;
  }
`;

export { FormContainer, Label, Textarea, Input, InputWrapper, FlexWrapper };
