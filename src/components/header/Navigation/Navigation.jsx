import { navLinks } from "../../../constants/index.js";
import { NavList } from "./Navigation.js";
const Navigation = () => {
  return (
    <nav>
      <NavList>
        {navLinks &&
          navLinks.map(({ name, id, path }) => (
            <li key={id}>
              <a href={`/${path}`}>{name}</a>
            </li>
          ))}
      </NavList>
    </nav>
  );
};

export default Navigation;
