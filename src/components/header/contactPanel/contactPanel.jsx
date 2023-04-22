import { AiOutlineDown } from "react-icons/ai";
import {
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
import { Wrapper, ContactLink } from "./contactPanel.js";
const ContactPanel = () => {
    return (
      <Wrapper>
        <div>
          <p>
            Mon-Thu:{" "}
            <span >
              9:00 AM - 5:30 PM <AiOutlineDown />
            </span>
          </p>
        </div>
        <p>
          Visit our showroom in 1234 Street Adress City Address, 1234{" "}
          <a>Contact Us</a>
        </p>
        <ContactLink>
          <p>Call Us: (00) 1234 5678</p>
          <ul>
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
          </ul>
        </ContactLink>
      </Wrapper>
    );
};
export default ContactPanel;