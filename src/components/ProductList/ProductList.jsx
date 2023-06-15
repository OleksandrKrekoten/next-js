import ProductCard from "../ProductCard/ProductCard";
import {List} from "./ProductList.styled.js"
const ProductList = ({ posts }) => {
  return (
    <List>
      {posts && posts.map((post) => <ProductCard key={post._id} post={post} />)}
    </List>
  );
};

export default ProductList;
