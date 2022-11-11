import { createGlobalStyle } from 'styled-components'
import '@fontsource/dancing-script'
import '@fontsource/simonetta'
import '@fontsource/pridi'

// theme is also fully typed
export const GlobalStyle = createGlobalStyle`
  body {
    background-color:${({ theme }) => theme.colors.black};
    padding: 0 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-family: "Pridi", serif;
    overflow-x: hidden;
  }
  a,
  h1 {
    color: ${({ theme }) => theme.colors.secondary};
  }
  h1{
    font-family: "Dancing Script", cursive;
    font-size: 3rem;
  }
  h2{
    font-size: 2.5rem;
  }
  h2, h3, h4, h5, h6 {
    font-family: "Simonetta", cursive; 
  }
  a{
    font-family: "Simonetta", cursive; 
    font-size:1.5rem ;
    transition: 0.2s all ease-in-out;
    &:hover{
      transform: rotate(10deg);;
    }
  }

  header, main, footer{
  margin: 0 1.5rem ;
  }
`
