import { Paragraph, BoldText, Title, SubHeading, Heading } from './styles';

type Props = {
  children: React.ReactNode;
  variant?: 'default' | 'bold' | 'title' | 'subheading' | 'heading';
};

const Typography = ({ children, variant, ...rest }: Props) => {
  switch (variant) {
    case 'heading':
      return <Heading {...rest}>{children}</Heading>;
    case 'subheading':
      return <SubHeading {...rest}>{children}</SubHeading>;
    case 'title':
      return <Title {...rest}>{children}</Title>;
    case 'bold':
      return <BoldText {...rest}>{children}</BoldText>;
    case 'default':
    default:
      return <Paragraph {...rest}>{children}</Paragraph>;
  }
};

export default Typography;
