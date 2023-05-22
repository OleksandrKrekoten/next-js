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
const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
      }}
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
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">
              Your Email <span>*</span>
            </Label>
            <Input name="email" type="email" placeholder="Your Email" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="phone">Your Phone Number</Label>
            <Input name="phone" type="number" placeholder="Your Phone" />
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
        </InputWrapper>
        <Button type="submit">Submit</Button>
      </FormContainer>
    </Formik>
  );
};
export default ContactForm;
