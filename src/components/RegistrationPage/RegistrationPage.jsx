import RegistrationForm from "../RegistrationForm/RegistrationForm.jsx";
import { Container } from "../Container";
import { SubText } from "./RegistrationPage.js";
import Title from "../Title/Title.jsx";
Container;
const RegistrationPage = () => {
  return (
    <Container>
      <section>
        <Title>Customer Registration</Title>
        <div>
          <div>
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
