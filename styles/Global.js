import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
  background-image: url("assets/main.jpg");
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover;
  min-width: 650px;

  @media (min-width: 375px) and (max-width: 650px) {
  background-image: #3a473f;
  }
}
`;
