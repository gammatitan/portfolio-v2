import React, { useState } from 'react';
import Link from 'next/link';
import Typography from '../Typography';
import IconFolder from '../Icon/IconFolder';
import {
  ProjectCardAnchor,
  ProjectCardClient,
  ProjectCardContentRow,
  ProjectCardContentWrapper,
  ProjectCardDate,
  ProjectCardSvgWrapper,
} from './styles';

interface Props {
  client: string;
  name: string;
  url: string;
  date: string;
}

const ProjectCard = ({ client, name, url, date }: Props) => {
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
          <ProjectCardDate className="project-card__date">
            {date}
          </ProjectCardDate>
        </ProjectCardContentWrapper>
      </ProjectCardAnchor>
    </Link>
  );
};

export default ProjectCard;
