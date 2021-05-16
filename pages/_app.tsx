import { ThemeProvider } from 'styled-components';
import PageHead from '../components/PageHead';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <PageHead />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
