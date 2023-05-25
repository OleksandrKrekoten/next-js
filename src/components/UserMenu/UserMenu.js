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



export { UserWrapper, SearcList };
