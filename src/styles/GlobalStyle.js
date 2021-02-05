import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import theme from './root/theme';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    max-width: 90%;;
    min-height: calc(100vh - 110px);
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Microsoft JhengHei,Helvetica Neue,Helvetica,Arial,sans-serif;;
    color: ${theme.colors.black};
    background-color: #f5f5f5;
`;
