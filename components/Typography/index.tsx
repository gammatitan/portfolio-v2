import { Paragraph, BoldText, Title, SubHeading, Heading } from './styles';

type Props = {
  children: React.ReactNode;
  variant?: 'default' | 'bold' | 'title' | 'subheading' | 'heading';
  as?: string;
};

const TypographyLookup = {
  heading: Heading,
  subheading: SubHeading,
  title: Title,
  bold: BoldText,
  default: Paragraph,
};

const Typography = ({ children, variant = 'default', ...rest }: Props) => {
  const TypographyComponent = TypographyLookup[variant];

  // @ts-ignore
  return <TypographyComponent {...rest}>{children}</TypographyComponent>;
};

export default Typography;
