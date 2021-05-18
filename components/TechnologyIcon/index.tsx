import React from 'react';
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
import { IconWrapper } from './styles';

type Props = {
  type: Technologies;
};

const IconLookup: { [x: string]: React.ReactNode } = {
  [Technologies.Firebase]: IconFirebase,
  [Technologies.Gatsy]: IconGatsby,
  [Technologies.GraphQL]: IconGraphQL,
  [Technologies.AWS]: IconAWS,
  [Technologies.JavaScript]: IconJavaScript,
  [Technologies.NextJS]: IconNextJS,
  [Technologies.Node]: IconNode,
  [Technologies.PHP]: IconPHP,
  [Technologies.React]: IconReact,
  [Technologies.Sass]: IconSass,
  [Technologies.Stripe]: IconStripe,
  [Technologies.TypeScript]: IconTypeScript,
  [Technologies.WordPress]: IconWordPress,
};

const TechnologyIcon = ({ type }: Props) => {
  const IconComponent = IconLookup[type];

  return (
    <IconWrapper>
      {/* @ts-ignore */}
      <IconComponent />
    </IconWrapper>
  );
};

export default TechnologyIcon;
