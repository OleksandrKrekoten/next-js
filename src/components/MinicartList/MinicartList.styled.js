import styled from "@emotion/styled";
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
  border-bottom: ${(props) => `1px solid ${props.theme.colors.secondaryText}`};
  width: 100%;
  p {
    font-size: 18px;
    margin-right: 5px;
  }
  img {
    margin-right: 5px;
  }
  h3 {
    font-size: ${(props) => ` ${props.theme.fontSize.small}`};
    font-weight: 400;
  }
`;
export { CartItem, CartList };