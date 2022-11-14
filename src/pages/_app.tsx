import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header/Header';
import { GlobalStyle } from '../globals/globalStyle';
import { myTheme } from '../globals/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
