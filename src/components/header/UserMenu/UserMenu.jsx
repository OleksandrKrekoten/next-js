import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { UserWrapper, SearcList, UserList, Arrow } from "./UserMenu.js";
import Image from "next/image.js";
import { Minicart } from "../Minicart/Minicart.jsx";
import { UserLinks } from "../../../constants/index.js";
import Link from "next/link.js";
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
      <UserList>
        <Arrow/>
        {UserLinks &&
          UserLinks.map(({ name, id, path }) => {
            return (
              <li key={id}>
                <Link href={path} >{name}</Link>
              </li>
            );
          })}
      </UserList>
    </UserWrapper>
  );
};
export default UserMenu;
