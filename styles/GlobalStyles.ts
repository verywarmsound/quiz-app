import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
     body {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       background-color: #e0f7fa; /* Light ocean color */
       font-family: 'Arial', sans-serif;
     }

     * {
       box-sizing: inherit;
     }
   `;

export default GlobalStyles;
