import {
  FooterBackground,
  FooterWrapper,
  FooterPaymentInfo,
} from "./Footer.styled.js";
import { Container } from "../Container.js";
import SocialNetworksList from "../SocialNetworksList/SocialNetworksList.jsx";
import FooterForm from "../FooterForm/FooterForm.jsx";
import FooterTitle from "../FooterTitle/FooterTitle.jsx";
import PaymentList from "../PaymentList/PaymentList.jsx";
const Footer = () => {
  return (
    <footer>
      <FooterBackground>
        <Container>
          <FooterWrapper>
            <FooterTitle />
            <FooterForm />
          </FooterWrapper>
          <FooterPaymentInfo>
            <SocialNetworksList />
            <PaymentList />
            <p>Copyright © 2020 Shop Pty. Ltd.</p>
          </FooterPaymentInfo>
        </Container>
      </FooterBackground>
    </footer>
  );
};
export default Footer;
