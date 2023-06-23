import Image from "next/image";
import styled from "@emotion/styled";
const ImageWrapper = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;

  @media screen and (min-width: 768px) {
    height: 400px;
  }
`;

const SliderItem = styled(Image)`
  width: 100%;
  height: auto;
  position: relative;
`;

export { ImageWrapper, SliderItem };
