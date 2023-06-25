import Title from "../Title/Title.jsx";
import { Container } from "../Container";
import ProductList from "../ProductList/ProductList.jsx";
import Pagination from "../Pagination/pagination.jsx"
const LaptopsPage = ({ data, page }) => {
  return (
    <Container>
      <section>
        <Title>Laptops</Title>
        <ProductList data={data} />
        <Pagination page={page} totalPages={data.totalPages} />
      </section>
    </Container>
  );
};

export default LaptopsPage;
