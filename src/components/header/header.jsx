import Image from "next/image.js";
import ContactPanel from "./contactPanel/contactPanel.jsx";
import { HeaderWrapper } from "./header.js";
import UserMenu from "./UserMenu/UserMenu.jsx";
import Navigation from "./Navigation/Navigation.jsx";
const Header = () => {
  return (
    <header>
      <ContactPanel />
      <HeaderWrapper>
        <a href="/">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={85}
            height={70}
            priority={true}
          />
        </a>
        <Navigation />
        <UserMenu />
      </HeaderWrapper>
    </header>
  );
};
export default Header;
