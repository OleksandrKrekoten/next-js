import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
const Layout = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer/>
        </>
    )
}
export default Layout