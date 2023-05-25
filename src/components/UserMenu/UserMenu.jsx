import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import {
  UserWrapper,
  SearcList,
} from "./UserMenu.js";
import Image from "next/image.js";
import Minicart from "../Minicart/Minicart.jsx";
import UserMenuNavigation from "../UserMenuNavigation/UserMenuNavigation.jsx";

const UserMenu = ({
  isOpenCart,
  handleToggleCart,
  isOpenUserList,
  handleToggleUserList,
  handleToggleSearchBar,
  isOpenSearchBar,
}) => {
  return (
    <UserWrapper>
      <SearcList>
        <li>
          <button onClick={handleToggleSearchBar}>
            {isOpenSearchBar ? <AiFillCloseCircle /> : <FiSearch />}
          </button>
        </li>
        <li>
          <button onClick={handleToggleCart}>
            <FiShoppingCart />
          </button>
        </li>
        <li>
          <button onClick={handleToggleUserList}>
            <Image src="/user.jpg" alt="user photo" width={36} height={36} />
          </button>
        </li>
      </SearcList>
      <Minicart handleToggleCart={handleToggleCart} isOpenCart={isOpenCart} />
      <UserMenuNavigation
        handleToggleUserList={handleToggleUserList}
        isOpenUserList={isOpenUserList}
      />
    </UserWrapper>
  );
};
export default UserMenu;
