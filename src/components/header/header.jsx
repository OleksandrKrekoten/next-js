import Image from "next/image.js";
import ContactPanel from "./contactPanel/contactPanel.jsx";
import { HeaderWrapper } from "./header.js";
import { navLinks } from "../../constants/index.js";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
const Header = () => {
  return (
    <header>
      <ContactPanel />
      <HeaderWrapper>
        <a href="/">
          <Image src="/Logo.svg" alt="Logo" width={85} height={70} />
        </a>
        <nav>
          <ul>
            {navLinks &&
              navLinks.map(({ name, id, path }) => (
                <li key={id}>
                  <a href={`/${path}`}>{name}</a>
                </li>
              ))}
          </ul>
        </nav>
      </HeaderWrapper>
    </header>
  );
};
export default Header;
