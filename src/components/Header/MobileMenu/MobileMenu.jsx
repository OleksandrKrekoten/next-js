import Link from "next/link";
import { navLinks } from "../../../constants";
import {MobileNavList} from './MobileMenu.js'
const MobileMenu = () => {
  return (
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
  );
};
export default MobileMenu;
