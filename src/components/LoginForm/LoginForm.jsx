import { Formik, } from "formik";
import { FormContainer, Label, Input } from "./LoginForm.js";
import Button from "../Button/Button.jsx"
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
        <Button type="submit">Sign In</Button>
      </FormContainer>
    </Formik>
  );
};
export default LoginForm;
