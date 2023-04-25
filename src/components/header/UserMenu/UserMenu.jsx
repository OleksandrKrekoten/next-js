import { FiSearch, FiShoppingCart } from "react-icons/fi";
import {
  UserWrapper,
  SearcList,
  Cart,
  CartTitle,
  CartSubtitle,
  LinkToCart,
  CartList,
  CartItem,
  CartSum,
  LinkToCheckout,
  LinkToPayPal

} from "./UserMenu.js";
import { ImPaypal } from "react-icons/im";
import Image from "next/image.js";
const UserMenu = ({ isOpenCart, handleToggleCart }) => {
  return (
    <UserWrapper>
      <SearcList>
        <li>
          <button>
            <FiSearch />
          </button>
        </li>
        <li>
          <button onClick={handleToggleCart}>
            <FiShoppingCart />
          </button>
        </li>
      </SearcList>
      <div>
        <Image
          src="/user.jpg"
          alt="user photo"
          width={36}
          height={36}
          priority={true}
        />
      </div>
      <Cart isOpenCart={isOpenCart}>
        <CartTitle>My Cart</CartTitle>
        <CartSubtitle>2 item in cart</CartSubtitle>
        <LinkToCart href="/">View or Edit Your Cart</LinkToCart>
        <CartList>
          <CartItem>
            <p>1x</p>
            <Image
              src="/cart/cart1.jpg"
              alt="product photo"
              width={65}
              height={65}
            />
            <h3>
              EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
            </h3>
          </CartItem>
          <CartItem>
            <p>1x</p>
            <Image
              src="/cart/cart2.jpg"
              alt="product photo"
              width={65}
              height={65}
            />
            <h3>
              EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
            </h3>
          </CartItem>
        </CartList>
        <CartSum>
          Subtotal:<span> $499.00</span>
        </CartSum>
        <div>
          {" "}
          <LinkToCheckout href="/">Go to Checkout</LinkToCheckout>
          <LinkToPayPal href="/">
            Check out with <ImPaypal />
          </LinkToPayPal>
        </div>
      </Cart>
    </UserWrapper>
  );
};
export default UserMenu;
