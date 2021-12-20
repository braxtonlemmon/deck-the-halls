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
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(#123, #111);
}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    overflow-y: scroll;
  }

  body {
    margin: 0;
    overflow-y: scroll;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .snow {
    height: 5px;
    width: 5px;
  }

`;

export default GlobalStyle;
