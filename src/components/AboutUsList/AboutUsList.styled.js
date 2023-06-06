import Image from "next/image";
import styled from "@emotion/styled";

const AboutUsItem = styled.li`
  display: flex;
  padding: 40px;
  justify-content: space-around;
  align-items: center;
  :nth-of-type(odd) {
    flex-direction: column;
    background-color: ${(props) =>
      ` ${props.theme.colors.secondaryBackground}`};
    color: ${(props) => ` ${props.theme.colors.textWhite}`};
  }
  :nth-of-type(even) {
    flex-direction: column-reverse;
    background-color: ${(props) => ` ${props.theme.colors.primaryBackground}`};
    color: ${(props) => ` ${props.theme.colors.textBlack}`};
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
  font-size: ${(props) => ` ${props.theme.fontSize.mediumText}`};
  margin-bottom: 30px;

  @media screen and (min-width: 780px) {
    font-size: ${(props) => ` ${props.theme.fontSize.largeTitle}`};
  }
`;
const TitleIcon = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  padding: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => ` ${props.theme.colors.accent}`};

  margin-right: 15px;
  border-radius: 36% 36% 0% 36% / 36% 36% 0% 36%;
  font-size: ${(props) => ` ${props.theme.fontSize.mediumText}`};

  @media screen and (min-width: 780px) {
    width: 40px;
    height: 40px;
    font-size: ${(props) => ` ${props.theme.fontSize.largeTitle}`};
  }
`;
const TitleWrap = styled.div`
  display: flex;
`;
const ItemDescription = styled.p`
  font-weight: 300;
  font-size: ${(props) => ` ${props.theme.fontSize.text}`};
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
