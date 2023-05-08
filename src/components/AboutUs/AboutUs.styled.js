import Image from "next/image";
import styled from "@emotion/styled";
const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  color: #000000;
  margin-bottom: 20px;
`;
const AboutUsItem = styled.li`
  display: flex;
  padding: 40px;
  justify-content: space-around;
  align-items: center;
  :nth-of-type(odd) {
    flex-direction: column;
    background-color: #000;
    color: #fff;
  }
  :nth-of-type(even) {
    flex-direction: column-reverse;
    background-color: #fff;
    color: #000;
  }
  @media screen and (min-width: 680px) {
    padding: 90px;
    :nth-of-type(odd) {
      flex-direction: row;
    }
    :nth-of-type(even) {
      flex-direction: row-reverse;
    }
  }
`;
const TextBox = styled.div`
  max-width: 565px;
  @media screen and (max-width: 680px) {
    margin-bottom: 20px;
  }
`;
const ItemTitle = styled.h3`
  font-weight: 500;
  font-size: 26px;
  margin-bottom: 30px;

  @media screen and (min-width: 780px) {
    font-size: 44px;
  }
`;
const TitleIcon = styled.span`
  font-size: 30px;
  display: block;
  width: 40px;
  height: 40px;
  padding: 6px;
  align-items: center;
  justify-content: center;
  background-color: #0156ff;
  
  margin-right: 15px;
  border-radius: 36% 36% 0% 36% / 36% 36% 0% 36%;
`;
const TitleWrap = styled.div`
  display: flex;
`;
const ItemDescription = styled.p`
  font-weight: 300;
  font-size: 18px;
`;
const AboutUsImage = styled(Image)`
  width: 302px;
  height: auto;
  @media screen and (min-width: 780px) {
    width: 402px;
  }
`;
export {
  Title,
  AboutUsItem,
  TitleWrap,
  TextBox,
  ItemTitle,
  ItemDescription,
  AboutUsImage,
  TitleIcon,
};