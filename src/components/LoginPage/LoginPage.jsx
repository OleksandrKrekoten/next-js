
import { Container } from "../Container";
import LoginForm from "../LoginForm/LoginForm.jsx";
import {
  Title,
  LoginWrapper,
  SubTitle,
  SubText,
  LoginDescriptionWrapper,
  LoginDescriptionTitle,
  LoginDescriptionText,
  LinkToRegister,
} from "./LoginPage.js";
const LoginPage = () => {
  return (
    <Container>
      <section>
        <Title>Customer Login</Title>
        <LoginWrapper>
          <div>
            <SubTitle>Registered Customers</SubTitle>
            <SubText>
              If you have an account, sign in with your email address.
            </SubText>
            <LoginForm />
          </div>
          <LoginDescriptionWrapper>
            <LoginDescriptionTitle>New Customer?</LoginDescriptionTitle>
            <LoginDescriptionText>
              Creating an account has many benefits:
            </LoginDescriptionText>
            <ul style={{ listStyle: "inside" }}>
              <li>Check out faster</li>
              <li>Keep more than one address</li>
              <li>Track orders and more</li>
            </ul>
            <LinkToRegister href="/registration">
              Create An Account
            </LinkToRegister>
          </LoginDescriptionWrapper>
        </LoginWrapper>
      </section>
    </Container>
  );
};

export default LoginPage;
