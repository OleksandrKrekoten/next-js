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
  Arrow,
  ScheduleWrapper,
  Description,
  HeaderContactPanel,
} from "./ContactPanel.js";
import { Container } from "../../Container.js";
import { AiFillClockCircle } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link.js";
const ContactPanel = ({ isOpenSchedule, handleToggleSchedule }) => {
  return (
    <HeaderContactPanel>
      <Container>
        <Wrapper>
          <div>
            <button type="button" onClick={handleToggleSchedule}>
              Mon-Thu:{" "}
              <span>
                9:00 AM - 5:30 PM <AiOutlineDown />
              </span>
            </button>
          </div>
          <Description>
            Visit our showroom in 1234 Street Adress City Address, 1234{" "}
            <Link href="/">Contact Us</Link>
          </Description>
          <ContactLink>
            <p>Call Us: (00) 1234 5678</p>
            <ul>
              <li>
                <Link href="/">
                  <TiSocialInstagramCircular />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <TiSocialFacebookCircular />
                </Link>
              </li>
            </ul>
          </ContactLink>
          <WorkScheduleBlock isOpenSchedule={isOpenSchedule}>
            <Arrow> </Arrow>
            <ScheduleWrapper>
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
            </ScheduleWrapper>
            <ScheduleWrapper>
              <Icon>
                <FaLocationArrow />
              </Icon>
              <div>
                <span>
                  Address: 1234 Street Adress,
                  <br /> City Address, 1234
                </span>
              </div>
            </ScheduleWrapper>
            <ContactWrapper>
              <Link href="tel:(00) 1234 5678">
                <p>
                  {" "}
                  Phones: <span>(00) 1234 5678</span>
                </p>
              </Link>
              <Link href="mailto:shop@email.com">
                <p>
                  {" "}
                  E-mail: <span>shop@email.com</span>
                </p>
              </Link>
            </ContactWrapper>
          </WorkScheduleBlock>
        </Wrapper>
      </Container>
    </HeaderContactPanel>
  );
};
export default ContactPanel;
