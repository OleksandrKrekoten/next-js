import Image from "next/image.js";
import Link from "next/link.js";
import ContactPanel from "../ContactPanel/ContactPanel.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { HeaderWrapper, MobileMenuBtn } from "./header.js";
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
    if (isOpenSchedule) {
      setIsOpenSchedule(false);
    } else if (isOpenCart) {
      setIsOpenCart(false);
    } else if (isOpenUserList) {
      setIsOpenUserList(false);
    }
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };
  const handleToggleSearchBar = () => {
    if (isOpenSchedule) {
      setIsOpenSchedule(false);
    } else if (isOpenCart) {
      setIsOpenCart(false);
    } else if (isOpenUserList) {
      setIsOpenUserList(false);
    }
    setIsOpenSearchBar(!isOpenSearchBar);
  };

  const handleToggleUserList = () => {
    if (isOpenSchedule) {
      setIsOpenSchedule(false);
    } else if (isOpenCart) {
      setIsOpenCart(false);
    } else if (isOpenSearchBar) {
      setIsOpenSearchBar(false);
    }
    setIsOpenUserList(!isOpenUserList);
  };

  const handleToggleSchedule = () => {
    if (isOpenCart) {
      setIsOpenCart(false);
    } else if (isOpenUserList) {
      setIsOpenUserList(false);
    } else if (isOpenSearchBar) {
      setIsOpenSearchBar(false);
    }
    setIsOpenSchedule(!isOpenSchedule);
  };

  const handleToggleCart = () => {
    if (isOpenSchedule) {
      setIsOpenSchedule(false);
    } else if (isOpenUserList) {
      setIsOpenUserList(false);
    } else if (isOpenSearchBar) {
      setIsOpenSearchBar(false);
    }
    setIsOpenCart(!isOpenCart);
  };
  return (
    <header>
      <ContactPanel
        handleToggleSchedule={handleToggleSchedule}
        isOpenSchedule={isOpenSchedule}
      />
      <Container>
        <HeaderWrapper>
          <div style={{ display: "flex" }}>
            {" "}
            <Link href="/">
              <Image src="/Logo.svg" alt="Logo" width={34} height={40} />
            </Link>
            <MobileMenuBtn type="button" onClick={handleToggleMobileMenu}>
              <TfiMenu />
            </MobileMenuBtn>
          </div>
          {isOpenSearchBar ? <SearchBar /> : <Navigation />}
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
