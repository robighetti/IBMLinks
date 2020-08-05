import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Mulish', serif;
    font-size: 16px;
  }

  h1,hanging-punctuation,h3,h4,h5,h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

`;
