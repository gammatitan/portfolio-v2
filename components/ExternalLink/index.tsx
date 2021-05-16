import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
};

const ExternalLink = ({ href, children, ...props }: Props) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
    <b>{children}</b>
  </a>
);

export default ExternalLink;
