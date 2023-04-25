import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { UserWrapper, SearcList } from "./UserMenu.js";

import Image from "next/image.js";
import { Minicart } from "../Minicart/Minicart.jsx";
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
      <Minicart handleToggleCart={handleToggleCart} isOpenCart={isOpenCart} />
    </UserWrapper>
  );
};
export default UserMenu;
