import { ThemeProvider } from 'styled-components'
import { myTheme } from './globals/theme'
import { GlobalStyle } from './globals/globalStyle'
import Header from './components/Header/Header'
function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  )
}

export default App
