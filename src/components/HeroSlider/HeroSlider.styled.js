import styled from "@emotion/styled";
import Image from "next/image";

const Hero = styled.section`
  padding-bottom: 30px;
`;

const SliderItem = styled(Image)`
  width: 100%;
  height: auto;
  position: relative;
`;

export {   SliderItem, Hero };
