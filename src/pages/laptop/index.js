import LaptopsPage from "@/components/LaptopsPage/LaptopsPage";
import api from "@/utils/api";

export const getServerSideProps = async () => {
  const res = await api.get("/laptops");
  const posts = await res.data;
  return {
    props: { posts }
  };
};

const Laptops = ({ posts }) => {
  return <LaptopsPage posts={posts} />;
};
export default Laptops;
