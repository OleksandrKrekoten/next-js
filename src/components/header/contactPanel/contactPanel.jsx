import { AiOutlineDown } from "react-icons/ai";
import {
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
import {
  Wrapper,
  ContactLink,
  WorkScheduleBlock,
  Icon,
  ContactWrapper,
} from "./contactPanel.js";

import { AiFillClockCircle } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
const ContactPanel = ({ isOpenSchedule, handleToggle }) => {
  return (
    <Wrapper>
      <div>
        <button type="button" onClick={handleToggle}>
          Mon-Thu:{" "}
          <span>
            9:00 AM - 5:30 PM <AiOutlineDown />
          </span>
        </button>
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
      <WorkScheduleBlock isOpenSchedule={isOpenSchedule}>
        <div>
          <Icon>
            <AiFillClockCircle />
          </Icon>

          <div>
            <span>We are open:</span>
            <ul>
              <li>
                <p>
                  Mon-Thu: <span> 9:00 AM - 5:30 PM</span>
                </p>
              </li>
              <li>
                <p>
                  Fr: <span>9:00 AM - 6:00 PM</span>
                </p>
              </li>{" "}
              <li>
                <p>
                  Sat: <span>11:00 AM - 5:00 PM</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Icon>
            <FaLocationArrow />
          </Icon>
          <div>
            <span>
              Address: 1234 Street Adress,
              <br /> City Address, 1234
            </span>
          </div>
        </div>
        <ContactWrapper>
          <a href="tel:(00) 1234 5678">
            <p>
              {" "}
              Phones: <span>(00) 1234 5678</span>
            </p>
          </a>
          <a href="shop@email.com">
            <p>
              {" "}
              E-mail: <span>shop@email.com</span>
            </p>
          </a>
        </ContactWrapper>
      </WorkScheduleBlock>
    </Wrapper>
  );
};
export default ContactPanel;
