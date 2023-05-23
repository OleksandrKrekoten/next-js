import { VscChevronRight } from "react-icons/vsc";
import {CustomArrowNext} from "./CustomNextArrow.js"
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <CustomArrowNext onClick={onClick}>
      <VscChevronRight />
    </CustomArrowNext>
  );
};
export default CustomNextArrow;