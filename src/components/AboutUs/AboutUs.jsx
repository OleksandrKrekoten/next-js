import { AboutContent } from "@/constants";
import { Container } from "../Container";

import {
  AboutUsItem,
  TextBox,
    ItemTitle,
  TitleWrap,
  ItemDescription,
  AboutUsImage,
  TitleIcon,
} from "./AboutUs.styled.js";
import Title  from "../Title/Title.jsx";
const AboutUs = () => {
    
  return (
    <Container>
      <section>
        <Title>About Us</Title>
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
      </section>
    </Container>
  );
};

export default AboutUs;
