import SimpleReactLightbox from 'simple-react-lightbox';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';

import PageHead from '../components/PageHead';
import { ScrollProvider } from '../state/ScrollContext';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import '../styles/index.css';

const App = ({ Component, pageProps }: AppProps) => {
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
};

export default App;
