import { createGlobalStyle } from 'styled-components'

// theme is also fully typed
export const MyGlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`
