import Title from "../Title/Title.jsx";
import { Container } from "../Container";
import ProductList from "../ProductList/ProductList.jsx";

const LaptopsPage = ({ product }) => {
 console.log(product);

  return (
    <Container>
      <section>
        <Title>Laptops</Title>
        <ProductList posts={product} />
      </section>
    </Container>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch("/api/product/laptops");
    const data = await res.json();

    return {
      props: {
       product: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default LaptopsPage;
