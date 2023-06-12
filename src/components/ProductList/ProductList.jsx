import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ posts }) => (
  <ul>
    {posts && posts.map((post) => <ProductCard key={posts._id} post={post} />)}
  </ul>
);


export default ProductList;