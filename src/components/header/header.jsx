import Image from "next/image.js";
import ContactPanel from "./contactPanel/contactPanel.jsx";
import { HeaderWrapper } from "./header.js";
import UserMenu from "./UserMenu/UserMenu.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import { useState } from "react";
const Header = () => {
  const [isOpenSchedule, setIsOpenSchedule] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleToggleSchedule = () => {
    if (isOpenCart) {
      setIsOpenCart(false);
    }
    setIsOpenSchedule(!isOpenSchedule);
  };

  const handleToggleCart = () => {
    if (isOpenSchedule) {
         setIsOpenSchedule(false);
     } setIsOpenCart(!isOpenCart);
   };
  return (
    <header>
      <ContactPanel
        handleToggleSchedule={handleToggleSchedule}
        isOpenSchedule={isOpenSchedule}
      />
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
        <UserMenu handleToggleCart={handleToggleCart} isOpenCart={isOpenCart} />
      </HeaderWrapper>
    </header>
  );
};
export default Header;
