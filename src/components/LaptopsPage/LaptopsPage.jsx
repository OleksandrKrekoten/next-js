import Title from "../Title/Title.jsx";
import { Container } from "../Container";
import ProductList from "../ProductList/ProductList.jsx";

const LaptopsPage = ({ data }) => {
  return (
    <Container>
      <section>
        <Title>Laptops</Title>
        <ProductList data={data} />
      </section>
    </Container>
  );
};

export default LaptopsPage;
