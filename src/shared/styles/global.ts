import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
 * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
 }

 html, body, #root {
    height: 100%;
 }

 a {
    text-decoration: none;
    outline: none;
 }

 button {
    background-color: none;
    border: none;
    outline: none;
 }

`;

export default globalStyle;
