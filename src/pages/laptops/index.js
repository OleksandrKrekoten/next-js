import LaptopsPage from "@/components/LaptopsPage/LaptopsPage";

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/product/laptops");
  const posts = await res.json();
  return {
    props: { posts }
  };
};

const Laptops = ({ posts }) => {
  return <LaptopsPage posts={posts} />;
};
export default Laptops;
