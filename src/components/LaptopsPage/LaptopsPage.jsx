import Title from "../Title/Title.jsx";
import { Container } from "../Container";
import ProductList from "../ProductList/ProductList.jsx";

const LaptopsPage = ({ posts }) => {
  return (
    <Container>
      <section>
        <Title>Laptops</Title>
        <ProductList posts={posts} />
      </section>
    </Container>
  );
};

export default LaptopsPage;
