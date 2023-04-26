import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #020202;
  height: 44px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: #acacac;
  button {
    border: none;
    background-color: transparent;
    color: #a2a6b0;
    cursor: pointer;
    transition: color ease-out 400ms;
    span {
      color: #fff;
      transition: color ease-out 400ms;
      :focus,
      :hover {
        color: #0156ff;
      }
    }
  }
  a {
    color: #fff;
    text-decoration: underline;
  }
`;
export const ContactLink = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;

  p {
    margin-right: 14px;
  }
  ul {
    display: flex;
    li {
      font-size: 20px;
      a {
        transition: color ease-out 400ms;
        :focus,
        :hover {
          color: #0156ff;
        }
      }
      :not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`;
export const WorkScheduleBlock = styled.div`
  position: absolute;
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
export const ScheduleWrapper = styled.div`
  :not(:last-child) {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #cacdd8;
  }
`;
export const Icon = styled.div`
  font-size: 35px;
  margin-right: 10px;
  color: #0156ff;
`;
export const ContactWrapper = styled.div`
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
export const Arrow = styled.div`
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