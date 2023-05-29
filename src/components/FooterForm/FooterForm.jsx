import { Formik } from "formik";
import * as yup from "yup";
import Button from "../Button/Button.jsx";
import { Input, FormWrapper } from "./FooterForm.js";
import ErrorMessageField from "../ErrorMessageField/ErrorMessageField.jsx";

const FooterForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <FormWrapper>
        <div>
          <Input name="email" type="email" placeholder="Your Email" />
          <ErrorMessageField name="email" />
        </div>
        <Button type="submit">Subscribe</Button>
      </FormWrapper>
    </Formik>
  );
};
export default FooterForm;
