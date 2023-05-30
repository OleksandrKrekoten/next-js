import { Global } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={{
      html: {
        margin: 0,
        padding: 0,
        border: 0,
        fontSize: "100%",
        font: '16px/1.5 "Poppins", sans-serif',
        verticalAlign: "baseline",
      },
      body: {
        lineHeight: 1,
      },
      "*, *::before, *::after": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        color: "inherit",
      },
      article: {
        display: "block",
      },
      aside: {
        display: "block",
      },
      details: {
        display: "block",
      },
      figcaption: {
        display: "block",
      },
      figure: {
        display: "block",
      },
      footer: {
        display: "block",
      },
      header: {
        display: "block",
      },
      hgroup: {
        display: "block",
      },
      menu: {
        display: "block",
      },
      nav: {
        display: "block",
      },
      section: {
        display: "block",
      },
      "ol, ul": {
        listStyle: "none",
      },
      blockquote: {
        quotes: "none",
      },
      "blockquote:before, blockquote:after, q:before, q:after": {
        content: "none",
      },
      table: {
        borderCollapse: "collapse",
        borderSpacing: 0,
      },
      button: {
        border: "none",
      },
      a: {
        textDecoration: "none",
      },
    }}
  />
);

export default GlobalStyle;
