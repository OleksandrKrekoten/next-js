import styled from "@emotion/styled";
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding:0 10px;

  @media screen and (min-width: 800px) {
    max-width: 100%;
    padding:0 20px;
  }

  @media screen and (min-width: 1350px) {
    max-width: 1350px;
    padding:0 35px;
  }
`;
