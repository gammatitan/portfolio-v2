import Typography from '../Typography';
import { HeroSubHeading, StyledHero } from './styles';

type Props = {
  title: React.ReactNode;
  subtitle: string;
  children?: React.ReactNode;
};

const HeroBase = (props: Props) => {
  return (
    <StyledHero>
      <div>
        <Typography variant="heading">{props.title}</Typography>
        <HeroSubHeading>{props.subtitle}</HeroSubHeading>
        {props.children}
      </div>
    </StyledHero>
  );
};

export default HeroBase;
