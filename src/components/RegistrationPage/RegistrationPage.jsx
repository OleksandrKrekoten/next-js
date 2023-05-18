import RegistrationForm from "../RegistrationForm/RegistrationForm.jsx"
import { Container } from "../Container";
import {SubText,SubTitle,Title} from "./RegistrationPage.js"
Container;
const RegistrationPage = () => {
  return (
    <Container>
      <section>
        <Title>Customer Registration</Title>
        <div>
          <div>
            <SubTitle>Create an account</SubTitle>
            <SubText>
              If you don't have an account, create one using your email address.
            </SubText>
            <RegistrationForm />
          </div>
          <div></div>
        </div>
      </section>
    </Container>
  );
};
export default RegistrationPage;
