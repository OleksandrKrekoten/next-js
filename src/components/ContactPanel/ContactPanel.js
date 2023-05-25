import styled from "@emotion/styled";

const HeaderContactPanel = styled.div`
  background-color: #020202;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 44px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: #acacac;
  a {
    color: #fff;
    text-decoration: underline;
  }
`;

const ContactLink = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;

  p {
    display: none;
    margin-right: 14px;
    @media screen and (min-width: 500px) {
      display: block;
    }
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
const Description = styled.p`
  display: none;
  @media screen and (min-width: 840px) {
    display: block;
    font-size: 12px;
  }
`;
export { Description, ContactLink, Wrapper, HeaderContactPanel };
