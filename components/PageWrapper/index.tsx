import Footer from '../Footer';
import Header from '../Header';
import { Content, Wrapper } from './styles';

type Props = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  return (
    <Wrapper>
      <Content>
        <Header />
        <main>{children}</main>
        <Footer />
      </Content>
    </Wrapper>
  );
};

export default PageWrapper;
