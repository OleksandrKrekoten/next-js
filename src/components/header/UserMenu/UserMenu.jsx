import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { UserWrapper, SearcList } from "./UserMenu.js";
import Image from "next/image.js";
const UserMenu = () => {
  return (
    <UserWrapper>
      <SearcList>
        <li>
          <button>
            <FiSearch />
          </button>
        </li>
        <li>
          <button>
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
    </UserWrapper>
  );
};
export default UserMenu