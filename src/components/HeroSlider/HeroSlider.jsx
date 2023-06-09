import Slider from "react-slick";
import CustomPrevArrow from "../CustomPrevArrow/CustomPrevArrow.jsx";
import CustomNextArrow from "../CustomNextArrow/CustomNextArrow.jsx";
import { ImagesSlider } from "../../constants/index.js";
import { Container } from "../Container";
import { SliderItem, Hero } from "./HeroSlider.styled.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image.js";

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <Container>
      <Hero>
        <Slider {...settings}>
          {ImagesSlider &&
            ImagesSlider.map(({ path, alt }) => {
              return (
                <div key={path}>
                  <SliderItem src={path} alt={alt} width={1200} height={400} />
                </div>
              );
            })}
        </Slider>
      </Hero>
   
    </Container>
  );
};
export default HeroSlider;
