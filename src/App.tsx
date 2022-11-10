import { ThemeProvider } from 'styled-components'
import { myTheme } from './globals/theme'
import { GlobalStyle } from './globals/globalStyle'
import Header from './components/Header/Header'
import Presentation from './components/Presentation/Presentation'

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Header />
      <Presentation />
    </ThemeProvider>
  )
}

export default App
