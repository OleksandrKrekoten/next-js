import Image from "next/image.js";
import ContactPanel from "./ContactPanel/ContactPanel.jsx";
import { HeaderWrapper } from "./header.js";
import UserMenu from "./UserMenu/UserMenu.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import { useState } from "react";
import Link from "next/link.js";
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
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={85}
            height={70}
            priority={true}
          />
        </Link>
        <Navigation />
        <UserMenu handleToggleCart={handleToggleCart} isOpenCart={isOpenCart} />
      </HeaderWrapper>
    </header>
  );
};
export default Header;
