import styled from "@emotion/styled";
const WorkScheduleBlock = styled.div`
  position: absolute;
  z-index: 999;
  display: ${(props) => (props.isOpenSchedule ? "blocl" : "none")};
  top: 35px;
  left: 55px;
  width: 262px;
  background: #ffffff;
  border: 1px solid #808080;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.14);
  border-radius: 12px;
  padding: 10px 8px;
  transition: opacity 400 ease-in;
  color: #000;
`;


const ContactWrapper = styled.div`
  padding-top: 11px;
  padding-left: 11px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  p {
    color: #000000;
    text-decoration: none;
  }
  span {
    color: #0156ff;
  }
`;
const Arrow = styled.div`
  position: absolute;
  border-style: solid;
  _border-style: dashed;
  border-width: 9px;
  border-color: transparent;
  border-top-width: 0;
  border-bottom: 9px solid #808080;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
  top: -9px;
  left: 9px;
  ::before {
    content: " ";
    position: absolute;
    border-style: solid;
    _border-style: dashed;
    border-width: 8px;
    border-color: transparent;
    border-top-width: 0;
    border-bottom: 9px solid #fff;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    top: 1px;
    left: -8px;
  }
`;

const BtnWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;
export { BtnWrapper, Arrow, ContactWrapper, WorkScheduleBlock };