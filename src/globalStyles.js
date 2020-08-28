import { createGlobalStyle } from 'styled-components'
import HK_GROTESK_WOFF from '../static/fonts/HKGrotesk-Regular.woff';
import HK_GROTESK_WOFF2 from '../static/fonts/HKGrotesk-Regular.woff2';
console.log(HK_GROTESK_WOFF)
const GlobalStyle = createGlobalStyle`
body {
  background-color: #161616;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::selection {
  background: rgba(255, 254, 0, 0.8);
}


@font-face {
  font-family: "HK Grotesk";
  src: url(${HK_GROTESK_WOFF}) format("woff"),
  url(${HK_GROTESK_WOFF2}) format("woff2");
} 
`;

export default GlobalStyle