import LaptopsPage from "@/components/LaptopsPage/LaptopsPage";
import api from "@/utils/api";

export const getServerSideProps = async () => {
  const res = await api.get("/laptops");
  const data = await res.data;
  return {
    props: { data },
  };
};

const Laptops = ({ data }) => {
  return <LaptopsPage data={data} />;
};
export default Laptops;
