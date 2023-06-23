import ProductDetailsPage from "@/components/ProductDetailsPage/ProductDetailsPage";
import api from "@/utils/api";

export const getStaticPaths = async () => {
 const res = await api.get("/laptops");
 const posts = await res.data.posts;

  const paths = posts.map(({ _id }) => ({
    params: { id: _id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
 const res = await api.get(`/${id}`);
 const posts = await res.data;

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: posts },
  };
};

ProductDetailsPage
const Laptops = ({ post }) => {

  return <ProductDetailsPage post={post} />;
};
export default Laptops;
