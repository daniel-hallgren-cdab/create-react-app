import { createGlobalStyle } from './StyledComponents'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  /* Reset */

  * {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

    color: ${ theme.colors.white };
    background: ${ theme.colors.black };
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    border-bottom: 1px solid currentColor;
  }

  p {
    line-height: 1.5;
  }
`
