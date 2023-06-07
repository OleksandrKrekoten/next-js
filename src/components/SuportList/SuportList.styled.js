import styled from "@emotion/styled";
const FooterSuport = styled.div`
  background-color: ${(props) => ` ${props.theme.colors.primaryBackground}`};
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  padding: 60px 0;
`;
const SuportList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const SuportItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 265px;
  }
  :not(:last-child) {
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
      margin-right: 130px;
    }
  }
  h3 {
    font-weight: 700;
    font-size: 18px;
  }
  p {
    font-size: ${(props) => ` ${props.theme.fontSize.text}`};
    opacity: 0.7;
  }
`;
const SuportIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 85px;
  background-color: ${(props) => ` ${props.theme.colors.accent}`};
  border-radius: 50%;
  font-size: 60px;
  margin-bottom: 24px;
`;
export { SuportIcon, SuportItem, FooterSuport, SuportList };