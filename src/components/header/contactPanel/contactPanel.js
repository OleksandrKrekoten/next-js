import styled from "@emotion/styled";
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #020202;
  height: 44px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: #acacac;
  span {
    color: #fff;
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
    list-style: none;
    li {
      font-size: 20px;
      :not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`;
