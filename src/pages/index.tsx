import { ThemeProvider } from 'styled-components';
import { myTheme } from '../globals/theme';

import Header from '../components/Header/Header';
import Presentation from '../components/Presentation/Presentation';
import Resume from '../components/Resume/Resume';
import Projects from '../components/Projects/Projects';

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Resume />
      <Projects />
    </>
  );
}

export default App;
