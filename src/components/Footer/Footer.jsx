import { Formik } from "formik";
import {
  FooterBackground,
  FooterWrapper,
  Input,
  FooterPaymentInfo,
  PaymentList,
  FooterForm,
} from "./Footer.js";
import { paymentMethods } from "../../constants/index.js";
import Image from "next/image.js";
import { Container } from "../Container.js";
import Button from "../Button/Button.jsx";
import SocialNetworksList from "../SocialNetworksList/SocialNetworksList.jsx";
const Footer = () => {
  return (
    <footer>
      <FooterBackground>
        <Container>
          {" "}
          <FooterWrapper>
            <div>
              <h2>Sign Up To Our Newsletter.</h2>
              <p>Be the first to hear about the latest offers.</p>
            </div>
            <div>
              <Formik
                initialValues={{ email: "" }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <FooterForm>
                  <Input name="email" type="email" placeholder="Your Email" />
                  <Button type="submit">Subscribe</Button>
                </FooterForm>
              </Formik>
            </div>
          </FooterWrapper>
          <FooterPaymentInfo>
            <SocialNetworksList />
            <PaymentList>
              {paymentMethods &&
                paymentMethods.map(({ id, icon }) => {
                  return (
                    <li key={id}>
                      <Image src={icon} alt={id} width={34} height={20} />
                    </li>
                  );
                })}
            </PaymentList>
            <p>Copyright © 2020 Shop Pty. Ltd.</p>
          </FooterPaymentInfo>
        </Container>
      </FooterBackground>
    </footer>
  );
};
export default Footer;
