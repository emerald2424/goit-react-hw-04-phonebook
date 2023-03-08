import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    
}
*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
  font-family: 'Roboto' sans-serif;
    font-size: 18px;
    letter-spacing: 0.03em;
    line-height: 1.17;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  /* list-style: none; */
  margin: 0;
  /* padding: 0; */
}
`