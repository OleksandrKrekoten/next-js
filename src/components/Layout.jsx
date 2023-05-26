import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import  Suport  from "./SuportList/SuportList.jsx";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Suport/>
      <Footer />
    </>
  );
};
export default Layout;
