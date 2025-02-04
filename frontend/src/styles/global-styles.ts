import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Roboto Bold';
    src: url('../src/assets/fonts/Roboto-Bold.ttf');
  }

  @font-face {
    font-family: 'Roboto Regular';
    src: url('../src/assets/fonts/Roboto-Regular.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Regular';
  }

  body{
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
  }
`;