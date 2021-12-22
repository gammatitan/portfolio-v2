import { ThemeProvider } from 'styled-components';
import PageHead from '../components/PageHead';
import { ScrollProvider } from '../state/ScrollContext';
import GlobalStyle from '../styles/GlobalStyle';
import SimpleReactLightbox from 'simple-react-lightbox';
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <PageHead />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ScrollProvider>
          <SimpleReactLightbox>
            <Component {...pageProps} />
          </SimpleReactLightbox>
        </ScrollProvider>
      </ThemeProvider>
    </>
  );
}
