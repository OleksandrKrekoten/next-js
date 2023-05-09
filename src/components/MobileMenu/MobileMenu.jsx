import Link from "next/link";
import { navLinks } from "../../constants";
import { MobileNav, MobileNavList, CloseModalBtn } from "./MobileMenu.js";
import { AiFillCloseCircle } from "react-icons/ai";
const MobileMenu = ({ handleToggleMobileMenu, isOpenMobileMenu }) => {
  return (
    <MobileNav isOpenMobileMenu={isOpenMobileMenu}>
      <CloseModalBtn type="button" onClick={handleToggleMobileMenu}>
        <AiFillCloseCircle />
      </CloseModalBtn>
      <MobileNavList>
        {navLinks &&
          navLinks.map(({ name, id, path }) => {
            return (
              <li key={id}>
                <Link href={path}>{name}</Link>
              </li>
            );
          })}
      </MobileNavList>
    </MobileNav>
  );
};
export default MobileMenu;
