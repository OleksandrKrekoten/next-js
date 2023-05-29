import { schema, initialValues } from "../../models/contactFormModel.js";
import { Formik } from "formik";
import {
  FormContainer,
  Input,
  InputWrapper,
  Textarea,
  Label,
  FlexWrapper,
} from "./ContactForm.js";
import Button from "../Button/Button.jsx";
import ErrorMessageField from "../ErrorMessageField/ErrorMessageField.jsx";

const ContactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      <FormContainer>
        <FlexWrapper>
          <InputWrapper>
            <Label htmlFor="name">
              Your Name <span>*</span>
            </Label>
            <Input name="name" type="text" placeholder="Your Name" />
            <ErrorMessageField name="name" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">
              Your Email <span>*</span>
            </Label>
            <Input name="email" type="email" placeholder="Your Email" />
            <ErrorMessageField name="email" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="phone">Your Phone Number</Label>
            <Input name="phone" type="text" placeholder="Your Phone" />
            <ErrorMessageField name="phone" />
          </InputWrapper>
        </FlexWrapper>
        <InputWrapper>
          <Label htmlFor="message">
            What’s on your mind? <span>*</span>
          </Label>
          <Textarea
            name="message"
            as="textarea"
            placeholder="Jot us a note and we’ll get back to you as quickly as possible"
          />
          <ErrorMessageField name="message" />
        </InputWrapper>
        <Button type="submit">Submit</Button>
      </FormContainer>
    </Formik>
  );
};
export default ContactForm;
