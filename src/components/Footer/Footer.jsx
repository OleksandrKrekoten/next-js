import { Formik, Form } from "formik";
import {
  PageFooter,
  FooterWrapper,
  Input,
  SubmitBtn,
  FooterSuport,
  SuportList,
  SuportIcon,
  SuportItem,
  FooterPaymentInfo,
  SocialLink,
  PaymentList,
} from "./Footer.js";
import { suportContent, paymentMethods } from "../../constants/index.js";
import {
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
import Link from "next/link.js";
import Image from "next/image.js";
const Footer = () => {
  return (
    <PageFooter>
      <FooterSuport>
        <SuportList>
          {suportContent &&
            suportContent.map(({ id, title, description, icon }) => {
              return (
                <SuportItem key={id}>
                  <SuportIcon>{icon}</SuportIcon>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </SuportItem>
              );
            })}
        </SuportList>
      </FooterSuport>
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
            <Form>
              <Input name="email" type="email" placeholder="Your Email" />
              <SubmitBtn type="submit">Subscribe</SubmitBtn>
            </Form>
          </Formik>
        </div>
      </FooterWrapper>
      <FooterPaymentInfo>
        <SocialLink>
          <li>
            <Link href="/">
              <TiSocialFacebookCircular />
            </Link>
          </li>
          <li>
            <Link href="/">
              <TiSocialInstagramCircular />
            </Link>
          </li>
        </SocialLink>
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
    </PageFooter>
  );
};
export default Footer;
