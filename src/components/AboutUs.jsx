import { Container } from "./Container";
import Title from "./Title/Title.jsx";
import AboutUsList from "./AboutUsList/AboutUsList";
const AboutUs = () => {
  return (
    <Container>
      <section>
        <Title>About Us</Title>
        <AboutUsList />
      </section>
    </Container>
  );
};

export default AboutUs;
