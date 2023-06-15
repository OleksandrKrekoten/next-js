import Image from "next/image";
import { Card, CardTitle,Price } from "./ProductCard.styled.js";

const ProductCard = ({ post }) => {
  return (
    <Card>
      <Image src={post.photo[0]} alt="product photo" width={150} height={140} />
      <CardTitle>{post.brand + " " + post.model}</CardTitle>
      <Price>{post.price}</Price>
    </Card>
  );
};
export default ProductCard;