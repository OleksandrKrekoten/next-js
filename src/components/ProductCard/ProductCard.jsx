import Link from "next/link.js";
import {
  Card,
  CardTitle,
  Price,
  ProductImage,
  ImageWrapper,
} from "./ProductCard.styled.js";

const ProductCard = ({ post }) => {
  return (
    <Card>
      <Link href={`/${post.category.toLowerCase()}/${post._id}`}>
        <ImageWrapper>
          <ProductImage
            src={post.photo[3]}
            alt="product photo"
            width={150}
            height={140}
          />
        </ImageWrapper>
        <CardTitle>{post.brand + " " + post.model}</CardTitle>
        <Price>{post.price}</Price>
      </Link>
    </Card>
  );
};
export default ProductCard;
