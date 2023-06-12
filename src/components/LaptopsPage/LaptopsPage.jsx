import { useEffect, useState } from "react";
import Title from "../Title/Title.jsx";
import { Container } from "../Container";
import ProductList from "../ProductList/ProductList.jsx";
import api from "@/utils/api.js";
const LaptopsPage = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      (async () => {
        try {
          const response = await api.get("/laptops");
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      })();
    }, []);
   
  return (
    <Container>
      <section>
        <Title>Laptops</Title>
        <ProductList posts={data} />
      </section>
    </Container>
  );
};
export default LaptopsPage;
