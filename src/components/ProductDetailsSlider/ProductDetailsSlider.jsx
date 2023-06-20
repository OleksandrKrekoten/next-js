import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  ImageWrapper,
  SliderItem,
} from "./ProductDetailsSlider.styled";
const ProductDetailsSlider = ({ photo }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (

      <Slider {...settings} >
        {photo &&
          photo.map((photoItem) => {
            return (
              <div key={photoItem}>
                <ImageWrapper>
                  <SliderItem
                    src={photoItem}
                    alt="product photo"
                    width={500}
                    height={500}
                  />
                </ImageWrapper>
              </div>
            );
          })}
      </Slider>
   
  );
};
export default ProductDetailsSlider;
