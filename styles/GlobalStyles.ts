import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background: url('/background-image.jpg') no-repeat center center fixed;
      background-size: cover;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }

   * {
      box-sizing: inherit;
   }

   code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
   }
`;

export default GlobalStyles;
