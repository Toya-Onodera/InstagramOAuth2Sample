import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@500&display=swap");
  
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: "M PLUS 2", sans-serif;
    font-size: 16px;
    line-height: 2.0;
    color: var(--main-background-color);
  }

  :root {
    --header-height: 64px;
    --primary-white-color: #424242;
    --max-contents-width: 960px;
  }
`;
