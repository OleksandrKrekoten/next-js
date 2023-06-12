import Image from "next/image";
import { Card, CardTitle,Price } from "./ProductCard.styled.js";

const ProductCard = ({post}) => {
  const {brand,model,photo,price}=post
  return (
    <Card>
      <Image src={photo[0]} alt="product photo" width={150} height={140} />
      <CardTitle>{brand + " " + model}</CardTitle>
      <Price>{price}</Price>
    </Card>
  );
};
export default ProductCard;