import { createGlobalStyle } from 'styled-components'
import '@fontsource/dancing-script'

// theme is also fully typed
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.black};
    padding: 0 1.5rem;
  }
  a,
  h1 {
    color: ${({ theme }) => theme.colors.secondary};
  }
  h1{
    font-family: "Dancing Script", cursive;
    font-size: 3rem;
  }
  header, main, footer{
  margin: 0 1.5rem ;
  }
`
