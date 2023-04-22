import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    li {
      color: #000;
      font-weight: 600;
      font-size: 14px;
      transition: color ease-out 400ms, border-color ease-out 400ms;
      :not(:last-child) {
        margin-right: 25px;
        :focus,
        :hover {
          color: #0156ff;
        }
      }
      :last-child {
        color: #0156ff;
        padding: 8px 26px;
        border: 2px solid #0156ff;
        border-radius: 50px;
        :focus,
        :hover {
          color: #000;
          border-color: #000;
        }
      }
    }
  }
`;
