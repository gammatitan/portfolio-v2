import React, { useState } from 'react';
import Link from 'next/link';
import Typography from '../Typography';
import IconFolder from '../Icon/IconFolder';
import {
  ProjectCardAnchor,
  ProjectCardClient,
  ProjectCardContentRow,
  ProjectCardContentWrapper,
  ProjectCardSecondaryText,
  ProjectCardSvgWrapper,
} from './styles';

interface Props {
  client: string;
  name: string;
  url: string;
  secondaryText: string;
}

const ProjectCard = ({ client, name, url, secondaryText }: Props) => {
  const [entered, setEntered] = useState(false);

  const className = entered ? 'project-card hovering' : 'project-card';

  return (
    <Link href={url}>
      <ProjectCardAnchor
        className={className}
        onMouseEnter={() => setEntered(true)}
        onMouseLeave={() => setEntered(false)}
      >
        <ProjectCardSvgWrapper>
          <IconFolder />
        </ProjectCardSvgWrapper>
        <ProjectCardContentWrapper>
          <ProjectCardContentRow>
            <ProjectCardClient className="project-card__client">
              {client}
            </ProjectCardClient>
          </ProjectCardContentRow>
          <Typography variant="title">{name}</Typography>
          <ProjectCardSecondaryText className="project-card__secondaryText">
            {secondaryText}
          </ProjectCardSecondaryText>
        </ProjectCardContentWrapper>
      </ProjectCardAnchor>
    </Link>
  );
};

export default ProjectCard;
