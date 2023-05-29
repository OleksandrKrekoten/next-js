import { Formik } from "formik";
import { FormContainer, Label, Input } from "./LoginForm.js";
import Button from "../Button/Button.jsx";
import ErrorMessageField from "../ErrorMessageField/ErrorMessageField.jsx";
import { schema, initialValues } from "../../models/loginFormModel.js";
const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
    >
      <FormContainer>
        <Label htmlFor="email">
          Email <span>*</span>
        </Label>
        <Input type="email" name="email" placeholder="Your Email" />
        <ErrorMessageField name="email" />
        <Label htmlFor="password">
          Password <span>*</span>
        </Label>
        <Input type="password" name="password" placeholder="Your Password" />
        <ErrorMessageField name="password" />
        <Button type="submit">Sign In</Button>
      </FormContainer>
    </Formik>
  );
};
export default LoginForm;
