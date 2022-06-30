import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Noto Sans KR', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
  user-select: none;
  a {
    all: unset;
    text-decoration: none;
  }
}
body {
  background-color: white;
  
  -webkit-font-smoothing: antialiased;
}
`;

export default GlobalStyle;
