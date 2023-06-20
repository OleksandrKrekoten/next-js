import { Container } from "../Container";
import ProductDetailsDescription from "../ProductDetailsDescription/ProductDetailsDescription";
import ProductDetailsSlider from "../ProductDetailsSlider/ProductDetailsSlider";
import Title from "../Title/Title";
import { Wrapper, SliderWrapper } from "./ProductDetailsPage.styled";
const ProductDetailsPage = ({ post }) => {

  return (
    <Container>
      <Title>{post.brand +" "+ post.model}</Title>
      <Wrapper>
        <SliderWrapper>
          <ProductDetailsSlider photo={post.photo} />
        </SliderWrapper>
        <div>
          <ProductDetailsDescription post={post} />
        </div>
      </Wrapper>
    </Container>
  );
};
export default ProductDetailsPage;
