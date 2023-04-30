import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { UserWrapper, SearcList, UserList, Arrow } from "./UserMenu.js";
import Image from "next/image.js";
import  Minicart  from "../Minicart/Minicart.jsx";
import { UserLinks } from "../../../constants/index.js";
import Link from "next/link.js";

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
      </SearcList>
      <div onClick={handleToggleUserList}>
        <Image
          src="/user.jpg"
          alt="user photo"
          width={36}
          height={36}
          priority={true}
        />
      </div>
      <Minicart handleToggleCart={handleToggleCart} isOpenCart={isOpenCart} />
      <UserList isOpenUserList={isOpenUserList}>
        <Arrow />
        {UserLinks &&
          UserLinks.map(({ name, id, path }) => {
            return (
              <li key={id}>
                <Link href={path}>{name}</Link>
              </li>
            );
          })}
      </UserList>
    </UserWrapper>
  );
};
export default UserMenu;
