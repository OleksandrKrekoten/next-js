import { SuportIcon, SuportItem, FooterSuport, SuportList } from "./SuportList.styled.js"
import { suportContent } from "../../constants/index.js";
const Suport = () => {
    return (
      <FooterSuport>
        <SuportList>
          {suportContent &&
            suportContent.map(({ id, title, description, icon }) => {
              return (
                <SuportItem key={id}>
                  <SuportIcon>{icon}</SuportIcon>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </SuportItem>
              );
            })}
        </SuportList>
      </FooterSuport>
    );
}
export default Suport;