import Image from "next/image.js";
import Link from "next/link.js";
import ContactPanel from "../ContactPanel/ContactPanel.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import NavigationCategories from "../NavigationCategories/NavigationCategories.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { HeaderWrapper, MobileMenuBtn } from "./Header.styled.js";
import { useState } from "react";
import { Container } from "../Container.js";
import Portal from "../Portal.jsx";
import { TfiMenu } from "react-icons/tfi";

const Header = () => {
  const [isOpenSchedule, setIsOpenSchedule] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenUserList, setIsOpenUserList] = useState(false);
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
    setIsOpenSchedule(false);
    setIsOpenCart(false);
    setIsOpenUserList(false);
  };
  const handleToggleSearchBar = () => {
    setIsOpenSearchBar(!isOpenSearchBar);
    setIsOpenCart(false);
    setIsOpenSchedule(false);
    setIsOpenUserList(false);
  };

  const handleToggleUserList = () => {
    setIsOpenUserList(!isOpenUserList);
    setIsOpenSchedule(false);
    setIsOpenCart(false);
    setIsOpenSearchBar(false);
  };

  const handleToggleSchedule = () => {
    setIsOpenSearchBar(false);
    setIsOpenCart(false);
    setIsOpenUserList(false);
    setIsOpenSchedule(!isOpenSchedule);
  };

  const handleToggleCart = () => {
    setIsOpenCart(!isOpenCart);
    setIsOpenSchedule(false);
    setIsOpenUserList(false);
    setIsOpenSearchBar(false);
  };
  return (
    <header>
      <ContactPanel
        handleToggleSchedule={handleToggleSchedule}
        isOpenSchedule={isOpenSchedule}
      />
      <Container>
        <HeaderWrapper>
          <div>
            <Link href="/">
              <Image src="/Logo.svg" alt="Logo" width={34} height={40} />
            </Link>
            <MobileMenuBtn type="button" onClick={handleToggleMobileMenu}>
              <TfiMenu />
            </MobileMenuBtn>
          </div>
          {isOpenSearchBar ? <SearchBar /> : <NavigationCategories />}
          <UserMenu
            handleToggleCart={handleToggleCart}
            isOpenCart={isOpenCart}
            handleToggleUserList={handleToggleUserList}
            isOpenUserList={isOpenUserList}
            handleToggleSearchBar={handleToggleSearchBar}
            isOpenSearchBar={isOpenSearchBar}
          />

          <Portal selector="#modal">
            <MobileMenu
              handleToggleMobileMenu={handleToggleMobileMenu}
              isOpenMobileMenu={isOpenMobileMenu}
            />
          </Portal>
        </HeaderWrapper>
      </Container>
    </header>
  );
};
export default Header;
