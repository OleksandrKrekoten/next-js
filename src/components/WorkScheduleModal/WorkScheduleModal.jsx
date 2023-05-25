import {
BtnWrapper,
  Arrow,
  ContactWrapper,
  WorkScheduleBlock,
} from "./WorkScheduleModal.js";
import WorkScheduleWeek from "../WorkScheduleWeek/WorkScheduleWeek.jsx";
import CloseCircleBtn from "../CloseCircleBtn/CloseCircleBtn.jsx";

const WorkScheduleModal = ({ handleToggleSchedule, isOpenSchedule }) => {
  return (
    <WorkScheduleBlock isOpenSchedule={isOpenSchedule}>
      <Arrow />
      <BtnWrapper>
        <CloseCircleBtn type="button" handleClick={handleToggleSchedule} />
      </BtnWrapper>
      <WorkScheduleWeek />
      <ContactWrapper>
        <a href="tel:(00) 1234 5678">
          <p>
            Phones: <span>(00) 1234 5678</span>
          </p>
        </a>
        <a href="mailto:shop@email.com">
          <p>
            E-mail: <span>shop@email.com</span>
          </p>
        </a>
      </ContactWrapper>
    </WorkScheduleBlock>
  );
};
export default WorkScheduleModal;
