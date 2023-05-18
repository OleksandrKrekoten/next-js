import styled from "@emotion/styled";
import Link from "next/link";
const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 20px;
  color: #000000;
`;
const SubTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 10px;
  color: #000000;
`;
const SubText = styled.p`
  font-weight: 300;
  font-size: 14px;
  color: #000000;
`;
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const LoginDescriptionWrapper = styled.div`
  font-weight: 300;
  font-size: 14px;
  color: #000000;
  gap: 30px;
`;
const LoginDescriptionTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  margin-bottom: 22px;
`;
const LoginDescriptionText = styled.div`
  margin-bottom: 12px;
`;
const LinkToRegister = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
  color: #fff;
  width: 208px;
  height: 50px;
  padding: 10px;
  background: #0156ff;
  border-radius: 50px;
 margin-top: 30px;
`;
export {
  Title,
  LoginWrapper,
  SubTitle,
  SubText,
  LoginDescriptionWrapper,
  LoginDescriptionTitle,
  LoginDescriptionText,
  LinkToRegister,
};
