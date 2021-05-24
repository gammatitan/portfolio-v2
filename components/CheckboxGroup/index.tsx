import { FormikErrors } from 'formik';
import InputError from '../InputError';
import { Label, StyledCheckboxGroup } from './styles';

type Props = {
  label: string;
  children: React.ReactNode;
  gutterBottom?: boolean;
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
};

const CheckboxGroup = (props: Props) => {
  return (
    <StyledCheckboxGroup gutterBottom={props.gutterBottom}>
      <Label>{props.label}</Label>
      {props.children}
      <InputError message={props.error} />
    </StyledCheckboxGroup>
  );
};

export default CheckboxGroup;
