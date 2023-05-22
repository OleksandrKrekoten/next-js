import { Formik, } from "formik";
import {
  FormContainer,
  Label,
  Input,
  InputWrapper,
  InputContainer,
} from "./RegistrationForm.js";
import Button from "../Button/Button.jsx";
const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
      <FormContainer>
        <InputContainer>
          <InputWrapper>
            <Label htmlFor="email">
              Email <span>*</span>
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">
              Password <span>*</span>
            </Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Your Password"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="firstname">
              First Name <span>*</span>
            </Label>
            <Input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Your First Name"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="lastname">
              Last Name <span>*</span>
            </Label>
            <Input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Your Last Name"
            />
          </InputWrapper>
        </InputContainer>
        <Button type="submit">Create An Account</Button>
      </FormContainer>
    </Formik>
  );
};
export default RegistrationForm;
