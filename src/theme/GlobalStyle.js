import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "@fontsource/mountains-of-christmas";

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    /* font-family: 'Special Elite', cursive; */
    font-family: 'Josefin Sans', sans-serif;
    font-family: 'Mountains of Christmas', cursive;
  }

  body, html {
    height: 100%;
    width: 100%;
    font-family: 'Mountains of Christmas', cursive;
    background: "#0F8A5F"
  }

  html,
body {
  padding: 0;
  margin: 0;
  width: 100vw;
  position: relative;
  /* overflow: hidden; */
  background: "#0F8A5F"

}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    /* margin: 0; */
  }

  a {
    text-decoration: none;
    color: black;
  }

`;

export default GlobalStyle;
