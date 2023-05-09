import styled from "@emotion/styled";

const UserWrapper = styled.div`
  position: relative;
  display: flex;
`;

const SearcList = styled.ul`
  display: flex;
  align-items: center;

  margin-right: 10px;

  @media screen and (min-width: 500px) {
    margin-right: 28px;
  }

  li {
    :not(:last-child) {
      margin-right: 10px;
      @media screen and (min-width: 500px) {
        margin-right: 25px;
      }
    }
    button {
      font-size: 19px;
      border: none;
      color: #000;
      background-color: transparent;
      transition: color ease-out 400ms;
      :focus,
      :hover {
        color: #0156ff;
      }
    }
  }
`;

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

const CloseBtn = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  color: #000;
  font-size: 20px;
  padding: 10px;
  transition: color ease-out 400ms;
  :hover,
  :focus {
    color: #0156ff;
  }
`;

export { Arrow, UserList, UserWrapper, SearcList, CloseBtn };
