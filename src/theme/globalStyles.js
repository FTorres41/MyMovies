import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto|Pacifico');

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html{
    overflow-y:auto!important;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    background-color: ${(props) => props.theme.primary};
  }
`;

export const theme = {
  primary: "#1D3557",
  secondary: "#457B9D",
  tertiary: "#A8DADC",
  black: "#000000",
  black85: "rgba(0,0,0,0.85)",
  white: "#ffffff",
  gray: "#828282",
  clear: "#F1FAEE",
  highlight: "#E63946",
  form: "#304b70",
};
