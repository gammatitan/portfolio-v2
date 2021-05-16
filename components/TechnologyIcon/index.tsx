import Technologies from '../../constants/technologies';
import IconAWS from '../Icon/IconAWS';
import IconFirebase from '../Icon/IconFirebase';
import IconGatsby from '../Icon/IconGatsby';
import IconGraphQL from '../Icon/IconGraphQL';
import IconJavaScript from '../Icon/IconJavaScript';
import IconNextJS from '../Icon/IconNextJS';
import IconNode from '../Icon/IconNode';
import IconPHP from '../Icon/IconPHP';
import IconReact from '../Icon/IconReact';
import IconSass from '../Icon/IconSass';
import IconStripe from '../Icon/IconStripe';
import IconTypeScript from '../Icon/IconTypeScript';
import IconWordPress from '../Icon/IconWordPress';

type Props = {
  type: Technologies;
};

const TechnologyIcon = ({ type }: Props) => {
  switch (type) {
    case Technologies.Firebase:
      return <IconFirebase />;
    case Technologies.Gatsy:
      return <IconGatsby />;
    case Technologies.GraphQL:
      return <IconGraphQL />;
    case Technologies.JavaScript:
      return <IconJavaScript />;
    case Technologies.PHP:
      return <IconPHP />;
    case Technologies.Sass:
      return <IconSass />;
    case Technologies.TypeScript:
      return <IconTypeScript />;
    case Technologies.WordPress:
      return <IconWordPress />;
    case Technologies.React:
      return <IconReact />;
    case Technologies.Node:
      return <IconNode />;
    case Technologies.Stripe:
      return <IconStripe />;
    case Technologies.AWS:
      return <IconAWS />;
    case Technologies.NextJS:
      return <IconNextJS />;
    default:
      return null;
  }
};

export default TechnologyIcon;
