import styled from "@emotion/styled";
const UserList = styled.ul`
  position: absolute;
  z-index: 999;
  display: ${(props) => (props.isOpenUserList ? "block" : "none")};
  top: 46px;
  right: 12px;
  width: 232px;
  padding: 12px 26px;
  background-color: ${(props) => ` ${props.theme.colors.primaryBackground}`};
  font-weight: 500;
  font-size: ${(props) => ` ${props.theme.fontSize.text}`};
  line-height: 200%;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  border-radius: 12px;
  border: ${(props) => `1px solid ${props.theme.colors.secondaryText}`};
`;
const Arrow = styled.div`
  position: absolute;
  border-style: solid;
  _border-style: dashed;
  border-width: 9px;
  border-color: transparent;
  border-top-width: 0;
  border-bottom: ${(props) => `9px solid ${props.theme.colors.secondaryText}`};
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