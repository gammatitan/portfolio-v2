import { Experience } from '../../content/Experiences';
import ExternalLink from '../ExternalLink';
import Typography from '../Typography';
import {
  StyledExperienceList,
  ExperienceListItem,
  ExperienceTitle,
} from './styles';

type Props = {
  list: Experience[];
};

const ExperienceList = (props: Props) => {
  return (
    <StyledExperienceList>
      {props.list.map((experience) => (
        <ExperienceListItem
          key={`${experience.jobTitle} ${experience.company}`}
        >
          <ExperienceTitle variant="title">
            {`${experience.jobTitle} `}
            <ExternalLink href={experience.companyUrl}>
              {`@ ${experience.company}`}
            </ExternalLink>
          </ExperienceTitle>
          <Typography variant="bold">{experience.employmentPeriod}</Typography>
          <ul>
            {experience.responsibilities.map((responsibility) => (
              <li key={responsibility}>
                <Typography>{responsibility}</Typography>
              </li>
            ))}
          </ul>
        </ExperienceListItem>
      ))}
    </StyledExperienceList>
  );
};

export default ExperienceList;
