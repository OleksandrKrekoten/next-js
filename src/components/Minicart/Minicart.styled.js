import styled from "@emotion/styled";
import Link from "next/link";

const Cart = styled.div`
  position: absolute;
  z-index: 999;
  display: ${(props) => (props.isOpenCart ? "flex" : "none")};

  flex-direction: column;
  top: 40px;
  left: -220px;
  align-items: center;
  width: 310px;
  background: ${(props) => ` ${props.theme.colors.primaryBackground}`};
  font-weight: 400;
  font-size: ${(props) => ` ${props.theme.fontSize.text}`};
  line-height: 1.5;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  padding: 24px 0;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.14);
  border: ${(props) => `1px solid ${props.theme.colors.secondaryText}`};
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
  color: ${(props) => ` ${props.theme.colors.secondaryText}`};
  margin-bottom: 16px;
`;
const LinkToCart = styled(Link)`
  padding: 8px 20px;
  font-weight: 600;
  font-size: ${(props) => ` ${props.theme.fontSize.text}`};
  color: ${(props) => ` ${props.theme.colors.accent}`};
  border: ${(props) => `2px solid ${props.theme.colors.accent}`};
  border-radius: 50px;
  margin-bottom: 20px;
`;

const CartSum = styled.p`
  font-weight: 600;
  font-size: ${(props) => ` ${props.theme.fontSize.text}`};
  color: ${(props) => ` ${props.theme.colors.secondaryText}`};
  margin-bottom: 12px;
  span {
    font-size: 18px;
    color: ${(props) => ` ${props.theme.colors.textBlack}`};
  }
`;
const LinkToCheckout = styled(Link)`
  display: block;
  text-align: center;
  padding: 15px 30px;
  min-width: 250px;
  font-weight: 600;
  font-size: 14px;
  background: ${(props) => ` ${props.theme.colors.accent}`};
  color: ${(props) => ` ${props.theme.colors.textWhite}`};
  border-radius: 50px;
  margin-bottom: 5px;
`;
const LinkToPayPal = styled(Link)`
  display: block;
  text-align: center;
  padding: 15px 30px;
  min-width: 250px;
  font-weight: 600;
  font-size: ${(props) => ` ${props.theme.fontSize.text}`};
  background: #ffb800;
  color: ${(props) => ` ${props.theme.colors.textBlack}`};
  border-radius: 50px;
`;
const Arrow = styled.div`
  position: absolute;
  border-style: solid;
  _border-style: dashed;
  border-width: 9px;
  border-color: transparent;
  border-top-width: 0;
  border-bottom: ${(props) => `9px solid ${props.theme.colors.secondaryText}`};
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
const BtnWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;
export {
  BtnWrapper,
  Arrow,
  LinkToPayPal,
  LinkToCheckout,
  CartSum,
  LinkToCart,
  CartSubtitle,
  CartTitle,
  Cart,
};
