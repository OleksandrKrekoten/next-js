
import {
  Wrapper,
  ContactLink,
  Description,
  HeaderContactPanel,
} from "./ContactPanel.js";
import WorkSchedule from "../WorkSchedule/WorkSchedule.jsx";
import { Container } from "../Container.js";

import Link from "next/link.js";
import WorkScheduleModal from "../WorkScheduleModal/WorkScheduleModal.jsx";
import SocialNetworksList from "../SocialNetworksList/SocialNetworksList.jsx"
const ContactPanel = ({ isOpenSchedule, handleToggleSchedule }) => {
  return (
    <HeaderContactPanel>
      <Container>
        <Wrapper>
          <WorkSchedule handleToggleSchedule={handleToggleSchedule} />
          <Description>
            Visit our showroom in 1234 Street Adress City Address, 1234
            <Link href="/contact-us">Contact Us</Link>
          </Description>
          <ContactLink>
            <p>Call Us: (00) 1234 5678</p>
           <SocialNetworksList/>
          </ContactLink>
          <WorkScheduleModal
            isOpenSchedule={isOpenSchedule}
            handleToggleSchedule={handleToggleSchedule}
          />
        </Wrapper>
      </Container>
    </HeaderContactPanel>
  );
};
export default ContactPanel;
