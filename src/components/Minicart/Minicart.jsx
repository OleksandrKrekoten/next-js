import {
  Cart,
  CartTitle,
  CartSubtitle,
  LinkToCart,
  CartSum,
  LinkToCheckout,
  LinkToPayPal,
  Arrow,
  BtnWrapper,
} from "./Minicart.styled.js";
import { ImPaypal } from "react-icons/im";
import CloseCircleBtn from "../CloseCircleBtn/CloseCircleBtn.jsx";
import MinicartList from "../MinicartList/MinicartList.jsx";
const Minicart = ({ isOpenCart, handleToggleCart }) => {
  return (
    <Cart isOpenCart={isOpenCart}>
      <Arrow />
      <BtnWrapper>
        <CloseCircleBtn type="button" handleClick={handleToggleCart} />
      </BtnWrapper>
      <CartTitle>My Cart</CartTitle>
      <CartSubtitle>2 item in cart</CartSubtitle>
      <LinkToCart href="/">View or Edit Your Cart</LinkToCart>
     <MinicartList/>
      <CartSum>
        Subtotal:<span> $499.00</span>
      </CartSum>
      <div>
        <LinkToCheckout href="/">Go to Checkout</LinkToCheckout>
        <LinkToPayPal href="/">
          Check out with <ImPaypal />
        </LinkToPayPal>
      </div>
    </Cart>
  );
};
export default Minicart;
