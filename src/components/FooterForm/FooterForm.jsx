import { Formik } from "formik";
import Button from "../Button/Button.jsx";
import { Input, FormWrapper } from "./FooterForm.js";
const FooterForm = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <FormWrapper>
        <Input name="email" type="email" placeholder="Your Email" />
        <Button type="submit">Subscribe</Button>
      </FormWrapper>
    </Formik>
  );
};
export default FooterForm;
