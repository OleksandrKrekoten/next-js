import { Title, Text, ScheduleWrapper, Icon } from "./WorkScheduleWeek.js";
import { FaLocationArrow } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { WorkScheduleData } from "../../constants/index.js";
const WorkScheduleWeek = () => {
  return (
    <>
      <ScheduleWrapper>
        <Icon>
          <AiFillClockCircle />
        </Icon>
        <div>
          <Title>We are open:</Title>
          <ul>
            { 
              WorkScheduleData.map(({ id, day, hourWork }) => {
                return (
                  <li key={id}>
                    <Text>
                      {day} <span> {hourWork}</span>
                    </Text>
                  </li>
                );
              })}
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
    </>
  );
};
export default WorkScheduleWeek;
