import styled from "@emotion/styled";
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;

  @media screen and (min-width: 800px) {
    max-width: 100%;
    padding: 0 20px;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1400px;
    padding: 0 35px;
  }
`;
export { Container };
