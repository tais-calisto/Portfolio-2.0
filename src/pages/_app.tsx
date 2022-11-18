import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Header from '@src/components/Header/Header';
import { GlobalStyle } from '@src/globals/globalStyle';
import { myTheme } from '@src/globals/theme';

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
