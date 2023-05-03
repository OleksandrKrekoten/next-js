import Slider from "react-slick";
import { Container } from "../Container";
import {
  SliderItem,
  Hero,
  CustomArrowPrev,
  CustomArrowNext,
} from "./HeroSlider.js";
import {VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [

  {  path: "/hero/msi1.jpg", alt: "msi baner" },
  {  path: "/hero/msi2.jpg", alt: "msi baner" },
  {  path: "/hero/msi3.jpg", alt: "msi baner" },
];

const CustomPrevArrow = (props) => {
 const { className, style, onClick } = props;
  return (
    <CustomArrowPrev onClick={onClick}>
      <VscChevronLeft />
    </CustomArrowPrev>
  );
};


const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <CustomArrowNext onClick={onClick}>
      <VscChevronRight />
    </CustomArrowNext>
  );
};


const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow:<CustomPrevArrow/>,
    nextArrow:<CustomNextArrow/> ,
  };
  return (
    <Container>
      <Hero>
        <Slider {...settings}>
          {images &&
            images.map(({ path, alt }) => {
              return (
                <div key={path}>
                  <SliderItem src={path} alt={alt} />
                </div>
              );
            })}
        </Slider>
      </Hero>
    </Container>
  );
};
export default HeroSlider;
