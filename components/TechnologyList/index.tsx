import Technologies from '../../constants/technologies';
import TechnologyIcon from '../TechnologyIcon';
import { StyledTechnologyList, TechnologyListItem } from './styles';

type Props = {
  list: Technologies[];
};

const TechnologyList = (props: Props) => {
  return (
    <StyledTechnologyList>
      {props.list.map((item) => (
        <TechnologyListItem key={item}>
          <TechnologyIcon type={item} />
        </TechnologyListItem>
      ))}
    </StyledTechnologyList>
  );
};

export default TechnologyList;
