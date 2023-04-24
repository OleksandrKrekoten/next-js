import styled from "@emotion/styled";

export const UserWrapper = styled.div`
  display: flex;
`;

export const SearcList = styled.ul`
  display: flex;
  align-items: center;

  margin-right: 28px;
  li {
    :not(:last-child) {
      margin-right: 25px;
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

