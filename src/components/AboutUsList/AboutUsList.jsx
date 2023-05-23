import { AboutContent } from "@/constants";
import {
  AboutUsItem,
  TextBox,
  ItemTitle,
  TitleWrap,
  ItemDescription,
  AboutUsImage,
  TitleIcon,
} from "./AboutUsList.styled.js";
const AboutUsList = () => {
  return (
    <ul>
      {AboutContent &&
        AboutContent.map(({ id, image, description, title, icon }) => {
          return (
            <AboutUsItem key={id}>
              <TextBox>
                <TitleWrap>
                  {" "}
                  <TitleIcon>{icon}</TitleIcon>
                  <ItemTitle>{title}</ItemTitle>
                </TitleWrap>
                <ItemDescription>{description}</ItemDescription>
              </TextBox>
              <AboutUsImage
                src={image}
                alt="Photo computer"
                width={410}
                height={260}
              />
            </AboutUsItem>
          );
        })}
    </ul>
  );
};
export default AboutUsList;
