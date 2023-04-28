import Image from "next/image.js";
import ContactPanel from "./ContactPanel/ContactPanel.jsx";
import { HeaderWrapper } from "./header.js";
import UserMenu from "./UserMenu/UserMenu.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import { useState } from "react";
import Link from "next/link.js";
import SearchBar from "./SearchBar/SearchBar.jsx";
import { Container } from "../Container.js";
import MobileMenu from "./MobileMenu/MobileMenu.jsx";

const Header = () => {
  const [isOpenSchedule, setIsOpenSchedule] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenUserList, setIsOpenUserList] = useState(false);
  const [isOpenSearchBar, setisOpenSearchBar] = useState(false);

  const handleToggleSearchBar = () => {
    if (isOpenSchedule) {
      setIsOpenSchedule(false);
    } else if (isOpenCart) {
      setIsOpenCart(false);
    } else if (isOpenUserList) {
      setIsOpenUserList(false);
    }
    setisOpenSearchBar(!isOpenSearchBar);
  };

  const handleToggleUserList = () => {
    if (isOpenSchedule) {
      setIsOpenSchedule(false);
    } else if (isOpenCart) {
      setIsOpenCart(false);
    } else if (isOpenSearchBar) {
      setisOpenSearchBar(false);
    }
    setIsOpenUserList(!isOpenUserList);
  };

  const handleToggleSchedule = () => {
    if (isOpenCart) {
      setIsOpenCart(false);
    } else if (isOpenUserList) {
      setIsOpenUserList(false);
    } else if (isOpenSearchBar) {
      setisOpenSearchBar(false);
    }
    setIsOpenSchedule(!isOpenSchedule);
  };

  const handleToggleCart = () => {
    if (isOpenSchedule) {
      setIsOpenSchedule(false);
    } else if (isOpenUserList) {
      setIsOpenUserList(false);
    } else if (isOpenSearchBar) {
      setisOpenSearchBar(false);
    }
    setIsOpenCart(!isOpenCart);
  };
  return (
    <Container>
      <header>
        <ContactPanel
          handleToggleSchedule={handleToggleSchedule}
          isOpenSchedule={isOpenSchedule}
        />
        <HeaderWrapper>
          <div>
            {" "}
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="Logo"
                width={34}
                height={40}
                priority={true}
              />
            </Link>
          </div>
          {isOpenSearchBar ? <SearchBar /> : <Navigation />}
          <MobileMenu/>
          <UserMenu
            handleToggleCart={handleToggleCart}
            isOpenCart={isOpenCart}
            handleToggleUserList={handleToggleUserList}
            isOpenUserList={isOpenUserList}
            handleToggleSearchBar={handleToggleSearchBar}
            isOpenSearchBar={isOpenSearchBar}
          />
        </HeaderWrapper>
      </header>
    </Container>
  );
};
export default Header;
