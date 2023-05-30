import Layout from "../components/Layout.jsx";
import GlobalStyle from "@/styles/GlobalStyle.styled.js";
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
