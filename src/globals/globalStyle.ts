import { createGlobalStyle } from 'styled-components';
import '@fontsource/dancing-script';
import '@fontsource/simonetta';
import '@fontsource/pridi';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color:${({ theme }) => theme.colors.black};
    padding: 0 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-family: "Pridi", serif;
    overflow-x: hidden;
  }
  a,
  .home-link {
    color: ${({ theme }) => theme.colors.secondary};
  }
  .home-link{
    font-family: "Dancing Script", cursive;
    font-size: 3rem;
    text-decoration: none;
    z-index: 1;
    &:hover{
      transform: rotate(10deg);
    }
  }
  h2{
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  h3{
    font-size: 2rem;
  }
  h2, h3, h4, h5, h6 {
    font-family: "Simonetta", cursive; 
  }
  a{
    font-family: "Simonetta", cursive; 
    font-size:1.5rem ;
    transition: 0.2s all ease-in-out;
  }

  header, main, footer{
  margin: 0 1.5rem ;
  }
`;
