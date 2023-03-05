import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Proxima+Nova');

  html {
    background-color: transparent;
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
 
  body {
    font-family: 'Proxima Nova', sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #root {
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    font-family: 'Proxima Nova', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
