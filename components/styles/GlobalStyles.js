import { createGlobalStyle } from 'styled-components';
import ShopTheme from './ShopTheme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial,Helvetica Neue,Helvetica,sans-serif;
  }
  a {
    text-decoration: none;
    color: ${ShopTheme.black};
  }
`;

export default GlobalStyle;