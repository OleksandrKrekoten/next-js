import { VscChevronLeft } from "react-icons/vsc";
import {CustomArrowPrev}from "./CustomPrevArrow.styled.js"
const CustomPrevArrow = (props) => {
  const {  onClick } = props;
  return (
    <CustomArrowPrev onClick={onClick}>
      <VscChevronLeft />
    </CustomArrowPrev>
  );
};
export default CustomPrevArrow;