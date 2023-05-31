import { ThemeProvider } from "@emotion/react";
import Layout from "../components/Layout.jsx";
import GlobalStyle from "../styles/globalStyle.styled.js";
import { theme } from "@/styles/theme.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
