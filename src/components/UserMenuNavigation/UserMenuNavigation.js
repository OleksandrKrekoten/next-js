import styled from "@emotion/styled";
const UserList = styled.ul`
  position: absolute;
  z-index: 999;
  display: ${(props) => (props.isOpenUserList ? "block" : "none")};
  top: 46px;
  right: -14px;
  width: 232px;
  padding: 12px 26px;
  background-color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 200%;
  color: #000;
  border-radius: 12px;
  border: 1px solid #808080;
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
  right: 24px;
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
export {  Arrow, UserList, BtnWrapper };