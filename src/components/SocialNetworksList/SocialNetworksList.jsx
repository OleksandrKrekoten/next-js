import {
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
import {SocialLink} from "./SocialNetworksList.styled.js"
const SocialNetworksList = () => {
  return (
    <SocialLink>
      <li>
        <a href="/">
          <TiSocialInstagramCircular />
        </a>
      </li>
      <li>
        <a href="/">
          <TiSocialFacebookCircular />
        </a>
      </li>
    </SocialLink>
  );
};
export default SocialNetworksList;
