import { ThemeProvider } from 'styled-components'
import { myTheme } from './globals/theme'
import { GlobalStyle } from './globals/globalStyle'
import Header from './components/Header/Header'
import Presentation from './components/Presentation/Presentation'
import Resume from './components/Resume/Resume'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Header />
      <Presentation />
      <Resume />
      <Projects />
    </ThemeProvider>
  )
}

export default App
