import {createGlobalStyle} from 'styled-components'
import { normalize } from 'styled-normalize'
import { theme } from './theme'


export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  } 
  
  h1, h2, h3, h4, * {
    margin: 0;
  }
  
  ul {
    padding: 0;
  }
  
  li {
    list-style: none;
  }
  
  body {
    font-family: ${theme.fonts.mainFont.font};
    font-weight: ${theme.fonts.mainFont.weights['400']};
  }
  
  a {
    //color: inherit;
  }
`