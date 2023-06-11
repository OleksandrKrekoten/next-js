import Image from "next/image";
import { Card, CardTitle,Price } from "./ProductCard.styled.js";

const ProductCard = () => {
    return (
      <Card>
        <Image
          src="/cart/cart1.jpg"
          alt="product photo"
          width={150}
          height={150}
        />
        <CardTitle>
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
        </CardTitle>
        <Price>$499.00</Price>
      </Card>
    );
}
export default ProductCard;