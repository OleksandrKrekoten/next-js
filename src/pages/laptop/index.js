import LaptopsPage from "@/components/LaptopsPage/LaptopsPage";
import api from "@/utils/api";

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const res = await api.get(`/laptops?page=${page}`);
  const data = await res.data;
  const currentPage = parseFloat(page);
  return {
    props: {
      data,
      page:currentPage,
    },
  };
};

const Laptops = ({ data, page }) => {
  return <LaptopsPage data={data} page={page} />;
};
export default Laptops;
