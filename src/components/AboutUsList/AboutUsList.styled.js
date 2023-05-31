import Image from "next/image";
import styled from "@emotion/styled";

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
  font-size: 16px;
  margin-bottom: 30px;

  @media screen and (min-width: 780px) {
    font-size: 32px;
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
  font-size: 14px;
`;
const AboutUsImage = styled(Image)`
  @media screen and (max-width: 780px) {
    width: 90%;
    height: auto;
  }
`;
export {
  AboutUsItem,
  TitleWrap,
  TextBox,
  ItemTitle,
  ItemDescription,
  AboutUsImage,
  TitleIcon,
};
