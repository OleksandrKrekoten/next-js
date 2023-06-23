import Link from "next/link.js";
import { navLinks } from "../../constants/index.js";
import { NavList } from "./NavigationCategories.styled.js";
const NavigationCategories = () => {
  return (
    <nav>
      <NavList>
        {navLinks &&
          navLinks.map(({ name, id, path }) => (
            <li key={id}>
              <Link href={`${path}`}>{name}</Link>
            </li>
          ))}
      </NavList>
    </nav>
  );
};

export default NavigationCategories;
