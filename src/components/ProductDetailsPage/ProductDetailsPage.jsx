import Button from "../Button/Button";
import { Container } from "../Container";
import ProductDetailsDescription from "../ProductDetailsDescription/ProductDetailsDescription";
import ProductDetailsSlider from "../ProductDetailsSlider/ProductDetailsSlider";
import Title from "../Title/Title";
import {
  Wrapper,
  SliderWrapper,
  YellowBtn,
  FlexWrapper,
} from "./ProductDetailsPage.styled";
const ProductDetailsPage = ({ post }) => {

  return (
    <Container>
      <FlexWrapper>
        <Title>{post.brand + " " + post.model}</Title>
        <FlexWrapper>
          <Button>Add to Cart</Button>
          <YellowBtn>Add to Wish List</YellowBtn>
        </FlexWrapper>
      </FlexWrapper>
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
