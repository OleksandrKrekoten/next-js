import Link from "next/link.js";
import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { Container } from "@/components/Container";
import {
    Section,
    Title,
    Description,
  ContactWrapper,
  ContactInformation,
  ContactInformationItem,
  ContactInformationSubTitle,
} from "./ContactUs.js";
const ContactUs = () => {
  return (
    <Container>
      <Section>
        <ContactWrapper>
          <div>
            <Title>Contact Us</Title>
            <Description>
              We love hearing from you, our Shop customers. Please contact us
              and we will make sure to get back to you as soon as we possibly
              can.
            </Description>
            <ContactForm />
          </div>
          <ContactInformation>
            <ul>
              <ContactInformationItem>
                <ContactInformationSubTitle>
                  Address:
                </ContactInformationSubTitle>
                <p>1234 Street Adress City Address, 1234</p>
              </ContactInformationItem>
              <ContactInformationItem>
                <ContactInformationSubTitle>Phone:</ContactInformationSubTitle>
                <p>(00)1234 5678</p>
              </ContactInformationItem>
              <ContactInformationItem>
                <ContactInformationSubTitle>
                  We are open:
                </ContactInformationSubTitle>
                <p>
                  Monday - Thursday: 9:00 AM - 5:30 PM <br /> Friday 9:00 AM -
                  6:00 PM <br />
                  Saturday: 11:00 AM - 5:00 PM
                </p>
              </ContactInformationItem>
              <ContactInformationItem>
                <ContactInformationSubTitle>E-mail:</ContactInformationSubTitle>
                <Link href="mailto:shop@email.com">shop@email.com</Link>
              </ContactInformationItem>
            </ul>
          </ContactInformation>
        </ContactWrapper>
      </Section>
    </Container>
  );
};
export default ContactUs;
