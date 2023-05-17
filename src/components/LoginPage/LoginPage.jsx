import Link from "next/link";
import { Container } from "../Container";
import LoginForm from "../LoginForm/LoginForm.jsx";
import {Title,LoginWrapper} from "./LoginPage.js"
const LoginPage = () => {
  return (
    <Container>
      <section>
        <Title>Customer Login</Title>
        <LoginWrapper>
          <div>
            <h3>Registered Customers</h3>
            <p>If you have an account, sign in with your email address.</p>
            <LoginForm />
          </div>
          <div>
            <h3>New Customer?</h3>
            <p>Creating an account has many benefits:</p>
            <ul style={{ listStyle: "inside" }}>
              <li>Check out faster</li>
              <li>Keep more than one address</li>
              <li>Track orders and more</li>
            </ul>
            <Link href="/registration">Create An Account</Link>
          </div>
        </LoginWrapper>
      </section>
    </Container>
  );
};

export default LoginPage;
