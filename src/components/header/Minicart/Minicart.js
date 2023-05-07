import styled from "@emotion/styled";
import Link from "next/link";

const CloseBtn = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  color: #000;
  font-size: 20px;
  padding: 10px;
  transition: color ease-out 400ms;
  :hover,
  :focus {
    color: #0156ff;
  }
`;

const Cart = styled.div`
  position: absolute;
  z-index: 999;
  display: ${(props) => (props.isOpenCart ? "flex" : "none")};

  flex-direction: column;
  top: 40px;
  left: -220px;
  align-items: center;
  width: 310px;
  background: #ffffff;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #000;
  padding: 24px 0;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.14);
  border: 1px solid #808080;
  border-radius: 12px;
`;
const CartTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.4;
  margin-bottom: 6px;
`;
const CartSubtitle = styled.p`
  font-size: 12px;
  color: #a2a6b0;
  margin-bottom: 16px;
`;
const LinkToCart = styled(Link)`
  padding: 8px 20px;
  font-weight: 600;
  font-size: 14px;
  color: #0156ff;
  border: 2px solid #0156ff;
  border-radius: 50px;
  margin-bottom: 20px;
`;
const CartList = styled.ul`
  height: 208px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3c3e44;
    border-radius: 20px;
    border: 2px solid #f5f5f5;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #0c0c0e;
  }

  /* Gecko */
  ::-moz-scrollbar {
    width: 8px;
  }

  ::-moz-scrollbar-track {
    background-color: #f5f5f5;
  }

  ::-moz-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 20px;
    border: 2px solid #f5f5f5;
  }

  ::-moz-scrollbar-thumb:hover {
    background-color: #bbb;
  }
`;
const CartItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #cacdd8;
  width: 100%;
  p {
    font-size: 18px;
    margin-right: 5px;
  }
  img {
    margin-right: 5px;
  }
  h3 {
    font-size: 12px;
    font-weight: 400;
  }
`;
const CartSum = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #a2a6b0;
  margin-bottom: 12px;
  span {
    font-size: 18px;
    color: #000;
  }
`;
const LinkToCheckout = styled(Link)`
  display: block;
  text-align: center;
  padding: 8px 20px;
  min-width: 250px;
  font-weight: 600;
  font-size: 14px;
  background: #0156ff;
  color: #ffffff;
  border-radius: 50px;
  margin-bottom: 5px;
`;
const LinkToPayPal = styled(Link)`
  display: block;
  text-align: center;
  padding: 8px 20px;
  min-width: 250px;
  font-weight: 600;
  font-size: 14px;
  background: #ffb800;
  color: #000000;
  border-radius: 50px;
`;
const Arrow = styled.div`
  position: absolute;
  border-style: solid;
  _border-style: dashed;
  border-width: 9px;
  border-color: transparent;
  border-top-width: 0;
  border-bottom: 9px solid #808080;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
  top: -9px;
  right: 24px;
  ::before {
    content: " ";
    position: absolute;
    border-style: solid;
    _border-style: dashed;
    border-width: 8px;
    border-color: transparent;
    border-top-width: 0;
    border-bottom: 9px solid #fff;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    top: 1px;
    left: -8px;
  }
`;
export {
  Arrow,
  LinkToPayPal,
  LinkToCheckout,
  CartSum,
  CartItem,
  CartList,
  LinkToCart,
  CartSubtitle,
  CartTitle,
  Cart,
  CloseBtn,
};
