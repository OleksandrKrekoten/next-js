import { MinicartItem } from "../../constants/index.js";
import Image from "next/image.js";
import {CartList,CartItem} from "./MinicartList.js"
const MinicartList = () => {
  return (
    <CartList>
      {MinicartItem.map(({ id, image, name }) => {
        return (
          <CartItem key={id}>
            <p>1x</p>
            <Image src={image} alt="product photo" width={65} height={65} />
            <h3>{name}</h3>
          </CartItem>
        );
      })}
    </CartList>
  );
};
export default MinicartList;
