import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
  /* background-image: #fff; */
  background-image: url("assets/main.jpg");
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover;

  @media (min-width: 375px) and (max-width: 650px) {


    background-size: cover;
    background-position: center;
   

  }
}
`;
