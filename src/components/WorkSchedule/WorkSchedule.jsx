import { AiOutlineDown } from "react-icons/ai";
import {OpenScheduleBtn} from "./WorkSchedule.js"
const WorkSchedule = ({ handleToggleSchedule }) => {
  return (
    <div>
      <OpenScheduleBtn type="button" onClick={handleToggleSchedule}>
        Mon-Thu:{" "}
        <span>
          9:00 AM - 5:30 PM <AiOutlineDown />
        </span>
      </OpenScheduleBtn>
    </div>
  );
};
export default WorkSchedule;
