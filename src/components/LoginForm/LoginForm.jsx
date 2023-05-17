import { Formik, } from "formik";
import { FormContainer, Label, Input, SubmitBtn } from "./LoginForm.js";
const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
      <FormContainer>
        <Label htmlFor="email">
          Email <span>*</span>
        </Label>
        <Input type="email" name="email" placeholder="Your Email" />
        <Label htmlFor="password">
          Password <span>*</span>
        </Label>
        <Input type="password" name="password" placeholder="Your Password" />
        <SubmitBtn type="submit">Sign In</SubmitBtn>
      </FormContainer>
    </Formik>
  );
};
export default LoginForm;
