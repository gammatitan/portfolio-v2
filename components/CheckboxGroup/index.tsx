import { Label, StyledCheckboxGroup } from './styles';

type Props = {
  label: string;
  children: React.ReactNode;
  gutterBottom?: boolean;
};

const CheckboxGroup = (props: Props) => {
  return (
    <StyledCheckboxGroup gutterBottom={props.gutterBottom}>
      <Label>{props.label}</Label>
      {props.children}
    </StyledCheckboxGroup>
  );
};

export default CheckboxGroup;
