import Image from "next/image";
import styled from "@emotion/styled";
const ImageWrapper = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  
`;

const SliderItem = styled(Image)`
  width: 100%;
  height: auto;
  position: relative;
`;

export { ImageWrapper, SliderItem };
