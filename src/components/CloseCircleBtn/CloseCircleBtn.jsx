import { AiFillCloseCircle } from "react-icons/ai";
import {CloseBtn}from "./CloseCircleBtn.js"
const CloseCircleBtn = ({handleClick}) => {
  return (
    <CloseBtn type="button" onClick={handleClick}>
      <AiFillCloseCircle />
    </CloseBtn>
  );
};
export default CloseCircleBtn;
