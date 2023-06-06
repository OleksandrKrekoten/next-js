import styled from "@emotion/styled";
import Link from "next/link";

const SubTitle = styled.h3`
  font-weight: 600;
  font-size: ${(props) => ` ${props.theme.fontSize.mediumText}`};
  margin-bottom: 10px;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
`;
const SubText = styled.p`
  font-weight: 300;
  font-size: ${(props) => ` ${props.theme.fontSize.text}`};
`;
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const LoginDescriptionWrapper = styled.div`
  font-weight: 300;
  font-size: ${(props) => ` ${props.theme.fontSize.text}`};

  gap: 30px;
`;
const LoginDescriptionTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
 
  margin-bottom: 22px;
`;
const LoginDescriptionText = styled.div`
  margin-bottom: 12px;
`;
const LinkToRegister = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => ` ${props.theme.colors.textWhite}`};
  width: 208px;
  height: 50px;
  padding: 15px 30px;
  font-weight: 600;
  font-size: ${(props) => ` ${props.theme.fontSize.text}`};
  background: ${(props) => ` ${props.theme.colors.accent}`};
  border-radius: 50px;
  margin-top: 30px;
`;
export {
  LoginWrapper,
  SubTitle,
  SubText,
  LoginDescriptionWrapper,
  LoginDescriptionTitle,
  LoginDescriptionText,
  LinkToRegister,
};
