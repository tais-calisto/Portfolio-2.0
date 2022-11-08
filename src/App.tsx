import { ThemeProvider } from 'styled-components'
import { myTheme } from './globals/theme'
function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div>Hello, world!</div>
    </ThemeProvider>
  )
}

export default App
